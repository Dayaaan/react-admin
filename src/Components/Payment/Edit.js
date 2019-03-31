import React from 'react';
import { Edit, BooleanInput, SimpleForm, DisabledInput, TextInput } from 'react-admin';

export const PaymentEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="customerId" label="ID"/>
            <TextInput source="title" label="TITLE"/>
            <BooleanInput source="active" label="Actif ?"/>
        </SimpleForm>
    </Edit>
);