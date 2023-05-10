import { RequestHandler } from "express";
import { Comment } from "../models/comment";
import { User } from "../models/user";
import { Fair } from "../models/fair";
import { verifyUser } from "../services/auth";

export const getAllComments: RequestHandler = async (req, res, next) => {

    let user: User | null = await verifyUser(req);

    if (user) {
        const result = await User.findByPk(user.userId, {
            include: [Fair, User]
        });

        res.status(200).json(result);
    }
    else {
        res.status(401).send();
    }
};

export const getUserComments: RequestHandler = async (req, res, next) => {
    // getting logged in user with token
    let user: User | null = await verifyUser(req);

    if (user) {
        // getting comments made by this user
        const result = await User.findByPk(user.userId, {
            include: Fair
        });

        res.status(200).json(result);
    }
    else {
        res.status(401).send();
    }
};

export const createComment: RequestHandler = async (req, res, next) => {
    
    let user: User | null = await verifyUser(req);
    // let fair: Fair = req.body.fairId

    if (!user) {
        return res.status(401).send();
    }

    let newComment: Comment = req.body;
    newComment.UserUserId = user.userId;
    // newComment.FairFairId = fair.fairId;

    if (newComment.commentTitle) {
        let created = await Comment.create(newComment);
        res.status(201).json(created);
    }
    else {
        res.status(400).send();
    }
};

export const getComment: RequestHandler = async (req, res, next) => {

    let commentId = req.params.commentId;
    let commentFound = await Comment.findByPk(commentId);

    if (commentFound) {
        res.status(200).json(commentFound);
    }
    else {
        res.status(404).json();
    }
};

export const updateComment: RequestHandler = async (req, res, next) => {

    let commentId = req.params.commentId;
    let newComment: Comment = req.body;

    let commentFound = await Comment.findByPk(commentId);

    if (commentFound && commentFound.commentId == newComment.commentId
        && newComment.commentTitle && newComment.UserUserId) {
        await Comment.update(newComment, {
            where: { commentId: commentId }
        });
        res.status(200).json();
    }
    else {
        res.status(400).json();
    }
};

export const deleteComment: RequestHandler = async (req, res, next) => {
    
    let commentId = req.params.commentId;
    let commentFound = await Comment.findByPk(commentId);

    if (commentFound) {
        await Comment.destroy({
            where: { commentId: commentId }
        });
        res.status(200).json();
    }
    else {
        res.status(404).json();
    }
};