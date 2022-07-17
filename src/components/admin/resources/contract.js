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
    ReferenceInput,
    SelectInput,
    BooleanField,
    NumberInput,
    BooleanInput,


} from "react-admin";
import { contract } from "../shcemas";
import { payment_choices, purpose_choices } from "../shcemas/constants";


export const ContractList = (props) => (
    <List {...props}>
        <Datagrid>
            {/**fields */}
            <TextField source={contract.name} />
            <NumberField source={contract.LTV_L} />
            <NumberField source={contract.LTV_U} />
            <BooleanField source={contract.insured} />
            <TextField source={contract.purpose} />
            {/** actions */}
            <ShowButton label="details" />
            <EditButton label="edit" />
            <DeleteButton label="delete" redirect={false} />

        </Datagrid>
    </List>
);

export const ContractShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source={contract.name} />
            <NumberField source={contract.LTV_L} />
            <NumberField source={contract.LTV_U} />
            <BooleanField source={contract.insured} />
            <TextField source={contract.purpose} />
        </SimpleShowLayout>
    </Show>
);

export const ContractCreate = (props) => (
    <Create {...props} >
        <SimpleForm>
            <TextInput source={contract.name} />
            <NumberInput source={contract.LTV_L} />
            <NumberInput source={contract.LTV_U} />
            <BooleanInput source={contract.insured} />
            <SelectInput label="Purpose" source={contract.purpose} choices={purpose_choices} />

        </SimpleForm>
    </Create>
);

export const ContractEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source={contract.name} />
            <NumberInput label="LTV LOW" source={contract.LTV_L} />
            <NumberInput label="LTV UP" source={contract.LTV_U} />
            <BooleanInput source={contract.insured} />
            <SelectInput label="Purpose" source={contract.purpose} choices={payment_choices} />
        </SimpleForm>
    </Edit>
);
