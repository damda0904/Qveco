import React from 'react'
import { View, Text, Button, ImageBackground, Image, TouchableOpacity } from 'react-native'
let imagePath = require('./koonya.png');
let buycar = require('./Buy.png');
import { Dimensions } from 'react-native';
const Width = Dimensions.get('window').width;    //스크린 너비 초기화
const Height = Dimensions.get('window').height;

function MarketMain({ navigation }) {
    return (
        <View style={{ flexDirection: "column" }}>

            <View style={{ marginTop: 50, width: Width * 0.9, height: Height * 0.1, alignSelf: 'center', }}>
                <View style={{ flexDirection: 'row', width: "100%", alignSelf: 'center', justifyContent: "space-evenly" }}>
                    <Text style={{ flex: 1, textAlign: "center", justifyContent: "center", marginLeft: 20 }} >
                        포인트 상점
                    </Text>
                    <View >
                        <Image
                            style={{ height: 20, width: 20, }}
                            source={buycar}
                        />
                    </View>
                </View>


                <View
                    style={{ height: 4, width: 100, marginTop: 5, backgroundColor: "orange", alignSelf: "center" }}>
                </View>
                {/* 첫번째 문단  */}
                <View style={{ width: Width * 0.9, height: Height * 0.15, alignSelf: 'center', marginTop: 10, }}>
                    <ImageBackground
                        style={{ width: "100%", height: "100%" }}  //View를 꽉채우도록
                        source={require("./chasic.png")}  //이미지경로
                        resizeMode='stretch' // 'cover', 'contain', 'stretch', 'repeat', 'center' 중 선택 
                    >
                    </ImageBackground>
                </View>

                <View style={{ width: Width * 0.9, height: Height * 0.05, marginTop: 20, flexDirection: "row", marginBottom: 20 }}>
                    <View style={{ flexDirection: "row", height: '100%', width: '49%',color:"grey" }}>
                        <Image
                            style={{ height: '100%', width: '20%' }}
                            source={require("./heart.png")} />
                       
                            <TouchableOpacity
                              >
                                
                                <Text style={{ textAlign: "center", marginRight: 20,  width: "100%",height:"100%", backgroundColor: "none",color:"grey",fontSize:Height * 0.02  }}>
                                    나의 좋아요 보관함</Text>
                            </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", height: '100%', width: '45%' }}>
                        <Image
                            style={{ height: '100%', width: '20%' }}
                            source={require("./star.png")} />
                            <TouchableOpacity
                              >
                                
                                <Text style={{ textAlign: "center", marginRight: 20,  width: "100%",height:"100%", backgroundColor: "none",color:"grey",fontSize:Height * 0.02  }}>
                                    나의 보유 포인트 확인</Text>
                            </TouchableOpacity>
                         
                    </View>
                </View>
                {/* 두번째 문단 살려줘  */}


                <View style={{ width: Width * 0.9, height: Height * 0.1, alignSelf: 'center', marginTop: 10, flexDirection: "row", marginTop: 10,marginBottom :20 }}>
                    <View style={{ width: "50%", height: " 120%", alignItems: "center" }}>
                        <ImageBackground
                            style={{ width: "85%", height: "100%", marginLeft: 15 }}
                            source={require("./wow.png")}
                            resizeMode='stretch'
                        >
                            <Text style={{ textAlign: "center", marginRight: 20, marginTop: 20,color :"white" }}>기부하기</Text>
                            <TouchableOpacity
                             onPress={() => navigation.navigate("DonateMain")} >
                                
                                <Text style={{ textAlign: "center", marginRight: 20, marginTop: 10, width: "50%", backgroundColor: "white", alignSelf: "center" }}>more</Text>
                            </TouchableOpacity>
                        </ImageBackground>  
                    </View>
                    <View style={{ width: "50%", height: " 120%", alignItems: "center" }}>
                    <ImageBackground
                            style={{ width: "85%", height: "100%", marginLeft: 45 }}
                            source={require("./wow.png")}
                            resizeMode='stretch'
                        >
                            <Text style={{ textAlign: "center", marginRight: 20, marginTop: 20,color :"white" }}>카페/베이커리</Text>
                            <TouchableOpacity
                             onPress={() => navigation.navigate("CafeMain")}>
                                <Text style={{ textAlign: "center", marginRight: 20, marginTop: 10, width: "50%", backgroundColor: "white", alignSelf: "center" }}>more</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                </View>
                <View style={{ width: Width * 0.9, height: Height * 0.1, alignSelf: 'center', marginTop: 10, flexDirection: "row", marginTop: 10 ,marginBottom :20 }}>
                    <View style={{ width: "50%", height: " 120%", alignItems: "center" }}>
                        <ImageBackground
                            style={{ width: "85%", height: "100%", marginLeft: 15 }}
                            source={require("./wow.png")}
                            resizeMode='stretch'
                        >
                            <Text style={{ textAlign: "center", marginRight: 20, marginTop: 20,color :"white" }}>뷰티/패션</Text>
                            <TouchableOpacity>
                                <Text style={{ textAlign: "center", marginRight: 20, marginTop: 10, width: "50%", backgroundColor: "white", alignSelf: "center" }}>more</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                    <View style={{ width: "50%", height: " 120%", alignItems: "center" }}>
                    <ImageBackground
                            style={{ width: "85%", height: "100%", marginLeft: 45 }}
                            source={require("./wow.png")}
                            resizeMode='stretch'
                        >
                            <Text style={{ textAlign: "center", marginRight: 20, marginTop: 20,color :"white" }}>외식</Text>
                            <TouchableOpacity>
                                <Text style={{ textAlign: "center", marginRight: 20, marginTop: 10, width: "50%", backgroundColor: "white", alignSelf: "center" }}>more</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                </View>

                <View style={{ width: Width * 0.9, height: Height * 0.1, alignSelf: 'center', marginTop: 10, flexDirection: "row", marginTop: 10 ,marginBottom :20 }}>
                    <View style={{ width: "50%", height: " 120%", alignItems: "center" }}>
                        <ImageBackground
                            style={{ width: "85%", height: "100%", marginLeft: 15 }}
                            source={require("./wow.png")}
                            resizeMode='stretch'
                        >
                            <Text style={{ textAlign: "center", marginRight: 20, marginTop: 20,color :"white"}}>편의점</Text>
                            <TouchableOpacity>
                                <Text style={{ textAlign: "center", marginRight: 20, marginTop: 10, width: "50%", backgroundColor: "white", alignSelf: "center" }}>more</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                    <View style={{ width: "50%", height: " 120%", alignItems: "center" }}>
                    <ImageBackground
                            style={{ width: "85%", height: "100%", marginLeft: 45 }}
                            source={require("./wow.png")}
                            resizeMode='stretch'
                        >
                            <Text style={{ textAlign: "center", marginRight: 20, marginTop: 20 ,color :"white"}}>기타/환급하기</Text>
                            <TouchableOpacity
                            onPress={() => navigation.navigate("PaybackMain")}>
                                <Text style={{ textAlign: "center", marginRight: 20, marginTop: 10, width: "50%", backgroundColor: "white", alignSelf: "center" }}>more</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                </View>
            </View>



        </View >
    )
}

export default MarketMain

