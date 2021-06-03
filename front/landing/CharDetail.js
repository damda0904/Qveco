import React, {Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    StyleSheet,
    ImageBackground
} from "react-native"
import { COLORS, SIZES, FONTS, icons, images } from "../../constants"
import firebase from 'firebase'

const CharDetail= ({navigation}) =>{
    function renderHeader(){
        return (
            <View>
                <View
                style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent:"center",
                    marginTop: SIZES.padding * 9,
                    paddingHorizontal: SIZES.padding * 2,
                   
                   
                }}
                onPress={() => console.log("Sign In")}
            >
                
            
            <Text style={{ borderBottomWidth:3,
                    borderColor:COLORS.orange, width:100, color: COLORS.black, ...FONTS.h4 }}>캐릭터 선택</Text>
            </View>
            </View>
            
            
        )

    }
    return(
        <View style={styles.container}>
            <TouchableOpacity //onPress={() => navigation.goBack() }
            >
            <Image
                source={icons.back}
                resizeMode="contain"
                style={{
                    position:'absolute',
                    top:50,
                    left:23,
                    width: 20,
                    height: 20,
                    tintColor: COLORS.black
                }}
            />
            </TouchableOpacity>
            {renderHeader()}
            <View style={{alignItems:'center'}}>
            <View style={{marginVertical:30, alignItems:'center'}}>
                <Text style={{fontSize:20, fontWeight:'normal'}}>
                “내가 들어가는 곳은 다 달콤해질 걸?”
                </Text>
            </View>
            <ImageBackground source={images.choosebg} style={{width:260,height:260,alignItems:'center',justifyContent:'center'}}>
                <Image source={images.onionb} style={{width:250,height:250}}/>
            </ImageBackground>
            <Text style={{fontSize:20}}>LV 1</Text>
            <View style={{flexDirection:'row'}}>
                <View style={{flexDirection:'column', alignItems:'center'}}>
                    <Image source={images.lv2} resizeMode='contain'/>
                    <Text style={{fontSize:20}}>LV 2</Text>
                </View>
                <View style={{flexDirection:'column', alignItems:'center'}}>
                    <Image source={images.lv3} resizeMode='contain'/>
                    <Text style={{fontSize:20}}>LV 3</Text>
                </View>
            </View>
            <Text style={{fontSize:16}}>앙구구 캐릭터가 선택되었습니다.</Text>
            </View>
            <TouchableOpacity
                style={{
                    height: 60,
                    backgroundColor: COLORS.orange,
                    borderRadius: SIZES.radius / 1.5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal:80,
                    marginVertical:20
                }}
                onPress={() => navigation.navigate("Tutorial")}
            >
                <Text style={{ color: COLORS.white, ...FONTS.h3 }}>선택</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        
    },
    box:{
        margin:4,
        backgroundColor: 'white',
        borderRadius: 8,
        width:190,
        height:270,
        //padding:10,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        alignItems: 'center',
        //justifyContent: 'center',
    }
})

export default CharDetail;
