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


} from "react-admin";


export const ProgramVariantList = (props) => (
    <List {...props}>
        <Datagrid>
            {/**fields */}
            <TextField source="name" />
            <ReferenceField label="Program" source="program" reference="programs">
                <TextField source="name" />
            </ReferenceField>
            {/** actions */}
            <ShowButton label="details" />
            <EditButton label="edit" />
            <DeleteButton label="delete" redirect={false} />

        </Datagrid>
    </List>
);

export const ProgramVariantShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="name" />
            <ReferenceField label="Program" source="program" reference="programs">
                <TextField source="name" />
            </ReferenceField>

        </SimpleShowLayout>
    </Show>
);

export const ProgramVariantCreate = (props) => (
    <Create {...props} >
        <SimpleForm>
            <TextInput source="name" />
            <ReferenceInput label="Program" source="program" reference="programs">
                <SelectInput optionText="name"  />
            </ReferenceInput>

        </SimpleForm>
    </Create>
);

export const ProgramVariantEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <ReferenceInput label="Program" source="program" reference="programs">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);
