import React, {useState} from "react";
import { useUserContext } from '../../Utils/UserContext'
import '../../Styles/HomePageComponents/UserIcon.css'


const UserIcon = () => {

    //TODO: checks that names arent empty/undefined
    const { user } = useUserContext();

    const getInitials = () =>{
        const {firstName, lastName} = user 
        return (firstName[0] + lastName[0])
    }

    return(
        <div className="initialsIcon">
           <p>{getInitials()}</p>
        </div>
    )
}

export default UserIcon