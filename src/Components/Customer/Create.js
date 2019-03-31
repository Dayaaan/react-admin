import React from 'react';
import { Create, SimpleForm, TextInput, email } from 'react-admin';

export const CustomerCreate = (props) => (
    <Create { ...props }>
        <SimpleForm>
            <TextInput source="lastName" label="NOM"/>
            <TextInput source="firstName" label="PRENOM"/>
            <TextInput source="email" label="Email" validate={ email() } />
            <TextInput source="adress" label="ADDRESSE"/>
            <TextInput source="city" label="VILLE"/>
            <TextInput source="zipcode" label="CODE POSTALE"/>
            <TextInput source="phone" label="TELEPHONE"/>
        </SimpleForm>
    </Create>
);