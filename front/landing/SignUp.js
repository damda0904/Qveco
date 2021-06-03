import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
} from "react-native"
import { Picker } from '@react-native-picker/picker';
import { COLORS, SIZES, FONTS, icons, images } from "../../constants"
import firebase from 'firebase'
import { Colors } from "react-native/Libraries/NewAppScreen";
require('firebase/firestore')


export class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            nickname: '',
            level: 0,
            point: 0,
            nicknameDupli: false,
            emailDupli: false,

        }

        this.onSignUp = this.onSignUp.bind(this)
        this.nicknameCheck = this.nicknameCheck.bind(this)
        this.emailCheck = this.emailCheck.bind(this)

    }

    nicknameCheck(nickname) {
        this.setState({ nickname: nickname })

        firebase.firestore()
            .collection("users")
            .where("nickname", "==", nickname)
            .get()
            .then((sanpshot) => {
                if (!sanpshot.empty) {
                    this.setState({ nicknameDupli: true })
                }
                else {
                    this.setState({ nicknameDupli: false })
                }
            })
    }

    emailCheck(email) {
        this.setState({ email: email })
        // console.log("email : " + this.state.email)


        firebase.firestore()
            .collection("users")
            .where("email", "==", email)
            .get()
            .then((snapshot) => {

                console.log(snapshot.empty)
                if (!snapshot.empty) {
                    this.setState({ emailDupli: true })
                }
            })
            .catch((err) => {
                console.log(err)
            })

    }

    onSignUp() {
        const { email, password, name, nickname, level, point } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firebase.firestore().collection("users")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        name,
                        email,
                        nickname,
                        level,
                        point
                    })
                console.log("onSignUp")
                console.log(result)
            this.props.navigation.navigate("ChooseChar")

            })
            .catch((error) => {
                console.log("onSignUp")
                console.log(error)
            })

    }

    render() {

        function renderHeader() {
            return (
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: SIZES.padding * 6,
                        paddingHorizontal: SIZES.padding * 2,

                    }}
                    onPress={() => console.log("Sign In")}
                >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.black
                        }}
                    />
                    <Text style={{
                        borderBottomWidth: 3,
                        borderColor: COLORS.orange, width: 100, textAlign: 'center', color: COLORS.black, ...FONTS.h4
                    }}>회원가입</Text>

                </TouchableOpacity>

            )
        }

        function renderForm() {
            return (
                <View
                    style={{
                        marginTop: SIZES.padding * 3,
                        marginHorizontal: SIZES.padding * 4,
                    }}
                >
                    {/* Full Name */}
                    <View style={{ marginTop: SIZES.padding * 3 }}>
                        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>이름</Text>
                        <TextInput
                            style={{
                                marginVertical: SIZES.padding,
                                borderBottomColor: COLORS.black,
                                borderBottomWidth: 1,
                                height: 40,
                                color: COLORS.black,
                                ...FONTS.body3
                            }}
                            selectionColor={COLORS.black}
                            onChangeText={(name) => this.setState({ name: name })}
                        />

                    </View>

                    {/* email address */}
                    <View style={{ marginTop: SIZES.padding * 2 }}>
                        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>Email</Text>

                        <TextInput
                            style={{
                                flex: 1,
                                marginVertical: SIZES.padding,
                                borderBottomColor: COLORS.black,
                                borderBottomWidth: 1,
                                height: 40,
                                color: COLORS.black,
                                ...FONTS.body3
                            }}
                            selectionColor={COLORS.black}
                            onChangeText={(email) => emailCheck(email)}

                        />
                    </View>

                    <View style={{ marginTop: SIZES.padding * 2 }}>
                        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>Password</Text>
                        <TextInput
                            style={{
                                marginVertical: SIZES.padding,
                                borderBottomColor: COLORS.black,
                                borderBottomWidth: 1,
                                height: 40,
                                color: COLORS.black,
                                ...FONTS.body3
                            }}

                            placeholderTextColor={COLORS.black}
                            selectionColor={COLORS.black}
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({ password })}

                        />
                    </View>
                    {/* Full Name */}
                    <View style={{ marginTop: SIZES.padding * 3 }}>
                        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>닉네임</Text>
                        <TextInput
                            style={{
                                marginVertical: SIZES.padding,
                                borderBottomColor: COLORS.black,
                                borderBottomWidth: 1,
                                height: 40,
                                color: COLORS.black,
                                ...FONTS.body3
                            }}
                            selectionColor={COLORS.black}
                            onChangeText={(nickname) => nicknameCheck(nickname)}

                        />
                    </View>
                    {/* Full Name */}
                    <View style={{ marginTop: SIZES.padding * 3 }}>
                        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>Level</Text>
                        <Picker
                            style={{ height: 50, width: 250 }}
                            selectedValue={this.state.level}
                            onValueChange={(val, idx) => this.setState({ level: val })}
                        >
                        </Picker>
                    </View>


                </View>
            )
        }


        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={{ flex: 1 }}
            >
                <View
                    style={{ flex: 1 }}
                >
                    <ScrollView>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: SIZES.padding * 6,
                                paddingHorizontal: SIZES.padding * 2,

                            }}
                            onPress={() => this.props.navigation.navigate("SignIn")}
                        >
                            <Image
                                source={icons.back}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.black
                                }}
                            />
                            <Text style={{
                                borderBottomWidth: 3,
                                borderColor: COLORS.orange, width: 100, textAlign: 'center', color: COLORS.black, ...FONTS.h4
                            }}>회원가입</Text>

                        </TouchableOpacity>
                        <View
                            style={{
                                marginTop: SIZES.padding * 3,
                                marginHorizontal: SIZES.padding * 4,
                            }}
                        >
                            {/* Full Name */}
                            <View style={{ marginTop: SIZES.padding * 3 }}>
                                <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>이름</Text>
                                <TextInput
                                    style={{
                                        marginVertical: SIZES.padding,
                                        borderBottomColor: COLORS.black,
                                        borderBottomWidth: 1,
                                        height: 40,
                                        color: COLORS.black,
                                        ...FONTS.body3
                                    }}
                                    selectionColor={COLORS.black}
                                    onChangeText={(name) => this.setState({ name })}
                                />
                            </View>

                            {/* email address */}
                            <View style={{ marginTop: SIZES.padding * 2 }}>
                                <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>Email</Text>

                                <TextInput
                                    style={{
                                        flex: 1,
                                        marginVertical: SIZES.padding,
                                        borderBottomColor: COLORS.black,
                                        borderBottomWidth: 1,
                                        height: 40,
                                        color: COLORS.black,
                                        ...FONTS.body3
                                    }}
                                    selectionColor={COLORS.black}
                                    onChangeText={(email) => this.emailCheck(email)}
                                />
                                {this.state.emailDupli
                                    ? <Text
                                        style={{
                                            color: COLORS.red,
                                            ...FONTS.body4
                                        }}
                                    >이미 등록된 이메일입니다.</Text>
                                    : <Text
                                        style={{
                                            color: COLORS.gray,
                                            ...FONTS.body4
                                        }}
                                    >사용 가능한 이메일입니다.</Text>
                                }
                            </View>

                            <View style={{ marginTop: SIZES.padding * 2 }}>
                                <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>Password</Text>
                                <TextInput
                                    style={{
                                        marginVertical: SIZES.padding,
                                        borderBottomColor: COLORS.black,
                                        borderBottomWidth: 1,
                                        height: 40,
                                        color: COLORS.black,
                                        ...FONTS.body3
                                    }}

                                    placeholderTextColor={COLORS.black}
                                    selectionColor={COLORS.black}
                                    secureTextEntry={true}
                                    onChangeText={(password) => this.setState({ password })}

                                />
                            </View>
                            {/* Full Name */}
                            <View style={{ marginTop: SIZES.padding * 3 }}>
                                <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>닉네임</Text>
                                <TextInput
                                    style={{
                                        marginVertical: SIZES.padding,
                                        borderBottomColor: COLORS.black,
                                        borderBottomWidth: 1,
                                        height: 40,
                                        color: COLORS.black,
                                        ...FONTS.body3
                                    }}
                                    selectionColor={COLORS.black}
                                    onChangeText={(nickname) => this.nicknameCheck(nickname)}
                                />
                                {this.state.nicknameDupli
                                    ? <Text
                                        style={{
                                            color: COLORS.red,
                                            ...FONTS.body4
                                        }}
                                    >이미 등록된 닉네임입니다.</Text>
                                    : <Text
                                        style={{
                                            color: COLORS.gray,
                                            ...FONTS.body4
                                        }}
                                    >사용 가능한 닉네임입니다.</Text>
                                }
                            </View>


                        </View>
                        <View style={{ margin: SIZES.padding * 3 }}>
                            <TouchableOpacity
                                style={{
                                    height: 60,
                                    backgroundColor: COLORS.orange,
                                    borderRadius: SIZES.radius / 1.5,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                onPress={() => this.onSignUp()}
                            >
                                <Text style={{ color: COLORS.white, ...FONTS.h3 }}>다음</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

export default SignUp
