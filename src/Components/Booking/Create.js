import React from 'react';
import { NumberInput, Create, SimpleForm, TextInput, DateTimeInput, BooleanInput, SelectInput, ReferenceInput } from 'react-admin';

export const BookingCreate = (props) => (
    <Create { ...props }>
        <SimpleForm>
            <ReferenceInput source="customer" reference="customers">
               <SelectInput optionText="email" />
            </ReferenceInput>
            <ReferenceInput source="parking" reference="parkings">
               <SelectInput optionText="title" />
            </ReferenceInput>
            <DateTimeInput source="startDate" label="DATE ET HEURE D'ARRIVEE"/>
            <DateTimeInput source="endDate" label="DATE DE RETOUR"/>
            <TextInput source="marque" label="MARQUE"/>
            <TextInput source="modele" label="MODELE"/>
            <TextInput source="plaque" label="PLAQUE"/>
            <TextInput source="destination" label="DESTINATION"/>
            <TextInput source="numberVolAller" label="NUMERO VOL ALLER"/>
            <TextInput source="numberVolRetour" label="NUMERO VOL RETOUR"/>
            <TextInput source="place" label="PLACE ?"/>
            <TextInput source="pax" label="Nombre de PAX"/>
            <TextInput source="advantages" label="OPTIONS"/>
            <TextInput source="comment" label="COMMENT"/>
            <NumberInput source="amount" label="PRIX" />
            <BooleanInput source="isPaid" label="Payé ?"/>
            <ReferenceInput source="payment" reference="payments">
               <SelectInput optionText="title" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);