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
import Icons from 'react-native-vector-icons/AntDesign'

const Participate= ({navigation}) =>{
    const [ confirm, setconfirm] = React.useState(false)
    function renderHeader(){
        return (
            <View>
                <View
                style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent:"center",
                    marginTop: SIZES.padding * 6,
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
            <TouchableOpacity 
            onPress={() => navigation.goBack() }
            style={{width:30,height:30}}
            >
            <Image
                source={icons.back}
                resizeMode="contain"
                style={{
                    position:'absolute',
                    top:50,
                    left:20,
                    width: 20,
                    height: 20,
                    tintColor: COLORS.black
                }}
            />
            </TouchableOpacity>
            {renderHeader()}
            <View style={{alignItems:'center', marginTop:30}}>
            <TouchableOpacity style={{marginLeft:240,marginBottom:10 }}
            >
                <Text style={{fontSize:12,textAlign:'right'}}>
                    참가자 목록
                </Text>
            </TouchableOpacity>
           <View style={styles.panel}>
            <Image source={images.foodimg} style={{marginVertical:20, width:335,height:150}}/>
           
            <View style={{flexDirection:'row', marginBottom:10}}>
                <Text style={{fontSize:14, color:'gray', fontWeight:'bold', textAlign:'left',paddingRight:12}}>식사</Text>
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

            <TouchableOpacity style={{
                borderRadius:20,
                shadowColor: '#000000',
                backgroundColor:'white',
                shadowOffset: {width: 0, height: 0},
                shadowRadius: 5,
                shadowOpacity: 0.4,
                elevation:1,
                height:35,
                width:340,
                alignItems:'center',
                justifyContent:'center'
            }}
                onPress={() => setconfirm(!confirm)}
            >
                <View style={{flexDirection:'row'}}>

                <Icons name={confirm?"downcircle":"downcircleo"} size={18} style={{paddingHorizontal:10}}/>
                <Text style={{fontSize:14, fontWeight:'bold'}}>위의 내용을 잘 확인하셨나요?</Text>

                </View>
                
            </TouchableOpacity>
           
            <View style={{marginVertical:20}}>
            <Text style={{fontSize:14, fontWeight:'bold', color:'gray'}}>위의 퀘스트에, 사람들은 평균 25,300P를 걸었습니다.</Text>
            <Text style={{fontSize:14, fontWeight:'bold'}}> OO님은 몇 포인트를 거실건가요?</Text>
            </View>

            <View style={{marginVertical:10}}>
                <View style={{flexDirection:'row'}}>
                    <TextInput style={{
                    //marginVertical: SIZES.padding,
                    borderBottomColor: COLORS.black,
                    borderBottomWidth: 1,
                    height: 30,
                    color: COLORS.black,
                    ...FONTS.body3,
                    width:168,
                    }}
                    selectionColor={COLORS.black} 
                    keyboardType = 'numeric'
                    />
                    <Text>Point</Text>
                </View>
                <Text style={{fontSize:11, color:'gray'}}>현재 보유포인트: 10,000P</Text>
            </View>
        
            <View style={{
                borderRadius:20,
                shadowColor: '#000000',
                shadowOffset: {width: 0, height: 0},
                shadowRadius: 5,
                shadowOpacity: 0.4,
                elevation:1,
                height:35,
                width:340,
                flexDirection:'row',
                backgroundColor:'white',
                justifyContent:'center',
                alignItems:'center',
                marginVertical:10
            }}
                onPress={() => setconfirm(!confirm)}
            >
                <Text style={{fontSize:14, fontWeight:'bold',paddingRight:30}}>이 퀘스트를 n% 달성한 당신에게는..</Text>
                <Icons name="down" size={18}/>
            </View>

            <Text style={{fontSize:10, textAlign:'left',}}>
                100% 달성시: 참가포인트 전액 환급 + 추가 포인트 지급{'\n'}

                80%이상 달성시: 참가포인트 전액 환급{'\n'} 

                80%미만: 달성률에 따라서 포인트 환급{'\n'}
                (ex. 참가포인트 10,000원, 70%달성시 7,000 포인트 환급)
            </Text>
            
            
            <View
                style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginVertical:20,paddingBottom:40}}
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
                    <Text style={{ fontSize:14  }}>충전하기</Text>
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
                >
                    <Text style={{ fontSize:14 }}>내 포인트로 참가하기</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        //paddingHorizontal:40
        
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 10,
        paddingBottom:0,
         shadowColor: '#000000',
         shadowOffset: {width: 0, height: 0},
         shadowRadius: 5,
         shadowOpacity: 0.4,
         elevation:7,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        alignItems:'center',

    },
})

export default Participate;
