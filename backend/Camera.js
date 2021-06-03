import React, { Component } from 'react'
import firebase from 'firebase'
require('firebase/firestore')
require('firebase/firebase-storage')

import AsyncStorage from '@react-native-async-storage/async-storage';



//카메라 사진 저장
export const uploadImg = async (uri) => {
    const childPath = `post/${firebase.auth().currentUser.uid}/${Math.random().toString(36)}`;

    const response = await fetch(uri);
    const blob = await response.blob();

    const task = firebase
        .storage()
        .ref()
        .child(childPath)
        .put(blob);

    const taskProgress = snapshot => {
        console.log(`transferred: ${snapshot.bytesTransferred}`)
    }

    const taskCompleted = () => {
        task.snapshot.ref.getDownloadURL().then((snapshot) => {
            savePostData(snapshot);
            console.log(snapshot)
        })
    }

    const taskError = snapshot => {
        console.log(snapshot)
    }

    task.on("state_changed", taskProgress, taskError, taskCompleted);
}


export const savePostData = () => {
    firebase.firestore()
    .collection('posts')
    .doc(firebase.auth().currentUser.uid)
    .collection("userPosts")
    .add({
        downloadURL,
        caption,
        likesCount: 0,
        creation: firebase.firestore.FieldValue.serverTimestamp()
    }).then((function () {
        props.navigation.popToTop()
    }))
}