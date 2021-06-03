import React, {Component} from "react";
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
    SafeAreaView,
} from "react-native"
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import { COLORS, SIZES, FONTS, icons, images } from "../../constants"




const ChooseChar=({navigation})=>{
    function renderHeader(){
        return (
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
             {/*}   <Image
                source={icons.back}
                resizeMode="contain"
                style={{
                    position:'absolute',
                    top:60,
                    left:23,
                    width: 20,
                    height: 20,
                    tintColor: COLORS.black
                }}
            />*/}
            <View style={{textAlign:'center'}}>
            <Text style={{ borderBottomWidth:3,
                    borderColor:COLORS.orange, width:100, color: COLORS.black, ...FONTS.h4 }}>캐릭터 선택</Text>
            </View>
                
            
            </View>
            
        )
    }

    return(
        
     <View style={{ backgroundColor:'white'}}>
        
        {renderHeader()}
        <Text style={{textAlign:'center', fontWeight:'bold', paddingVertical:14}}>
            자신만의 캐릭터를 선택해보세요!
        </Text>
        <View style={styles.container}>
        {/*ONION */}
            <View style={styles.box}>
                <ImageBackground source={images.chob} style={{width: 180,
                                height: 130, alignItems:'center'}}>
                        <Image
                            source={images.onionb}
                            resizeMode="contain"
                            style={{
                                width: 120,
                                height: 120
                            }}
                            
                        />
                </ImageBackground>
                <Image source={images.qvecos} resizeMode="contain"/>
                <Text style={{fontSize:14, fontWeight:'bold'}}>
                    앙구구
                </Text>
                <View style={{padding:7,}}>
                <Text style={{fontSize:8, color:'gray'}}>한 없이 착하며, 까도까도 매력 넘치는 만큼 인싸력이 엄청난 이 구역의 분위기메이커! 단, 자아도취가 심하며 이중인격이다.</Text>
                </View>
                <TouchableOpacity
                    style={{
                        height: 18, 
                        width:60,
                        backgroundColor: COLORS.orange,
                        borderRadius: SIZES.radius / 1.5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop:10
                    }}
                    onPress={() => navigation.navigate("CharDetail")}
                >
                    <Text style={{fontSize:14, fontWeight:'bold', color:'white'}}>상세</Text>
                </TouchableOpacity>
            </View>       
            {/*PUMKIN */}
            <View style={styles.box}>
                <ImageBackground source={images.chpb} style={{width: 180,
                                height: 130, alignItems:'center'}}>
                        <Image
                            source={images.pumkinb}
                            resizeMode="contain"
                            style={{
                                width: 120,
                                height: 120
                            }}
                            
                        />
                </ImageBackground>
                <Image source={images.qvecos} resizeMode="contain"/>
                <Text style={{fontSize:14, fontWeight:'bold'}}>
                    호구구
                </Text>
                <View style={{padding:7,}}>
                <Text style={{fontSize:8, color:'gray'}}>10월 31일에는 다른 호박이 된다는 소문이..?! 단호박인 성격으로 냉철해보이지만 속은 부실한 성격. 눈물이 많은 편이다.</Text>
                </View>
                <TouchableOpacity
                    style={{
                        height: 18, 
                        width:60,
                        backgroundColor: COLORS.orange,
                        borderRadius: SIZES.radius / 1.5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop:10
                    }}
                >
                    <Text style={{fontSize:14, fontWeight:'bold', color:'white'}}>상세</Text>
                </TouchableOpacity>
            </View>  
            {/*POTATO*/}          
            <View style={styles.box}>
                <ImageBackground source={images.chpob} style={{width: 180,
                                height: 130, alignItems:'center'}}>
                        <Image
                            source={images.potatob}
                            resizeMode="contain"
                            style={{
                                width: 120,
                                height: 120
                            }}
                            
                        />
                </ImageBackground>
                <Image source={images.qvecos} resizeMode="contain"/>
                <Text style={{fontSize:14, fontWeight:'bold'}}>
                    감구구
                </Text>
                <View style={{padding:7,}}>
                <Text style={{fontSize:8, color:'gray'}}>한 없이 착하며, 까도까도 매력 넘치는 만큼 인싸력이 엄청난 이 구역의 분위기메이커! 단, 자아도취가 심하며 이중인격이다.</Text>
                </View>
                <TouchableOpacity
                    style={{
                        height: 18, 
                        width:60,
                        backgroundColor: COLORS.orange,
                        borderRadius: SIZES.radius / 1.5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop:10
                    }}
                >
                    <Text style={{fontSize:14, fontWeight:'bold', color:'white'}}>상세</Text>
                </TouchableOpacity>
            </View>   
            {/*CARROT */}         
            <View style={styles.box}>
                <ImageBackground source={images.chcb} style={{width: 180,
                                height: 130, alignItems:'center'}}>
                        <Image
                            source={images.carrotb}
                            resizeMode="contain"
                            style={{
                                width: 120,
                                height: 120
                            }}
                            
                        />
                </ImageBackground>
                <Image source={images.qvecos} resizeMode="contain"/>
                <Text style={{fontSize:14, fontWeight:'bold'}}>
                    당구구
                </Text>
                <View style={{padding:7,}}>
                <Text style={{fontSize:8, color:'gray'}}>무엇이든 Yes!인 긍정적인 캐릭터!
시력이 좋다고 소문 나있지만 안경을 쓰고 있는, 중고상품을 좋아하는 중고상품 컬렉터이다.</Text>
                </View>
                <TouchableOpacity
                    style={{
                        height: 18, 
                        width:60,
                        backgroundColor: COLORS.orange,
                        borderRadius: SIZES.radius / 1.5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop:10
                    }}
                >
                    <Text style={{fontSize:14, fontWeight:'bold', color:'white'}}>상세</Text>
                </TouchableOpacity>
            </View>                 
        </View>
     </View>       


        
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'85%',
        padding: 4,
        flexDirection:'row',
        flexWrap:'wrap',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    box:{
        margin:4,
        backgroundColor: 'white',
        borderRadius: 8,
        width:180,
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
export default ChooseChar;
