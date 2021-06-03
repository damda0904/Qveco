import React, { Component } from 'react'
import firebase from 'firebase'
require('firebase/firestore')

import AsyncStorage from '@react-native-async-storage/async-storage';


//특정 카테고리 제품 리스트 가져오기
export const fetchProducts = (category) => {
    firebase.firestore()
        .collection(category)
        .where("category", "==", category)
        .get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                setProducts(doc.data());
            });
        })
        .catch((error) => {
            console.log(error)
        })
}


//기부하기(포인트 감소, 기록)
export const donate = async (institution, amount) => {

    //파이어베이스에서 유저정보 가져오기
    var userRef = firebase.firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("userPoint")
        .doc();
    var point;

    //로컬에서 유저정보 가져오기
    try {
        point = await AsyncStorage.getItem('point')
        if (userInfo == null) {
            console.log("asyncStorage 실패")
        }
        else {
            console.log("point : " + point)
        }
    } catch (error) {
        console.log("getUser error " + userInfo)
    }

    //포인트 값 수정
    point = String(Number(point) - amount);

    if(point < 0 ) {
        console.log("포인트가 부족합니다")
        return
    }

    //확인
    console.log("changed point : " + point)

    //파이어베이스 수정
    userRef.update({
        point : point
    })

    //로컬에 수정하여 저장
    try {
        await AsyncStorage.setItem('point', point)
    } catch (error) {
        console.log('store point error : ' + error)
    }

    //히스토리에 기록
    firebase.firestore()
        .collection("donationHistory")
        .add({
            donater: userInfo['nickname'],
            donatorUID : firebase.auth().currentUser.uid,
            institution,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            amount
        })

}


//기부 히스토리 가져오기
export const fetchHistories = () => {
    firebase.firestore()
    .collection("donationHistory")
    .get()
    .then((snapshot) => {
        const histories = snapshot.docs.map(doc => {
            const data = doc.data();
            return {...data}
        })

        console.log(histories);
    })
}

//결제 + 환급
export const payment = async (amount, productID) => {

    //파이어베이스에서 유저정보 가져오기
    var userRef = firebase.firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid);
    var userInfo;

    //파이어베이스에서 장바구니 가져오기
    var basket = fetchBasket();
    basket = JSON.parse(basket);
    var changed_basket;

    //로컬에서 유저정보, 장바구니 가져오기
    try {
        userInfo = await AsyncStorage.getItem('currentUser')
        if (userInfo == null) {
            console.log("asyncStorage 실패")
        }
        else {
            console.log("user : " + userInfo)
            userInfo = JSON.parse(userInfo)
        }
    } catch (error) {
        console.log("getUser error " + userInfo)
    }

    //포인트 값 수정
    userInfo['point'] = String(Number(userInfo['point']) - amount);

    if(point < 0 ) {
        console.log("포인트가 부족합니다")
        return
    }

    //장바구니에서 결제한 제품 삭제
    basket.forEach((item) => {
        if(item !== productID){
            changed_basket.push(item)
        }
    })
    
    //확인
    console.log("changed point : " + userInfo['point'])
    console.log("changed_basket : " + changed_basket)


    //파이어베이스 수정
    userRef.update({
        point : userInfo['point']
    })

    //로컬에 수정하여 저장
    try {
        await AsyncStorage.setItem('currentUser', userInfo)
        await AsyncStorage.setItem('basket', changed_basket)
    } catch (error) {
        console.log('store User error : ' + error)
    }
}


//장바구니 저장
export const addBasket = async (productID) => {
    try {
        const pid = JSON.stringify(productID);
        await AsyncStorage.setItem('basket', pid)
    } catch (err) {
        console.log(err)
    }
}

//장바구니 아이디 불러오기
export const fetchBasket = async () => {
    try {
        let basket = await AsyncStorage.getItem('basket')
        basket = JSON.parse(basket)
        console.log(basket)
    } catch (err) {
        console.log(err)
    }
}