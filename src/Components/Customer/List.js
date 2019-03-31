
import React from 'react';
import { List, Datagrid, TextField, EmailField, ShowButton, EditButton } from 'react-admin';

export const CustomerList = (props) => (
    <List {...props} title="Customers">
        <Datagrid>
            <TextField source="id" label="ID"/>
            <TextField source="lastName" label="Nom"/>
            <TextField source="firstName" label="Prénom"/>
            <EmailField source="email" label="email"/>
            <TextField source="adress" label="Addresse"/>
            <TextField source="city" label="Ville"/>
            <TextField source="zipcode" label="Code postale"/>
            <TextField source="phone" label="Téléphone"/>
            <ShowButton />
            <EditButton />
        </Datagrid>
    </List>
);