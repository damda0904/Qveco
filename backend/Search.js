import React, { Component } from 'react'
import firebase from 'firebase'
require('firebase/firestore')

import AsyncStorage from '@react-native-async-storage/async-storage';


//제목 검색(앞부분만 검색 가능...)
export const search = (text) => {
    firebase.firestore()
    .collection("quests")
    .orderBy('title')
    .startAt(text)
    .get()
    .then((snapshot) => {
        const response = snapshot.docs.map((doc) => {
            var quest = doc.data()
            return {...quest}
        })
        console.log(response)
    })
    .catch((err) => {
        console.log(err)
    })
}