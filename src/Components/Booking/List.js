
import React from 'react';
import { Filter, ReferenceInput, SelectInput,DateTimeInput, TextInput, List, ReferenceField, Datagrid, TextField, DateField, ShowButton, EditButton } from 'react-admin';
const BookingFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Recherche PLAQUE" source="plaque" alwaysOn />
    </Filter>
);

export const BookingList = (props) => (
    <List {...props} title="Bookings" filters={<BookingFilter />} >
        <Datagrid>
            <TextField source="id" label="ID"/>
            <ReferenceField source="customer" reference="customers" label="CLIENT">
                <TextField source="email" />
            </ReferenceField>
            <ReferenceField source="parking" reference="parkings">
                <TextField source="title" />
            </ReferenceField>
            <DateField source="startDate" label="DATE ET HEURE D'ARRIVEE" showTime/>
            <DateField source="endDate" label="DATE ET HEURE DE RETOUR" showTime/>
            <TextField source="days" label="NOMBRE DE JOURS"/>
            <TextField source="place" label="PLACE"/>
            <TextField source="plaque" label="PLAQUE"/>
            <ReferenceField source="payment" reference="payments" label="PAIEMENT">
                <TextField source="title" />
            </ReferenceField>
            <ShowButton />
            <EditButton />
        </Datagrid>
    </List>
);