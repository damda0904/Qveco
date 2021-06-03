import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    Platform
} from "react-native"
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS, SIZES, FONTS, icons, images } from "../../constants"
//import SocialButton from "../../constants/SocialButton"
import firebase from 'firebase'


export class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }

        this.onSignIn = this.onSignIn.bind(this)
    }

    onSignIn() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log("onSignIn")
                console.log(result)
                this.props.navigation.navigate("QuestMain")

            })
            .catch((error) => {
                console.log("onSignIn")
                console.log(error)
            })

    }

    render() {

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
                            width: 180, height: 180
                        }}
                    />
                    <Image
                        source={images.qveco}
                        resizeMode="contain"
                        style={{
                            width: 125,
                            height: 40
                        }}
                    />
                </View>
            )
        }

        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={{ flex: 1 }}
            >
                <View
                    style={{ flex: 1, marginTop: 50 }}
                >
                    <ScrollView>
                        {renderLogo()}
                        {/*{renderForm()}*/}
                        <View
                            style={{
                                marginVertical: 50,
                                marginHorizontal: SIZES.padding * 8,
                            }}
                        >


                            <View style={{ marginTop: SIZES.padding * 2 }}>
                                <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>Email</Text>

                                <TextInput
                                    style={{
                                        flex: 1,
                                        //marginVertical: SIZES.padding,
                                        borderBottomColor: COLORS.black,
                                        borderBottomWidth: 1,
                                        height: 30,
                                        color: COLORS.black,
                                        ...FONTS.body3
                                    }}
                                    selectionColor={COLORS.black}
                                    onChangeText={(email) => this.setState({ email })}
                                />
                            </View>

                            <View style={{ marginTop: SIZES.padding * 2 }}>
                                <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>Password</Text>
                                <TextInput
                                    style={{
                                        //marginVertical: SIZES.padding,
                                        borderBottomColor: COLORS.black,
                                        borderBottomWidth: 1,
                                        height: 30,
                                        color: COLORS.black,
                                        ...FONTS.body3
                                    }}
                                    selectionColor={COLORS.black}
                                    secureTextEntry={true}
                                    onChangeText={(password) => this.setState({ password })}
                                />
                            </View>
                        </View>
                        <View style={{
                            marginTop: SIZES.padding * 3,
                            marginHorizontal: SIZES.padding * 8,
                        }}>
                            <TouchableOpacity
                                style={{
                                    height: 40,
                                    backgroundColor: COLORS.white,
                                    alignItems: 'center',
                                    borderWidth: 1,
                                    borderColor: 'orange',
                                    justifyContent: 'center'

                                }}
                                onPress={() => this.props.navigation.navigate("SignUp")}
                            >
                                <Text style={{ color: COLORS.black, fontWeight: "bold", fontSize: 10 }}>앱 회원가입 하기</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            marginTop: SIZES.padding * 3,
                            marginHorizontal: SIZES.padding * 8,
                        }}>
                            <TouchableOpacity
                                style={{
                                    height: 50,
                                    backgroundColor: COLORS.orange,
                                    borderRadius: SIZES.radius / 1.5,
                                    alignItems: 'center',
                                    justifyContent: 'center'

                                }}
                                onPress={() => this.onSignIn()}
                            >
                                <Text style={{ color: COLORS.white, ...FONTS.h4 }}>LogIn</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

export default SignIn
