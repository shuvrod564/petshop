"use client";
import { ResetPassword } from '@/components/auth/resetPassword';
import { useSearchParams } from 'next/navigation';
import Head from 'next/head';
import React from 'react'
import AuthLayout from '../authLayout';

const page = () => {
    const searchParams = useSearchParams();
    const ls_email= searchParams.get('email');
    return (
        <AuthLayout>
            <Head>
                <title>Reset Password</title>
            </Head>
            <ResetPassword ls_email={ls_email} />
        
        </AuthLayout>
    )
}
export default page;
