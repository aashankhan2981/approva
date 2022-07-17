import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
    Datagrid,
    List,
    Show,
    Create,
    Edit,
    DateField,
    SimpleShowLayout,
    SimpleForm,
    TextField,
    TextInput,
    ShowButton,
    EditButton,
    DeleteButton,
    

} from "react-admin";


export const ApplicantGroupList = (props) => (
    <List {...props}>
        <Datagrid>
            {/**fields */}
            <TextField source="name" />
            <TextField source="description" />
            {/** actions */}
            <ShowButton label="details" />
            <EditButton label="edit" />
            <DeleteButton label="delete" redirect={false} />
        </Datagrid>
    </List>
);

export const ApplicantGroupShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <DateField source="createdate" options={{ disabled: true }} />
            <DateField source="lastupdate" options={{ disabled: true }} />
        </SimpleShowLayout>
    </Show>
);

export const ApplicantGroupCreate = (props) => (
    <Create {...props} >
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);

export const ApplicantGroupEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);
