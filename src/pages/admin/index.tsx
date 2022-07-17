import React from 'react';
import dynamic from 'next/dynamic';

const AdminPanel = dynamic(()=>import("../../components/admin/AdminPanel"),{
    ssr:false,
})

const admin = () => <AdminPanel/>

export default admin;
