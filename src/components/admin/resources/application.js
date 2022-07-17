import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
    Datagrid, List, Show, Create, Edit,
    DateField, SimpleShowLayout, SimpleForm, TextField, TextInput,
    ShowButton, EditButton, DeleteButton, ReferenceField, NumberField, ReferenceInput,
    SelectInput, EmailField, NumberInput, ReferenceArrayInput, SelectArrayInput, SimpleFormIterator, DateInput, ArrayInput, ReferenceArrayField, SingleFieldList, ChipField, AutocompleteInput, BooleanInput, SelectField, BooleanField,
} from "react-admin";

import { applicant, application, collections, } from "../shcemas"
import { proprety_type_choices, proprety_usage_choices, purpose_choices } from "../shcemas/constants";

export const ApplicationList = (props) => (
    <List {...props}>
        <Datagrid>
            {/**fields */}
            
            <ReferenceArrayField label="Applicants" source={application.applicants} reference={collections.applicants}>
                <SingleFieldList>
                    <ChipField source={applicant.fullname} />
                </SingleFieldList>
            </ReferenceArrayField>
            <SelectField source={application.purpose} />
            <NumberField source={application.expected_income} />
            <SelectField source={application.proprety_type} />
            <NumberField source={application.house_fees} />
            <SelectField source={application.using_proprty_for} />
            <NumberField source={application.annual_tax} />
            <NumberField source={application.purchase_price} />
            <NumberField source={application.down_payment} />
            <TextField source={application.note} />

            {/** actions */}
            <ShowButton label="details" />
            <EditButton label="edit" />
            <DeleteButton label="delete" redirect={false} />
        </Datagrid>
    </List>
);

export const ApplicationShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            {/**fields */}
            <ReferenceArrayField label="Applicants" source={application.applicants} reference={collections.applicants}>
                <SingleFieldList>
                    <ChipField source={applicant.fullname} />
                </SingleFieldList>
            </ReferenceArrayField>
            <SelectField source={application.purpose} />
            <NumberField source={application.expected_income} />
            <SelectField source={application.proprety_type} />
            <NumberField source={application.house_fees} />
            <SelectField source={application.using_proprty_for} />
            <NumberField source={application.annual_tax} />
            <NumberField source={application.purchase_price} />
            <NumberField source={application.down_payment} />
            <TextField source={application.note} />
        </SimpleShowLayout>
    </Show>
);

export const ApplicationCreate = (props) => (
    <Create {...props} >
        <SimpleForm>
            {/**fields */}
            <ReferenceArrayInput label="Applicants" source={application.applicants} reference={collections.applicants}>
                <SelectArrayInput optionText={applicant.fullname} />
            </ReferenceArrayInput>
            <SelectInput source={application.purpose} choices={purpose_choices} />
            <NumberInput source={application.expected_income} />
            <SelectInput source={application.proprety_type} choices={proprety_type_choices} />
            <NumberInput source={application.house_fees} />
            <SelectInput source={application.using_proprty_for} choices={proprety_usage_choices} />
            <NumberInput source={application.annual_tax} />
            <NumberInput source={application.purchase_price} />
            <NumberInput source={application.down_payment} />
            <TextInput multiline source={application.note} /> 
        </SimpleForm>
    </Create>
);

export const ApplicationEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            {/**fields */}
            <ReferenceArrayInput label="Applicants" source={application.applicants} reference={collections.applicants}>
                <SelectArrayInput optionText={applicant.fullname} />
            </ReferenceArrayInput>
            <SelectInput source={application.purpose} choices={purpose_choices} />
            <NumberInput source={application.expected_income} />
            <SelectInput source={application.proprety_type} choices={proprety_type_choices} />
            <NumberInput source={application.house_fees} />
            <SelectInput source={application.using_proprty_for} choices={proprety_usage_choices} />
            <NumberInput source={application.annual_tax} />
            <NumberInput source={application.purchase_price} />
            <NumberInput source={application.down_payment} />
            <TextInput multiline source={application.note} />
        </SimpleForm>
    </Edit>
);
