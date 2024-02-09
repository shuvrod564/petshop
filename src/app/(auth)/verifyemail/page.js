"use client";
import { VerifyOtp } from '@/components/auth/verifyOtp';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation';
import React from 'react'
import AuthLayout from '../authLayout';

const VerifyEmail = () => {
    const searchParams = useSearchParams();
    const ls_email= searchParams.get('email');
    return (
        <AuthLayout>
            <Head>
                <title>Verify Email</title>
            </Head>
            <VerifyOtp verifyFor="registration" ls_email={ls_email} />
        
        </AuthLayout>
    )
}
export default VerifyEmail;
