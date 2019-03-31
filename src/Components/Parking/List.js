
import React from 'react';
import { List, BooleanField, Datagrid, TextField, ShowButton, EditButton } from 'react-admin';

export const ParkingList = (props) => (
    <List {...props} title="Parkings">
        <Datagrid>
            <TextField source="id" label="ID"/>
            <TextField source="title" label="TITLE"/>
            <BooleanField source="active" label="ACTIF ?"/>
            <ShowButton />
            <EditButton />
        </Datagrid>
    </List>
);