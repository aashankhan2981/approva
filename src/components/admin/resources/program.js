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
    ReferenceArrayField,
    SingleFieldList,
    ChipField,
    ReferenceArrayInput,
    SelectArrayInput,


} from "react-admin";
import { applicant, applicant_group, collections, program } from "../shcemas";
import { purpose_choices } from "../shcemas/constants";


export const ProgramList = (props) => (
    <List {...props}>
        <Datagrid>
            {/**fields */}
            <TextField source={program.name} />
            <TextField source={program.description} />
            <TextField source={program.purpose} />
            <TextField source={program.required_documents} />
            
            <ReferenceArrayField label="Groups" source={program.groups} reference={collections.applicant_groups}>
                <SingleFieldList>
                    <ChipField source={applicant_group.name} />
                </SingleFieldList>
            </ReferenceArrayField>
            {/** actions */}
            <ShowButton label="details" />
            <EditButton label="edit" />
            <DeleteButton label="delete" redirect={false} />

        </Datagrid>
    </List>
);

export const ProgramShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
        <TextField source={program.name} />
            <TextField source={program.description} />
            <TextField source={program.purpose} />
            <TextField source={program.required_documents} />
            <ReferenceArrayField label="Groups" source={program.groups} reference={collections.applicant_groups}>
                <SingleFieldList>
                    <ChipField source={applicant_group.name} />
                </SingleFieldList>
            </ReferenceArrayField>
        </SimpleShowLayout>
    </Show>
);

export const ProgramCreate = (props) => (
    <Create {...props} >
        <SimpleForm>
            <TextInput source={program.name} />
            <SelectInput source={program.purpose} choices={purpose_choices} />
            <TextInput source={program.description} />
            <TextInput source={program.required_documents} />
            <ReferenceArrayInput label="Groups" source={program.groups} reference={collections.applicant_groups}>
                <SelectArrayInput optionText={applicant_group.name} />
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
);

export const ProgramEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source={program.name} />
            <SelectInput source={program.purpose} choices={[
                { id: 'purchase', name: 'Purchase' },
                { id: 'refinance', name: 'Refinance' },
                { id: 'pre-approval', name: 'Pre-Approval' },
            ]} />
            <TextInput source={program.description} />
            <TextInput source={program.required_documents} />
        </SimpleForm>
    </Edit>
);
