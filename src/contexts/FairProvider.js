import axios from "axios";
import { useEffect, useState } from "react";
import FairContext from "./FairContext";

export const FairProvider = (props) => {
  const [fair, setFair] = useState([]);
  const baseUrl = "http://localhost:3000/api/fairs";


  useEffect(() => {
    async function getFairs() {
      await getAllFairs();
    }
    getFairs();
  }, []);

  function getAllFairs() {
    return axios.get(baseUrl).then((response) => {
      setFair(response.data);
    });
  }

  function searchFairs(searchQuery) {
    return  axios.get(`${baseUrl}/search/${searchQuery}`).then((response) => {
    //  setFair(response.data);
      if (response.data.length === 0 ) {
        alert("NO MATCHES FOUND! Try again!")
      } else {
        return  setFair(response.data);

      }
      console.log(response.data);
    });    
  }

  function getFair(fairId) {
    return axios.get(`${baseUrl}/${fairId}`).then((response) => {
      return new Promise((resolve) => resolve(response.data)).catch(
        (error) => new Promise((_, reject) => reject(error.response.statusText))
      );
    });
  }

    function createFair(fair) {        
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myFairToken')}`
        };
        return axios.post(baseUrl, fair, {headers: myHeaders})
        .then(response => {
            getAllFairs()
            return new Promise((resolve) => resolve(response.data))
        })
    }

    function updateFair(fair) {

        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myFairToken')}`
        };
        return axios.put(`${baseUrl}/${fair.fairId}`, fair, {headers: myHeaders})
        .then(response => {
            console.log(response.data);
            getAllFairs()
            return new Promise((resolve) => resolve(response.data))
        }, err => {
          localStorage.removeItem('myFairToken');
        })
 }

    function deleteFair(fairId) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myFairToken')}`
        };
        return axios.delete(`${baseUrl}/${fairId}` , {headers: myHeaders})
        .then(response => {
          console.log(response.data);
            getAllFairs()
            return new Promise((resolve) => resolve(response.data))
        }, err => {
          localStorage.removeItem('myFairToken');
        })
    }

    return (
        <FairContext.Provider value={{
            fair,
            getFair,
            createFair,
            updateFair,
            deleteFair,
            searchFairs
        }}>
            { props.children }
        </FairContext.Provider>
    )
};
