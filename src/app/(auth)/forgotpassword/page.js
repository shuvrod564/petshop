import { ForgotPassword } from '@/components/auth/forgotPassword';
import Head from 'next/head';
import React from 'react'
import AuthLayout from '../authLayout';

const page = () => {
    return (
        <AuthLayout>
            <Head>
                <title>Forgot Password</title>
            </Head>
            <ForgotPassword />
        
        </AuthLayout>
    )
}
export default page;
