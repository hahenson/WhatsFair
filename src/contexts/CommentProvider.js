import axios from "axios";
import { useEffect, useState } from "react";
import CommentContext from '../contexts/CommentContext';

export const CommentProvider = (props) => {

  const [comment, setComment] = useState([]);
  const baseUrl = "http://localhost:3000/api/comments/";

  // useEffect(() => {
  //   async function fetchData() {
  //     await getAllComments();
  //   }
  //   fetchData();
  // }, []);

  function getAllComments() {
    return axios.get(baseUrl).then((response) => setComment(response.data));
  }

  function getComment(id) {
    return axios.get(`${baseUrl}${id}`).then((response) => {
      return new Promise((resolve) => resolve(response.data)).catch(
        (error) => new Promise((_, reject) => reject(error.response.statusText))
      );
    });
  }

  function createComment(comment) {
    let myHeaders = {
      Authorization: `Bearer ${localStorage.getItem("myFairToken")}`,
    };
    return axios.post(baseUrl, comment, { headers: myHeaders })
      .then((response) => {
        getAllComments();
        return new Promise((resolve) => resolve(response.data));
      });
  }

  // NOT confident in this code for updateComment. Couldn't find example in lessons.
  function updateComment(comment) {
    let myHeaders = {
      Authorization: `Bearer ${localStorage.getItem("myFairToken")}`,
    };
    return axios
      .put(baseUrl, comment, { headers: myHeaders })
      .then((response) => {
        getAllComments();
        return new Promise((resolve) => resolve(response.data));
      });
  }

  // NOT confident in this code for deleteComment. Couldn't find example in lessons.
  function deleteComment(id) {
    let myHeaders = {
      Authorization: `Bearer ${localStorage.getItem("myFairToken")}`,
    };
    return axios
      .delete(baseUrl, comment, { headers: myHeaders })
      .then((response) => {
        getAllComments();
        return new Promise((resolve) => resolve(response.data));
      });
  }

  return (
    <CommentContext.Provider
      value={{
        comment,
        getComment,
        createComment,
        updateComment,
        deleteComment,
      }}
    >
      {props.children}
    </CommentContext.Provider>
  );
};
