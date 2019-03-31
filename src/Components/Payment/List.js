
import React from 'react';
import { List, Datagrid, TextField, ShowButton, EditButton } from 'react-admin';

export const PaymentList = (props) => (
    <List {...props} title="Payment">
        <Datagrid>
            <TextField source="id" label="ID"/>
            <TextField source="title" label="Titre"/>
            <ShowButton />
            <EditButton />
        </Datagrid>
    </List>
);