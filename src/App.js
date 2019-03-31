import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import parseHydraDocumentation from '@api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation';
import { hydraClient, fetchHydra as baseFetchHydra  } from '@api-platform/admin';
import authProvider from './authProvider';
import { Redirect } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import MyLayout from './Components/MyLayout';
import UserIcon from '@material-ui/icons/Group';
import PaymentIcon from '@material-ui/icons/Payment';
import ParkingIcon from '@material-ui/icons/LocalParking';
import BookingIcon from '@material-ui/icons/CardTravel';
import Dashboard from './Components/Dashboard';
import MyLoginPage from './Components/MyLoginPage'
// Booking
import { BookingShow } from './Components/Booking/Show';
import { BookingEdit } from './Components/Booking/Edit';
import { BookingCreate } from './Components/Booking/Create';
import { BookingList } from './Components/Booking/List';
// Customer
import { CustomerShow } from './Components/Customer/Show';
import { CustomerEdit } from './Components/Customer/Edit';
import { CustomerCreate } from './Components/Customer/Create';
import { CustomerList } from './Components/Customer/List';
// Parking
import { ParkingList } from './Components/Parking/List';
import { ParkingCreate } from './Components/Parking/Create';
import { ParkingEdit } from './Components/Parking/Edit';
import { ParkingShow } from './Components/Parking/Show';
// Payment
import { PaymentList } from './Components/Payment/List';
import { PaymentCreate } from './Components/Payment/Create';
import { PaymentEdit } from './Components/Payment/Edit';
import { PaymentShow } from './Components/Payment/Show';
const theme = createMuiTheme({
    palette: {
        type: 'light',
    },
});

const entrypoint = 'http://127.0.0.1:8000/api';
const fetchHeaders = {'Authorization': `Bearer ${window.localStorage.getItem('token')}`};
const fetchHydra = (url, options = {}) => baseFetchHydra(url, {
    ...options,
    headers: new Headers(fetchHeaders),
});
const dataProvider = api => hydraClient(api, fetchHydra);
const apiDocumentationParser = entrypoint => parseHydraDocumentation(entrypoint, { headers: new Headers(fetchHeaders) })
    .then(
        ({ api }) => ({api}),
        (result) => {
            switch (result.status) {
                case 401:
                    return Promise.resolve({
                        api: result.api,
                        customRoutes: [{
                            props: {
                                path: '/',
                                render: () => <Redirect to={`/login`}/>,
                            },
                        }],
                    });

                default:
                    return Promise.reject(result);
            }
        },
    );

export default class extends Component {
    state = { api: null };

    componentDidMount() {
        apiDocumentationParser(entrypoint).then(({ api }) => {
            this.setState({ api });
        }).catch((e) => {
            console.log(e);
        });
    }

    render() {
        if (null === this.state.api) return <div>Loading...</div>;
        return (
          <Admin api={ this.state.api }
                  apiDocumentationParser={ apiDocumentationParser }
                  dataProvider={ dataProvider(this.state.api) }
                  theme={ theme }
                  authProvider={ authProvider }
                  dashboard={Dashboard}
                  appLayout={MyLayout}         
                  loginPage={MyLoginPage}
          >               
            <Resource name="bookings" icon={BookingIcon} list={ BookingList } create={ BookingCreate } show={ BookingShow } edit={ BookingEdit } title="Bookings"/>
            <Resource name="customers" icon={UserIcon} list={ CustomerList } create={ CustomerCreate } show={ CustomerShow } edit={ CustomerEdit } title="Customers"/>
            <Resource name="parkings" icon={ParkingIcon} list={ ParkingList } create={ ParkingCreate } show={ ParkingShow } edit={ ParkingEdit } title="Parkings" />
            <Resource name="payments" icon={PaymentIcon} list={ PaymentList } create={ PaymentCreate } show={ PaymentShow } edit={ PaymentEdit } title="Payments" />
          </Admin>
        )
    }
}
