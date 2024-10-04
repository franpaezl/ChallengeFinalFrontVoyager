
import React, { useState } from 'react'
import { User, ChevronDown, ChevronUp, MapPin, Plus, Camera, Mail, Phone } from 'lucide-react'
import CustomerButton from './CustomerButton'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { logoutAction } from '../redux/actions/authAction'

// interface Address {
//   street: string;
//   postalCode: string;
// }

// interface UserInfo {
//   name: string;
//   email: string;
//   phone: string;
//   alternativePhone: string;
//   addresses: Address[];
// }

function ProfileHeader() {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false)
    const [profilePicture, setProfilePicture] = useState('/placeholder.svg?height=100&width=100')
    const [userInfo, setUserInfo] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1 234 567 8900',
        alternativePhone: '+1 098 765 4321',
        addresses: [{ street: '123 Main St, City, Country', postalCode: '12345' }]
    })

    const handleToggleDropdown = () => setIsOpen(!isOpen)





    const handleFileUpload = (event) => {
        const file = event.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setProfilePicture(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleAddAddress = () => {
        const street = prompt('Enter new address:')
        const postalCode = prompt('Enter postal code:')
        if (street && postalCode) {
            setUserInfo(prevInfo => ({
                ...prevInfo,
                addresses: [...prevInfo.addresses, { street, postalCode }]
            }))
        }
    }


    const handleClick = () => {

        dispatch(logoutAction())

        console.log("hice click?");

        Swal.fire({
            title: 'Logged Out',
            text: 'You have been logged out successfully.',
            icon: 'success',
            confirmButtonText: 'OK',
        })


        navigate("/login")

    }
    return (
        <header className="flex justify-between items-center p-4  text-white">
            {/* <h1 className="text-2xl font-bold">My Website</h1> */}
            <div className="relative ">
                <button
                    onClick={handleToggleDropdown}
                    className="flex items-center ml-24 bg-transparent border-none text-[#E6BB4D] cursor-pointer text-base hover:text-[#E6BB4D]  checked:text-[#E6BB4D]"
                >
                    <User size={28} />
                    <span className="mx-2 text-lg">Profile</span>
                    {isOpen ? <ChevronUp size={24} className='text-[#E6BB4D]' /> : <ChevronDown size={24} />}

                </button>
                {isOpen && (
                    <div className="absolute top-full right-0 w-96 bg-white rounded-lg shadow-lg p-4 text-gray-800 z-10">
                        {/* Botones de Login y Register */}
                        <div className="flex items-center justify-end gap-4">
                            <CustomerButton
                                text="Logout"
                                onClick={handleClick}
                                textColor="text-[#0F1D15]" // Cambia al color deseado
                                bgColor="bg-[#E6BB4D]" // Cambia al color de fondo deseado
                                hoverBgColor="bg-[#FFD700]" // Cambia al color de fondo en hover deseado
                            />
                        </div>

                        <div className="flex flex-col items-center mb-4">
                            <div className="relative w-24 h-24 rounded-full bg-gray-200 mb-2 overflow-hidden">
                                <img src={profilePicture} alt="Profile" className="w-full h-full object-cover" />
                                <label htmlFor="profile-picture-upload" className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-1 cursor-pointer">
                                    <Camera size={16} className="inline-block mr-1" />
                                    <span>Upload</span>
                                </label>
                                <input
                                    id="profile-picture-upload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileUpload}
                                    className="hidden"
                                />
                            </div>
                            <h2 className="text-xl font-bold">{userInfo.name}</h2>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <Mail size={16} className="mr-2" />
                                <span className="font-bold mr-2">Email:</span>
                                {userInfo.email}
                            </div>
                            <div className="flex items-center">
                                <Phone size={16} className="mr-2" />
                                <span className="font-bold mr-2">Phone:</span>
                                {userInfo.phone}
                            </div>
                            <div className="flex items-center">
                                <Phone size={16} className="mr-2" />
                                <span className="font-bold mr-2">Alternative Phone:</span>
                                {userInfo.alternativePhone}
                            </div>

                            <h3 className="font-bold mt-4 mb-2">Addresses:</h3>
                            {userInfo.addresses.map((address, index) => (
                                <div key={index} className="flex items-start mb-2">
                                    <MapPin size={16} className="mr-2 mt-1" />
                                    <div>
                                        <div>{address.street}</div>
                                        <div><span className="font-bold">Postal Code:</span> {address.postalCode}</div>
                                    </div>
                                </div>
                            ))}
                            <button
                                onClick={handleAddAddress}
                                className="flex items-center text-blue-500 bg-transparent border-none cursor-pointer text-base p-0 hover:opacity-80"
                            >
                                <Plus size={16} className="mr-2" />
                                Add Address
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default ProfileHeader