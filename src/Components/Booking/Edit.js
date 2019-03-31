import React from 'react';
import { ReferenceField, TextField, BooleanInput, Edit, SimpleForm, DisabledInput, TextInput, DateInput } from 'react-admin';

export const BookingEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ID"/>
            <ReferenceField source="customer" reference="customers">
                <TextField source="email" />
            </ReferenceField>
            <DateInput source="startDate" label="Date et l'heure d'arrivée" showTime/>
            <DateInput source="endDate" label="Date de retour" showTime/>
            <TextInput source="marque" label="Marque"/>
            <TextInput source="modele" label="Modele"/>
            <TextInput source="plaque" label="plaque"/>
            <TextInput source="destination" label="Destination"/>
            <TextInput source="numberVolAller" label="Numero de vol aller"/>
            <TextInput source="numberVolRetour" label="Numéro de vol retour"/>
            <TextInput source="place" label="Ou se trouve la voiture ?"/>
            <BooleanInput label="Payé ?" source="isPaid"/>
        </SimpleForm>
    </Edit>
);