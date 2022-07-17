import { LocalizationProvider } from "@mui/lab";
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
    NumberInput,


} from "react-admin";
import { collections, contract, intrest, lender } from "../shcemas";
import { term_coices } from "../shcemas/constants";


export const IntrestList = (props) => (
    <List {...props}>
        <Datagrid>
            {/**fields */}

            <ReferenceField label="Lender" source={intrest.lender} reference={collections.lenders}>
                <TextField source={lender.name} />
            </ReferenceField>
            <ReferenceField label="Contract" source={intrest.contract} reference={collections.contracts}>
                <TextField source={contract.name} />
            </ReferenceField>
            <TextField source={intrest.term} />
            <NumberField source={intrest.fixed_rate} />
            <NumberField source={intrest.prime_offset} />
            <NumberField source={intrest.hold} />
            {/** actions */}
            <ShowButton label="details" />
            <EditButton label="edit" />
            <DeleteButton label="delete" redirect={false} />

        </Datagrid>
    </List>
);

export const IntrestShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <ReferenceField label="Lender" source={intrest.lender} reference={collections.lenders}>
                <TextField source={lender.name} />
            </ReferenceField>
            <ReferenceField label="Contract" source={intrest.contract} reference={collections.contracts}>
                <TextField source={contract.name} />
            </ReferenceField>
            <TextField source={intrest.term} />
            <NumberField source={intrest.fixed_rate} />
            <NumberField source={intrest.prime_offset} />
            <NumberField source={intrest.hold} />

        </SimpleShowLayout>
    </Show>
);

export const IntrestCreate = (props) => (
    <Create {...props} >
        <SimpleForm>

            <ReferenceInput label="Lender" source={intrest.lender} reference={collections.lenders}>
                <SelectInput optionText={lender.name} />
            </ReferenceInput>
            <ReferenceInput label="Contract" source={intrest.contract} reference={collections.contracts}>
                <SelectInput optionText={contract.name} />
            </ReferenceInput>
            <SelectInput label="Term" source={intrest.term} choices={term_coices} />
            <NumberInput source={intrest.fixed_rate} />
            <NumberInput source={intrest.prime_offset} />
            <NumberInput source={intrest.hold} />

        </SimpleForm>
    </Create>
);

export const IntrestEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput label="Lender" source={intrest.lender} reference={collections.lenders}>
                <SelectInput optionText={lender.name} />
            </ReferenceInput>
            <ReferenceInput label="Contract" source={intrest.contract} reference={collections.contracts}>
                <SelectInput optionText={contract.name} />
            </ReferenceInput>
            <SelectInput label="Term" source={intrest.term} choices={term_coices} />
            <NumberInput source={intrest.fixed_rate} />
            <NumberInput source={intrest.prime_offset} />
            <NumberInput source={intrest.hold} />

        </SimpleForm>
    </Edit>
);
