import React from 'react';
import { Edit, SimpleForm, DisabledInput, TextInput, email } from 'react-admin';

export const CustomerEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="customerId" label="ID"/>
            <TextInput source="lastName" label="NOM"/>
            <TextInput source="firstName" label="PRENOM"/>
            <TextInput source="email" label="Email" validate={ email() } />
            <TextInput source="adress" label="ADDRESSE"/>
            <TextInput source="city" label="VILLE"/>
            <TextInput source="zipcode" label="CODE POSTALE"/>
            <TextInput source="phone" label="TELEPHONE"/>
        </SimpleForm>
    </Edit>
);