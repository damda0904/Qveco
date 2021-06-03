import React, {Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
} from "react-native"
import { COLORS, SIZES, FONTS, icons, images } from "../../constants"

const QuestDetail= ({navigation}) =>{
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
                    borderColor:COLORS.orange, width:100, color: COLORS.black, ...FONTS.h4,textAlign:'center' }}>상세 보기</Text>
            </View>
            </View>
            
            
        )

    }
    return(
        <View style={styles.container}>
            <TouchableOpacity  >
            <Image
                source={icons.back}
                resizeMode="contain"
                style={{
                    position:'absolute',
                    top:50,
                    left:0,
                    width: 20,
                    height: 20,
                    tintColor: COLORS.black
                }}
            />
            </TouchableOpacity>
            {renderHeader()}
            <View style={{alignItems:'center'}}>
            <View style={{ marginVertical:30, alignItems:'center'}}>
                <Text style={{fontSize:14, fontWeight:'bold'}}>
                    <Text style={{color:'orange'}}>72</Text>
                    명이 총 
                    <Text style={{color:'orange'}}>54,300포인트</Text>
                    를 걸었어요!
                </Text>
            </View>
           <View>
           <Image source={images.foodimg} style={{marginTop:-20,marginBottom:20, height:140}} resizeMode='cover' />

           </View>
           
            <View style={{flexDirection:'row', marginBottom:10}}>
                <Text style={{fontSize:14, color:'gray', fontWeight:'bold', textAlign:'left', paddingRight:12}}>식사</Text>
                <View style={{flexDirection:'column'}}>
                    <Text style={{fontSize:14, fontWeight:'bold'}}>하루에 한 끼 채식하기</Text>
                    <Text style={{fontSize:14}}>
                        <Text style={{color:'orange'}}>30</Text>
                        일 동안 일주일에 
                        <Text style={{color:'orange'}}> 7</Text>
                        번, 하루 
                        <Text style={{color:'orange'}}>2</Text>
                        번 인증샷
                    </Text>
                </View>
            </View>
           
            <Text style={{fontSize:14, fontWeight:'bold'}}>퀘스트 설명</Text>
            <Text style={{fontSize:12}}>하루에 한 끼 이상, 채식 식단을 실천하고 여러분의 식사를 사진으로 인증해주세요! 이번 퀘스트를 통해 채식과 천천히 친해지기로 해요~ 건강과 환경 모두 챙겨봐요!</Text>
            
            <Text style={{fontSize:14, fontWeight:'bold', marginTop:10}}>주의 사항</Text>
            <Text style={{fontSize:12}}>모든 인증은 23:59까지만 인정됩니다.  다 드신 사진까지 하루에 총 2번 사진을 찍어주셔야해요.{"\n"}
이 퀘스트는 <Text style={{color:'orange'}}>‘채식요리 도전하기’</Text>와 중복 참여할 수 없습니다.</Text>
            
            <Text style={{fontSize:14, fontWeight:'bold', marginVertical:10}}>인증 방법</Text>
            <View style={{flexDirection:'row'}}>
                <Image source={images.foodimg1} resizeMode='contain' style={{marginHorizontal:10}}/>
                <Image source={images.foodimg2} resizeMode='contain'/>
            </View>
            </View>
            <View
                style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginVertical:20}}
            >
                <TouchableOpacity
                    style={{
                    width: 140,
                        height:45,
                        borderWidth:1,
                        borderColor:'orange',
                        borderRadius: SIZES.radius / 1.5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginHorizontal:20
                    }}
                >
                    <Text style={{ ...FONTS.body3 }}>퀘스트 좋아요</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                    width: 140,
                        height:45,
                        borderWidth:1,
                        borderColor:'orange',
                        borderRadius: SIZES.radius / 1.5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginHorizontal:20
                        
                    }}
                    onPress={() => navigation.navigate("Participate")}
                >
                    <Text style={{ ...FONTS.body3 }}>참가하기</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        paddingHorizontal:40
        
    },
})

export default QuestDetail;
