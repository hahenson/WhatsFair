// THIS COMPONENT WAS KYLE's ATTEMPT WITH GETTING COMMENTS TO WORK
// IGORE IF YOU WISH

import React from 'react';
import CommentContext from '../contexts/CommentContext';
import { Link } from 'react-router-dom';

const CommentList = () => {
    return (
        <CommentContext.Consumer>
        {
            ({ comment }) => {
                return <div>
                    <h1>Comment List</h1>
                    <Link to="/comments/new">Add New Comment</Link>
                    {console.log(comment)}
                    <div>
                        {comment.map((c) => {
                            return (
                                <div key={c.commentId}>
                                    <h2>{c.commentTitle} | {c.FairFairId}</h2>
                                    <p>{c.UserUserId}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
        }
        </CommentContext.Consumer>
    );
}

export default CommentList;