import axios from "axios";
import { useState } from "react";
import UserContext from "./UserContext";

export const UserProvider = (props) => {

    const [user, setUser] = useState([])
    const baseUrl = "http://localhost:3000/api/users";


    async function createUser(username, password, userEmail, userCity, userState, userZip, userReferral, userImage) {
        // added the user email, city, state, zip and referral -- let's test to see if it connects now
        let user = { username, password, userEmail, userCity, userState, userZip, userReferral, userImage };

        const response = await axios.post(baseUrl, user);
        return await new Promise(resolve => resolve(response.data));
    }

    async function signInUser(username, password) {
        let user = { username, password };

        const response = await axios.post(`${baseUrl}/login`, user);
        localStorage.setItem('myFairToken', response.data.token);
        return await new Promise(resolve => resolve(response.data));
    }

    async function getCurrentUser() {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myFairToken')}`
        };

        const response = await axios.get(`${baseUrl}/`, { headers: myHeaders });
        try {
            return await new Promise((resolve) => resolve(response.data));
        } catch (error) {
            return await new Promise((_, reject) => reject(error.response.statusText));
        }
    };

    return (
        <UserContext.Provider value={{
            user,
            createUser,
            signInUser,
            getCurrentUser
        }}>
            {props.children}
        </UserContext.Provider>
    )
}