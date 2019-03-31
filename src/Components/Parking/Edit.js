import React from 'react';
import { Edit, BooleanInput, SimpleForm, DisabledInput, TextInput } from 'react-admin';

export const ParkingEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="customerId" label="ID"/>
            <TextInput source="lastName" label="NOM"/>
            <TextInput source="title" label="PRENOM"/>
            <BooleanInput source="active" label="Actif ?"/>
        </SimpleForm>
    </Edit>
);