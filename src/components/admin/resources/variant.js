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
import { collections, contract, variant, lender, program } from "../shcemas";
import { term_coices } from "../shcemas/constants";


export const VariantList = (props) => (
    <List {...props}>
        <Datagrid>
            {/**fields */}
            <ReferenceField label="Lender" source={variant.lender} reference={collections.lenders}>
                <TextField source={lender.name} />
            </ReferenceField>
            <ReferenceField label="Program" source={variant.program} reference={collections.programs}>
                <TextField source={program.name} />
            </ReferenceField>
            <NumberField source={variant.LTV_L} />
            <NumberField source={variant.LTV_U} />
            <NumberField source={variant.FICO_L} />
            <NumberField source={variant.FICO_U} />
            <NumberField source={variant.GDS} />
            <NumberField source={variant.TDS} />
            <NumberField source={variant.bankruptcy} />
            <NumberField source={variant.squar_footage} />
            <NumberField source={variant.population} />
            {/** actions */}
            <ShowButton label="details" />
            <EditButton label="edit" />
            <DeleteButton label="delete" redirect={false} />

        </Datagrid>
    </List>
);

export const VariantShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <ReferenceField label="Lender" source={variant.lender} reference={collections.lenders}>
                <TextField source={lender.name} />
            </ReferenceField>
            <ReferenceField label="Program" source={variant.program} reference={collections.programs}>
                <TextField source={program.name} />
            </ReferenceField>
            <NumberField source={variant.LTV_L} />
            <NumberField source={variant.LTV_U} />
            <NumberField source={variant.FICO_L} />
            <NumberField source={variant.FICO_U} />
            <NumberField source={variant.GDS} />
            <NumberField source={variant.TDS} />
            <NumberField source={variant.bankruptcy} />
            <NumberField source={variant.squar_footage} />
            <NumberField source={variant.population} />
        </SimpleShowLayout>
    </Show>
);

export const VariantCreate = (props) => (
    <Create {...props} >
        <SimpleForm>
            <ReferenceInput label="Lender" source={variant.lender} reference={collections.lenders}>
                <SelectInput optionText={lender.name} />
            </ReferenceInput>
            <ReferenceInput label="Program" source={variant.program} reference={collections.programs}>
                <SelectInput optionText={program.name} />
            </ReferenceInput>
            <NumberInput source={variant.LTV_L} />
            <NumberInput source={variant.LTV_U} />
            <NumberInput source={variant.FICO_L} />
            <NumberInput source={variant.FICO_U} />
            <NumberInput source={variant.GDS} />
            <NumberInput source={variant.TDS} />
            <NumberInput source={variant.bankruptcy} />
            <NumberInput source={variant.squar_footage} />
            <NumberInput source={variant.population} />
        </SimpleForm>
    </Create>
);

export const VariantEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput label="Lender" source={variant.lender} reference={collections.lenders}>
                <SelectInput optionText={lender.name} />
            </ReferenceInput>
            <ReferenceInput label="Program" source={variant.program} reference={collections.programs}>
                <SelectInput optionText={program.name} />
            </ReferenceInput>
            <NumberInput source={variant.LTV_L} />
            <NumberInput source={variant.LTV_U} />
            <NumberInput source={variant.FICO_L} />
            <NumberInput source={variant.FICO_U} />
            <NumberInput source={variant.GDS} />
            <NumberInput source={variant.TDS} />
            <NumberInput source={variant.bankruptcy} />
            <NumberInput source={variant.squar_footage} />
            <NumberInput source={variant.population} />

        </SimpleForm>
    </Edit>
);
