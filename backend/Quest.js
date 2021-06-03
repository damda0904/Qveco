import React, { Component } from 'react'
import firebase from 'firebase'
require('firebase/firestore')

import AsyncStorage from '@react-native-async-storage/async-storage';


//퀘스트 생성
export const makeQuest = (questInfo) => {
    firebase.firestore()
        .collection("quests")
        .add({
            category: questInfo[0],
            content: questInfo[1],
            level: questInfo[2],
            offerPoint: questInfo[3],
            deposit: questInfo[4],
            title: questInfo[5],
        })
}


//특정 분야 퀘스트 가져오기
export const fetchQuests = (category) => {
    firebase.firestore()
        .collection("quests")
        .where("category", "==", category)
        .get()
        .then((snapshot) => {
            let quests = snapshot.docs.map(doc => {
                const data = doc.data();
                const id = doc.id;
                return { id, ...data }
            })
            return quests
        })
}


//퀘스트 참여
export const participate = async (questID) => {
    const deposit;
    let point;

    //퀘스트 보증포인트 불러오기
    firebase.firestore()
        .collection("quest")
        .doc(questID)
        .get()
        .then((snapshot) => {
            const data = snapshot.data();
            deposit = data.deposit
            console.log("deposit" + deposit)
        })

    //포인트 불러오기
    try {
        point = await AsyncStorage.getItem('point')
    } catch (err) {
        console.log("fetch Point error : " + err)
    }

    //포인트 감소
    point = point - deposit

    if (point < 0) {
        console.log("포인트가 부족합니다.") //alert으로 표시해야 할듯
        return
    }

    //로컬에 저장
    try {
        await AsyncStorage.setItem('point', point)
    } catch {
        console.log("save Point error : " + err)
    }

    //DB에 저장
    firebase.firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .update({
            point: point
        })

    //유저 정보 재저장
    firebase.firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then(async (snapshot) => {
            if (snapshot.exists) {
                //console.log(snapshot.data())
                try {
                    const data = JSON.stringify(snapshot.data())
                    await AsyncStorage.setItem('currentUser', data)
                    await AsyncStorage.setItem('point', snapshot.data().point)
                } catch (error) {
                    console.log('store User error : ' + error)
                }
            }
            else {
                console.log('user info does not exist')
            }
        })


    //유저퀘스트에 저장
    firebase.firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("userQuest")
        .doc(questID)
        .set({
            complete: false
        })

    //퀘스트 참가자에 추가
    firebase.firestore()
        .collection("quests")
        .doc(questID)
        .collection("participates")
        .doc(firebase.auth().currentUser.uid)
        .set({})


}


//퀘스트 참가자 불러오기
export const fetchParticipates = (questID) => {
    firebase.firestore()
        .collection("quests")
        .doc(questID)
        .collection("participates")
        .get()
        .then((snapshot) => {
            const participates = snapshot.docs.map((doc) => {
                var pid = doc.id;
                return { pid }
            })
        })
}


//퀘스트 완료
export const completeQuest = (questID) => {

}