import React from 'react';
import { SimpleShowLayout, Show, BooleanField, TextField, ShowButton, EditButton } from 'react-admin';

export const ParkingShow = (props) => (
    <Show { ...props }>
        <SimpleShowLayout>
            <TextField source="id" label="ID"/>
            <TextField source="title" label="TITLE"/>
            <BooleanField source="active" label="ACTIF ?"/>
            <ShowButton />
            <EditButton />
        </SimpleShowLayout>
    </Show>
);