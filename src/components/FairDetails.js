import React, { useEffect, useState, useContext } from "react";
import FairContext from "../contexts/FairContext";
import { useParams, useNavigate, Link } from 'react-router-dom';
import AddComment from "../components/AddComment";
import UserContext from "../contexts/UserContext";


const FairDetails = () => {

    let params = useParams();
    let navigate = useNavigate();

    let { getFair, deleteFair } = useContext(FairContext);

    let [fair, setFair] = useState({
        fairId: "",
        fairTitle: "",
        fairCity: "",
        fairState: "",
        fairZip: "",
        fairDescription: "",
        fairStartDate: "",
        fairEndDate: "",
        fairImage: "",
        fairWebsite: "",
        Comments: [],
        UserUserId: ""
    });

    let [user, setUser] = useState({
        userId: "",
        Fairs: []
    })

    let { getCurrentUser } = useContext(UserContext);

    useEffect(() => {
        async function fetch() {
            await getCurrentUser()
                .then((user) => setUser(user))
        }
        fetch()
    }, [params.userId]);

    const owner = fair.UserUserId;

    function isOwner() {
        if (owner === user.userId) {
            return true;
        } else {
            return false;
        }
    }

    function handleDelete() {
        deleteFair(fair.fairId).then(() => {
            navigate('/fairlist')
            console.log("Hey Bro!")
        }).catch(error => {
            console.log(error);
            alert('Error: ' + error)
        })
    }


    useEffect(() => {
        async function fetch() {
            await getFair(params.fairId).then((fair) => setFair(fair))
        }
        fetch()
    }, [params.fairId]);

    return (
        <>
            <div className="container">
                <div className="row text-center">
                    <div className="col-12" id="detailTitle">
                        <h1 className="display-4">{fair.fairTitle}</h1>
                        {isOwner() && <Link to={`/updatefair/${fair.fairId}`} class="fs-2" id="editIcon"><i class="bi bi-pencil-square"></i></Link>}
                        {isOwner() && <a class="fs-2" id="delFairBtn" onClick={handleDelete}><i class="bi bi-trash"></i></a>}
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row padding">
                    <div className="col-lg-6 text-center" id="detailLocation">
                        <h4>{fair.fairCity}, {fair.fairState}</h4>
                    </div>
                    <div className="col-lg-6 text-center" id="detailDates">
                        <h4>{fair.fairStartDate} - {fair.fairEndDate}</h4>
                    </div>
                </div>
                <div className="container-fluid py-3" id="div3">
                    <div className="row padding">
                        <div className="col-lg-6" id="divDetailImg">
                            <img src={fair.fairImage} id="fairImage" className="img-fluid justify-content-center" alt="fair" />

                        </div>
                        <div className="col-lg-6" id="divDetailDesc">
                            <div className="row">
                                <p id="fairDesc" className="justify-content-center">{fair.fairDescription}</p>
                            </div>
                            <div className="row">
                                <div className="container mb-2" id="divWebLink">
                                    <Link to={fair.fairWebsite} className="btn btn-secondary btn-sm text-center" rel="noreferrer" target="_blank">Event site</Link>
                                </div>
                            </div>
                            <hr mb-3 />

                            <div className="row">
                                <div className="col-lg-6 text-center">
                                    {/* <h3 className="fairComment">Comments</h3> */}
                                </div>
                                <div className="container-fluid py-3" id="commentContainer">
                                    <div className="row py-1">
                                        <div className="col-12 mb-2">
                                            <h5>Comments about the {fair.fairTitle}</h5>
                                            {/* <CommentForm /> */}

                                            {fair.Comments.map((comment, index) => {
                                                return (
                                                    <div>
                                                        <div id="commentBubble">{index + 1}. {comment.commentTitle}</div>
                                                        <div></div>
                                                    </div>
                                                )
                                            })}

                                        </div>
                                        <div><AddComment /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default FairDetails;
