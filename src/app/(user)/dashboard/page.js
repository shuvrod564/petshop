import React from 'react'
import UserLayout from '../UserLayout'
import { ProfileDetails } from './ProfileDetails'
import { AddressDetails } from './AddressDetails'


const Page = () => {
    return(
        <UserLayout>
            <div className="flex flex-col gap-5">
                <ProfileDetails />
                <AddressDetails />

            </div>
        </UserLayout>
    )
}

export default Page