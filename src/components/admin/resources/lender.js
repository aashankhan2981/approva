import { LocalizationProvider } from "@mui/lab";
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  DateInput,
  DateField,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  RichTextField,
  EditButton,
  DeleteButton,
  FileField,
  FileInput,
  NumberInput,
  NumberField,
  ImageField,


} from "react-admin";
import { lender } from "../shcemas";


export const LenderList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source={lender.name} />
      <TextField source={lender.color} />
      <NumberField source={lender.approva_benif_portion} />
      <ImageField source={`${lender.logo}.src`} label="Logo" />
      <TextField source={lender.bunus_products} />
      <ShowButton label="details" />
      <EditButton label="edit" />
      <DeleteButton label="delete" redirect={false} />
    </Datagrid>
  </List>
);

export const LenderShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source={lender.name} />
      <TextField source={lender.color} />
      <NumberField source={lender.approva_benif_portion} />
      <ImageField source={`${lender.logo}.src`} label="Logo" />
      <TextField source={lender.bunus_products} />
      <DateField source="createdate" options={{ disabled: true }} />
      <DateField source="lastupdate" options={{ disabled: true }} />
    </SimpleShowLayout>
  </Show>
);

export const LenderCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source={lender.name} />
      <TextInput source={lender.color} />
      <NumberInput source={lender.approva_benif_portion} />
      <TextInput multiline source={lender.bunus_products} />
      <FileInput source={lender.logo} >
        <FileField source="src" title="Logo" />
      </FileInput>
    </SimpleForm>
  </Create>
);

export const LenderEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source={lender.name} />
      <TextInput source={lender.color} />
      <NumberInput source={lender.approva_benif_portion} />
      <TextInput multiline source={lender.bunus_products} />
      <FileInput source={lender.logo} >
        <FileField source="src" title="Logo" />
      </FileInput>
    </SimpleForm>
  </Edit>
);
