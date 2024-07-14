"use client"
import RegisterComponent from '@/components/auth/register/registerComponent';
import React from 'react';

const RegisterPage = () => {
    return (
        <div className=" min-h-screen bg-slate-200 w-full mx-auto p-10  ">
            <RegisterComponent/>
        </div>
    );
};

export default RegisterPage;