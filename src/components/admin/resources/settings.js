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
    ReferenceField,
    NumberField,
    NumberInput,


} from "react-admin";


export const SettingList = (props) => (
    <List {...props}>
        <Datagrid>
            {/**fields */}
            <NumberField source="client_portion" />
            <NumberField source="prime_rate" />
            <NumberField source="qualifying_rate" />
            {/** actions */}
            <ShowButton label="details" />
            <EditButton label="edit" />
            <DeleteButton label="delete" redirect={false} />
        </Datagrid>
    </List>
);

export const SettingShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <NumberField source="client_portion" />
            <NumberField source="prime_rate" />
            <NumberField source="qualifying_rate" />
        </SimpleShowLayout>
    </Show>
);
export const SettingCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <NumberInput source="client_portion" />
            <NumberInput source="prime_rate" />
            <NumberInput source="qualifying_rate" />
        </SimpleForm>
    </Create>
);
export const SettingEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <NumberInput source="client_portion" />
            <NumberInput source="prime_rate" />
            <NumberInput source="qualifying_rate" />
        </SimpleForm>
    </Edit>
);
