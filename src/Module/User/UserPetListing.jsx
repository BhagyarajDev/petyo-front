import React from 'react'
import Filters from '../../Component/Filter'
import PetList from '../../Component/PetList'

const UserPetListing = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
            <Filters />
            <PetList />
        </div>
    )
}

export default UserPetListing