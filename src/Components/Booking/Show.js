import React from 'react';
import { ReferenceField, BooleanField, Show, SimpleShowLayout, TextField, DateField, EditButton } from 'react-admin';

export const BookingShow = (props) => (
    <Show { ...props }>
        <SimpleShowLayout>
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
            <TextField source="marque" label="MARQUE"/>
            <TextField source="modele" label="MODELE"/>
            <TextField source="plaque" label="PLAQUE"/>
            <TextField source="destination" label="DESTINATION"/>
            <TextField source="numberVolAller" label="NUMERO VOL ALLER"/>
            <TextField source="numberVolRetour" label="NUMERO VOL RETOUR"/>
            <TextField source="place" label="PLACE"/>
            <TextField source="amount" label="PRIX"/>
            <ReferenceField source="payment" reference="payments" label="PAIEMENT">
                <TextField source="title" />
            </ReferenceField>
            <BooleanField source="isPaid" label="PAYER?"/>
            <EditButton />
        </SimpleShowLayout>
    </Show>
);