import React, { Component } from 'react'
import firebase from 'firebase'
require('firebase/firestore')

import AsyncStorage from '@react-native-async-storage/async-storage';


//현재 유저의 포스트 가져오기
//로컬에 저장할지 말지 고민중
export const fetchUserPosts = () => {
    firebase.firestore()
        .collection("posts")
        .doc(firebase.auth().currentUser.uid)
        .collection("userPosts")
        .orderBy("creation", "asc")
        .get()
        .then((snapshot) => {
            let posts = snapshot.docs.map(doc => {
                const data = doc.data();
                const id = doc.id;
                return { id, ...data }
            })
            //console.log(posts)
        })
        .catch((err) => {
            console.log(err)
        })
}


//유저가 팔로하고 있는 사람의 포스트 전체 가져오기
export const fetchUsersFollowingPosts = (uid) => {
    firebase.firestore()
        .collection("posts")
        .doc(uid)
        .collection("userPosts")
        .orderBy("creation", "asc")
        .get()
        .then((snapshot) => {
            let posts = snapshot.docs.map(doc => {
                const data = doc.data();
                const id = doc.id;
                return { id, ...data }
            })
        })
}

//like 추가
export const addLike = (postID) => {
    let like;

    //like 가져오기
    firebase.firestore()
        .collection("posts")
        .doc(uid)
        .collection("userPosts")
        .doc(postID)
        .get()
        .then((snapshot) => {
            like = snapshot.data().like
        })

    firebase.firestore()
        .collection("posts")
        .doc(uid)
        .collection("userPosts")
        .doc(postId)
        .update({
            like : Number(like) + 1
        })
}

//like 취소
export const cancelLike = (postID) => {
    let like;

    //like 가져오기
    firebase.firestore()
        .collection("posts")
        .doc(uid)
        .collection("userPosts")
        .doc(postID)
        .get()
        .then((snapshot) => {
            like = snapshot.data().like
        })

    firebase.firestore()
        .collection("posts")
        .doc(uid)
        .collection("userPosts")
        .doc(postId)
        .update({
            like : Number(like) - 1
        })
}


//포스트의 코멘트 가져오기(로컬x)
export const fetchComments = (uid, postId) => {
    firebase.firestore()
        .collection("posts")
        .doc(uid)
        .collection("userPosts")
        .doc(postId)
        .collection("comments")
        .get()
        .then((snapshot) => {
            console.log(snapshot)
        })
}


//코맨트 달기
export const sendComment = (uid, postId, content) => {
    firebase.firestore()
        .collection('posts')
        .doc(uid)
        .collection('userPosts')
        .doc(postId)
        .collection('comments')
        .add({
            content,
            creation: firebase.firestore.FieldValue.serverTimestamp(),
            creator: firebase.auth().currentUser.uid
        })
}

//코멘트 삭제도 있어야하나

