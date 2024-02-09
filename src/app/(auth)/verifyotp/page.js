"use client";
import { VerifyOtp } from '@/components/auth/verifyOtp';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation';
import React from 'react'
import AuthLayout from '../authLayout';

const VerifyOtpForForgotPassword = () => {
    const searchParams = useSearchParams();
    const ls_email= searchParams.get('email');
    return (
        <AuthLayout>
            <Head>
                <title>Verify Account</title>
            </Head>
            <VerifyOtp verifyFor="forgotPassword" ls_email={ls_email}/>
        
        </AuthLayout>
    )
}
export default VerifyOtpForForgotPassword;
