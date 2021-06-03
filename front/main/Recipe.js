import React, { useState, useEffect } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
} from 'react-native';

import { icons, images, COLORS, SIZES, FONTS } from '../../constants';
import ActionButton from 'react-native-action-button';

import firebase from 'firebase'
require('firebase/firestore')


const RequirementDetail = ({ label, days }) => {
    return (
        <View>
            <View style={{
                    height: 110,
                    marginTop:SIZES.padding*3,
                    backgroundColor: COLORS.white,
                    borderColor: COLORS.white,
                    borderRadius: SIZES.radius / 1.5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    shadowColor: '#000000',
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,
                    shadowOffset: {
                    width: 0,
                    height: 3,
                    },
                    elevation: 3,
                    
                } }
            >
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Text style={{marginTop: 10, marginLeft: SIZES.padding*23, color: COLORS.gray, fontSize:8, }}>{days}일 동안 수행</Text>
                </View>
                <View style={{ flex: 1, marginTop:-20, }}>
                    <Text style={{ paddingHorizontal:5, color: COLORS.black, ...FONTS.body3 }}>{label}</Text>
                </View>
                
                <TouchableOpacity
                    style={{
                            width:120,
                            height: 20,
                            backgroundColor: COLORS.orange,
                            borderRadius: SIZES.radius / 1.5,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom : SIZES.padding*1,
                        }}
                        onPress={() => console.log('hi')}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.body5 }}>상세보기</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Recipe = ({ navigation }) => {

    const [quests, setQuests] = useState([{title : ""}, {title : ""}, {title : ""}, {title : ""}, {title : ""}])



    useEffect(() => {
        
        if(quests[0]['title'] === ""){
            firebase.firestore()
                .collection("quests")
                .where("category", "==", "recipe")
                .get()
                .then((snapshot) => {
                    console.log(snapshot.docs[0].data())

                    let quests = snapshot.docs.map(doc => {
                        const data = doc.data();
                        const id = doc.id;
                        return { id, ...data }
                    })
                    setQuests(quests)

                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [quests])

    // Render

    function renderHeader() {
        return (
            <View
                style={{
                    position: 'absolute',
                    top: 50,
                    left: SIZES.padding,
                    right: SIZES.padding
                }}
            >
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.5)' }}
                            onPress={() => { navigation.navigate("QuestMain") }}
                        >
                            <Image
                                source={icons.back}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{position: 'absolute',
                    top: 50,
                    left: SIZES.padding*4,
                    right: SIZES.padding}}>
                    <View style={{ flex: 1 , alignItems: "flex-start", justifyContent:"center",}}>
                        <Text style={{ color:'black', ...FONTS.body2 }}>레시피 퀘스트</Text>
                    </View>
                </View>
                <View style={{position: 'absolute',
                    
                    left: 170,
                    right: SIZES.padding}}>
                    <ImageBackground
                        source={images.pframe}
                        style={{width: 210,
                            height: 220}}
                    >
                    <Image
                        source={images.pumkinb}
                        resizeMode="contain"
                        style={{
                            width: 210,
                            height: 220
                        }}
                    />
                    </ImageBackground>
                    
                </View>
            </View>
        )
    }


    function renderQuests() {
        return (
            <ScrollView style={{ height: 570 }}>
                <View style={{ flex: 2.5, paddingHorizontal: SIZES.padding * 5, justifyContent: 'space-around' }}>
                    <RequirementDetail
                        label={quests[0]['title']}
                        days="5"
                    />
                    <RequirementDetail
                        label={quests[1]['title']}
                        days="5"
                    />
                    <RequirementDetail
                        label={quests[2]['title']}
                        days="5" />
                    <RequirementDetail
                        label={quests[3]['title']}
                        days="5" />
                    <RequirementDetail
                        label={quests[4]['title']}
                        days="5" />
                </View>
            </ScrollView>
        )
    }

    
    return (
        <View style={styles.container}>
            {/* Banner Photo */}
            <View style={{ height: "40%", backgroundColor: 'white'}}>
            </View>

            {/* Requirements */}
            <View style={{
                    flex: 1,
                    marginTop: -50,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    paddingVertical: SIZES.padding,
                    backgroundColor:COLORS.white,
                    shadowColor: '#000000',
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,
                    shadowOffset: {
                    width: 0,
                    height: 3,
                    },
                    elevation: 3,
                }}
            >

                <Text style={{ paddingHorizontal: SIZES.padding*4, color: COLORS.black, ...FONTS.h5,paddingTop:10 }}>퀘스트 선택</Text>

                <View style={{marginTop:20}}>{renderQuests()}</View>
                

            </View>

            {renderHeader()}
            <ActionButton
                buttonColor="rgba(231,76,60,1)"
                //onPress={() => { navigation.navigate("MakeQuestDetail")}}
                />
        </View>
       
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    boxShadow: {
        shadowColor: '#000000',
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        shadowOffset: {
        width: 0,
        height: 3,
        },
        elevation: 3,
    }
})

export default Recipe;