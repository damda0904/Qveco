import React, {Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from "react-native"
import { COLORS, SIZES, FONTS, icons, images } from "../../constants"

const LandingPage = ({navigation}) =>{
    function renderLogo() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 10,
                    height: 100,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={images.logo}
                    resizeMode="contain"
                    style={{
                        width: 180, height:180
                    }}
                />
                <Image
                    source={images.qveco}
                    resizeMode="contain"
                    style={{
                        width: 125,
                        height:40
                    }}
                />
            </View>
        )
    }
    return(
        <View style={{marginTop:'50%'}}>
            {renderLogo()}
            <View style={{ marginTop: '50%',
                                    marginHorizontal: SIZES.padding * 8,}}>
                <TouchableOpacity
                style={{
                    height: 50, 
                    backgroundColor: COLORS.orange,
                    borderRadius: SIZES.radius / 1.5,
                    alignItems: 'center',
                    justifyContent: 'center'
                    
                }}
                onPress={() => navigation.navigate("SignIn")}
            >
                <Text style={{ color: COLORS.white, ...FONTS.h4 }}>지금 시작하기</Text>
                </TouchableOpacity>
            </View>   
        </View>
    )

}
export default LandingPage;


