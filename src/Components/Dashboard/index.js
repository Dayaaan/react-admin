import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { Filter, DateInput, TextInput, List, Datagrid, TextField, DateField, ShowButton, EditButton } from 'react-admin';

let fakeProps = {
    basePath: "/bookings",
    hasCreate: false,
    hasEdit: false,
    hasList: true,
    hasShow: false,
    history: {},
    location: { pathname: "/", search: "", hash: "", state: undefined },
    match: { path: "/", url: "/", isExact: true, params: {} },
    options: {},
    permissions: null,
    resource: "bookings"
}

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <DateInput source="startDate" />
    </Filter>
);

export default () => (
    <Card>
        <CardHeader title="Bienvenue sur ton espace d'administration" />
        <CardContent>
            <h1>Administration</h1>
            {/* <List {...fakeProps} filter={{ field: 'startDate', sort: new Date('now') }}>
              <Datagrid>
                 <TextField source="marque" label="marque"/>
                 <TextField source="days" label="Nombre de jours"/>
                 <DateField source="startDate" label="DATE ET HEURE D'ARRIVEE" showTime/>
              </Datagrid>
            </List> */}
        </CardContent>
    </Card>         
);