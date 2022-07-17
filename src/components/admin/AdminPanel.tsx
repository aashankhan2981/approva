import React from 'react';
import { FirebaseAuthProvider, FirebaseDataProvider } from 'react-admin-firebase'
import { Admin, Resource } from 'react-admin'
import {
    ApplicantList, ApplicantShow, ApplicantCreate, ApplicantEdit,
    ApplicantGroupCreate, ApplicantGroupEdit, ApplicantGroupList, ApplicantGroupShow,
    ContractCreate, ContractEdit, ContractList, ContractShow,
    VariantCreate, VariantEdit, VariantList, VariantShow,
    IntrestCreate, IntrestEdit, IntrestList, IntrestShow,
    LenderCreate, LenderEdit, LenderList, LenderShow,
    ProgramCreate, ProgramEdit, ProgramList, ProgramShow,
    SettingEdit, SettingList, SettingShow,
     ApplicationList, ApplicationShow, ApplicationCreate, ApplicationEdit, SettingCreate
} from './resources';
import { collections } from './shcemas';
import { config } from '../../firebase/config';



const AdminPanel = () => {
    const dataProvider = FirebaseDataProvider(config)
    const authProvider = FirebaseAuthProvider(config,{})
    return (
        <Admin dataProvider={dataProvider} authProvider={authProvider}>
            <Resource name={collections.settings} list={SettingList} show={SettingShow} create={SettingCreate} edit={SettingEdit} />
            {/** */}
            {/*<Resource name={collections.applicant_groups} list={ApplicantGroupList} show={ApplicantGroupShow} create={ApplicantGroupCreate} edit={ApplicantGroupEdit} />
            <Resource name={collections.applicants} list={ApplicantList} show={ApplicantShow} create={ApplicantCreate} edit={ApplicantEdit} />
    <Resource name={collections.applications} list={ApplicationList} show={ApplicationShow} create={ApplicationCreate} edit={ApplicationEdit} />*/}
            {/** */}
            <Resource name={collections.lenders} list={LenderList} show={LenderShow} create={LenderCreate} edit={LenderEdit} />
            {/*<Resource name={collections.programs} list={ProgramList} show={ProgramShow} create={ProgramCreate} edit={ProgramEdit} />*/}
            {/*<Resource name={collections.variants} list={VariantList} show={VariantShow} create={VariantCreate} edit={VariantEdit} />*/}

            {/*<Resource name={collections.contracts} list={ContractList} show={ContractShow} create={ContractCreate} edit={ContractEdit} />*/}
            {/*<Resource name={collections.intrests} list={IntrestList} show={IntrestShow} create={IntrestCreate} edit={IntrestEdit} />*/}

        </Admin>
    );
};
export default AdminPanel;
