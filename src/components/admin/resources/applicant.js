import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
    Datagrid, List, Show, Create, Edit,
    DateField, SimpleShowLayout, SimpleForm, TextField, TextInput,
    ShowButton, EditButton, DeleteButton, ReferenceField, NumberField, ReferenceInput,
    SelectInput, EmailField, NumberInput, ReferenceArrayInput, SelectArrayInput, SimpleFormIterator, DateInput, ArrayInput, ReferenceArrayField, SingleFieldList, ChipField, AutocompleteInput, BooleanInput, SelectField, BooleanField,
} from "react-admin";

import { applicant, applicant_group, collections, dept, income } from "../shcemas";
import { dept_type_choices, first_buyer_choices, income_type_choices, living_status_choices, payment_choices, province_choices } from "../shcemas/constants";

export const ApplicantList = (props) => (
    <List {...props}>
        <Datagrid>
            {/**fields */}
            <TextField source={applicant.user} />
            <ReferenceArrayField label="Groups" source={applicant.groups} reference={collections.applicant_groups}>
                <SingleFieldList>
                    <ChipField source={applicant_group.name} />
                </SingleFieldList>
            </ReferenceArrayField>
            <TextField source={applicant.fullname} />
            <EmailField source={applicant.email} />
            <TextField source={applicant.phone} />
            <TextField source={applicant.province} />
            <TextField source={applicant.address} />
            <SelectField source={applicant.living_status} choices={living_status_choices} />
            <NumberField source={applicant.rent_payment} defaultValue={0}/>
            <BooleanField source={applicant.is_co_signer}/>
            <NumberField source={applicant.FICO} />
            <NumberField source={applicant.bankruptcy} />
            <DateField source={applicant.discharged_date} />
            {/** actions */}
            <ShowButton label="details" />
            <EditButton label="edit" />
            <DeleteButton label="delete" redirect={false} />
        </Datagrid>
    </List>
);

export const ApplicantShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            {/**fields */}
            <TextField source={applicant.user} />
            <ReferenceArrayField label="Groups" source={applicant.groups} reference={collections.applicant_groups}>
                <SingleFieldList>
                    <ChipField source={applicant_group.name} />
                </SingleFieldList>
            </ReferenceArrayField>
            <TextField source={applicant.fullname} />
            <EmailField source={applicant.email} />
            <TextField source={applicant.phone} />
            <TextField source={applicant.province} />
            <TextField source={applicant.address} />
            <SelectField source={applicant.living_status} choices={living_status_choices} />
            <NumberField source={applicant.rent_payment} defaultValue={0}/>
            <BooleanField source={applicant.is_co_signer}/>
            <NumberField source={applicant.FICO} />
            <NumberField source={applicant.bankruptcy} />
            <DateField source={applicant.discharged_date} />
            
            

        </SimpleShowLayout>
    </Show>
);

export const ApplicantCreate = (props) => (
    <Create {...props} >
        <SimpleForm>
            {/**fields */}
            <TextInput source="user" />
            <ReferenceArrayInput label="Groups" source={applicant.groups} reference={collections.applicant_groups}>
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
            <TextInput source={applicant.fullname} />
            <TextInput source={applicant.email} />
            <TextInput source={applicant.phone} />
            <AutocompleteInput source={applicant.province} choices={province_choices} />
            <TextInput source={applicant.address} />
            <SelectInput source={applicant.living_status} choices={living_status_choices} />
            <NumberInput source={applicant.rent_payment} defaultValue={0}/>
            <BooleanInput source={applicant.is_co_signer}/>
            <SelectInput source={applicant.first_time_buyer} choices={first_buyer_choices} />
            <NumberInput label={applicant.FICO} source={applicant.FICO} />
            <NumberInput source={applicant.bankruptcy} />
            <DateInput source={applicant.discharged_date} />
            <ArrayInput source={applicant.incomes}>
                <SimpleFormIterator>
                    <SelectInput label="Income" source={income.income_type} choices={income_type_choices} />
                    <NumberInput label="Amount" source={income.income_amount} />
                    <SelectInput label="Period" source={income.income_period} choices={payment_choices} />
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput source={applicant.depts}>
                <SimpleFormIterator>
                    <TextInput source="job_title" />
                    <SelectInput label="Loan" source={dept.dept_type} choices={dept_type_choices} />
                    <NumberInput label="Amount" source={dept.dept_amount} />
                    <SelectInput label="Period" source={dept.dept_period} choices={payment_choices} />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);

export const ApplicantEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            {/**fields */}
            <TextInput source="user" />
            <ReferenceArrayInput label="Groups" source={applicant.groups} reference={collections.applicant_groups}>
                <SelectArrayInput optionText={applicant_group.name} />
            </ReferenceArrayInput>
            <TextInput source={applicant.fullname} />
            <TextInput source={applicant.email} />
            <TextInput source={applicant.phone} />
            <AutocompleteInput source={applicant.province} choices={province_choices} />
            <TextInput source={applicant.address} />
            <SelectInput source={applicant.living_status} choices={living_status_choices} />
            <NumberInput source={applicant.rent_payment} defaultValue={0}/>
            <BooleanInput source={applicant.is_co_signer}/>
            <BooleanInput source={applicant.first_time_buyer} />
            <NumberInput label={applicant.FICO} source={applicant.FICO} />
            <NumberInput source={applicant.bankruptcy} />
            <DateInput source={applicant.discharged_date} />
            <ArrayInput source={applicant.incomes}>
                <SimpleFormIterator>
                    <SelectInput label="Income" source={income.income_type} choices={income_type_choices} />
                    <NumberInput label="Amount" source={income.income_amount} />
                    <SelectInput label="Period" source={income.income_period} choices={payment_choices} />
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput source={applicant.depts}>
                <SimpleFormIterator>
                    <TextInput source="job_title" />
                    <SelectInput label="Loan" source={dept.dept_type} choices={dept_type_choices} />
                    <NumberInput label="Amount" source={dept.dept_amount} />
                    <SelectInput label="Period" source={dept.dept_period} choices={payment_choices} />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);
