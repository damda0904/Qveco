import React, { Component } from 'react'
import firebase from 'firebase'
require('firebase/firestore')

import AsyncStorage from '@react-native-async-storage/async-storage';



//초기화
export const clearData = async () => {
    await AsyncStorage.delete('currentUser')
    await AsyncStorage.delete('point')
    await AsyncStorage.delete('userFollowing')

}

//유저 정보 저장(로컬)
export const storeUser = () => {
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
                    const point = JSON.stringify(snapshot.data().point)
                    await AsyncStorage.setItem('point', point)
                    console.log('store')
                } catch (error) {
                    console.log('store User error : ' + error)
                }
            }
            else {
                console.log('user info does not exist')
            }
        })
        .catch((err) => {
            console.log("storeUser")
            console.log(err)
        })
}


//유저 정보 전체반환
export const getUser = async () => {
    try {
        const user = await AsyncStorage.getItem('currentUser')
        if (user === null) {
            console.log("User : get asyncStorage 실패")
        }
        else {
            console.log("user : " + user)
        }
    } catch (error) {
        console.log("getUser error " + error)
    }
}

//포인트 반환
export const fetchPoint = async () => {
    try {
        const point = await AsyncStorage.getItem('point')
        if (point === null) {
            console.log("Point : get asyncStorage 실패")
        }
        else {
            console.log("point : " + point)
        }
    } catch (error) {
        console.log("getPoint error : " + error)
    }
}


//현재 유저가 팔로하고 있는 아이디 저장(로컬)
export const fetchUserFollowing = () => {
    firebase.firestore()
        .collection("following")
        .doc(firebase.auth().currentUser.uid)
        .collection("userFollowing")
        .get()
        .then(async (snapshot) => {
            let following = snapshot.docs.map(doc => {
                const id = doc.id;
                return id
            })

            //console.log(snapshot);     //확인용

            try {
                const data = JSON.stringify(following);
                await AsyncStorage.setItem('userFollowing', data)
                console.log("Follower : " + data);
            } catch (error) {
                console.log('store userFollowing error : ' + error)
            }
        })
}


//내 퀘스트 불러오기
export const fetchUserQuests = async () => {
    const quests = await firebase.firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("userQuests")
        .get()
        .then((snapshot) => {
            const userQuests = snapshot.docs.map((doc) => {
                var quest = doc.id
                var complete = doc.data()
                return { quest, ...complete }
            })

            return userQuests
        })

    const questsInfo = await quests.map(async (item) => {
        if (item.complete === false) {
            var questInfo = await firebase.firestore()
                .collection("quests")
                .doc(item['qid'])
                .get()
                .then((snapshot) => {
                    // console.log("snapshot")
                    // console.log(snapshot.data())
                    var questInfo = snapshot.data()
                })
                .catch((err) => {
                    console.log(err)
                })
            return questInfo
        }
    })

    console.log("fetch function 내부")
    console.log(questsInfo)


}


//팔로잉
export const follow = (uid) => {
    firebase.firestore()
        .collection("following")
        .doc(firebase.auth().currentUser.uid)
        .collection("userFollowing")
        .doc(uid)
        .set({})
}


//언팔로잉
export const unfollow = (uid) => {
    firebase.firestore()
        .collection("following")
        .doc(firebase.auth().currentUser.uid)
        .collection("userFollowing")
        .doc(uid)
        .delete()
        .then(() => {
            console.log("Unfollowing success!")
        })
        .catch((err) => {
            console.log(err)
        })
}


//포인트 추가
export const addPoint = async (amount) => {
    let point;

    //포인트 불러오기
    try {
        point = await AsyncStorage.getItem('point')
    } catch (err) {
        console.log("fetch Point error : " + err)
    }

    //포인트 증가
    point = Number(point) + amount

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
}


//레벨업
export const levelUp = () => {
    let level;

    firebase.firestore()
        .collection(user)
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
            level = snapshot.data().level
        })

    firebase.firestore()
        .collection(user)
        .doc(firebase.auth().currentUser.uid)
        .update({
            level: level + 1
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
}













export const test = () => {
    firebase.firestore()
        .collection("following")
        .doc("VkhENV7BL4fjkBIEjczNiGYhh522")
        .collection("test")
        .add({})

    firebase.firestore()
        .collection("following")
        .doc("VkhENV7BL4fjkBIEjczNiGYhh522")
        .get()
        .then((snapshot) => {
            const data = JSON.stringify(snapshot.data())
            console.log("test " + data);
        })
}