import React from 'react';
import { Show, SimpleShowLayout, TextField, EmailField, EditButton } from 'react-admin';

export const CustomerShow = (props) => (
    <Show { ...props }>
        <SimpleShowLayout>
            <TextField source="id" label="ID"/>
            <TextField source="lastName" label="Nom"/>
            <TextField source="firstName" label="Prénom"/>
            <EmailField source="email" label="email"/>
            <TextField source="adress" label="Addresse"/>
            <TextField source="city" label="Ville"/>
            <TextField source="zipcode" label="Code postale"/>
            <TextField source="phone" label="Téléphone"/>
            <EditButton />
        </SimpleShowLayout>
    </Show>
);