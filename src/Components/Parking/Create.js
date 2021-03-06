import React from 'react';
import { Create, BooleanInput, SimpleForm, TextInput } from 'react-admin';

export const ParkingCreate = (props) => (
    <Create { ...props }>
        <SimpleForm>
            <TextInput source="title" label="PRENOM"/>
            <BooleanInput source="active" label="Actif ?"/>
        </SimpleForm>
    </Create>
);