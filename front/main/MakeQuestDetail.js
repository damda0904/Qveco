import React, {Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    TextInput,
    
} from "react-native"
import { COLORS, SIZES, FONTS, icons, images } from "../../constants"
import { Picker } from '@react-native-picker/picker';
import Icons from 'react-native-vector-icons/AntDesign'

const MakeQuestDetail= ({navigation}) =>{
    const [selectedValue, setSelectedValue] = React.useState("0");
    function renderHeader(){
        return (
            <View>
                <View
                style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent:"center",
                    marginTop: SIZES.padding * 7,
                    paddingHorizontal: SIZES.padding * 2,
                }}
                onPress={() => console.log("Sign In")}
            >
                
            
            <Text style={{ borderBottomWidth:3,
                    borderColor:COLORS.red, width:100, color: COLORS.black, ...FONTS.h4,textAlign:'center' }}>퀘스트 개설</Text>
            </View>
            </View>
            
            
        )

    }
    return(
        <View style={styles.container}>
            
            {renderHeader()}
            <View style={{alignItems:'center'}}>
            <View style={{ marginVertical:30, alignItems:'center'}}>
                <Text style={{fontSize:14, color:'black',fontWeight:'bold'}}>
                    <Text style={{color:'red'}}>빨간색</Text>
                    을 눌러 퀘스트 개설 내용을 채워주세요
                </Text>
            </View>
            <View style={{marginBottom:10}}>
            <TouchableOpacity style={{
               borderRadius:10, 
                borderWidth:1, 
                borderColor:'black', 
                marginTop:-20,marginBottom:4, 
                height:150, width:335,
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'white',}}>
            <Icons name="plus" size={21} style={{color:'red'}}/>
          <Text style={{color:'red', fontSize:12}}>퀘스트 대표 이미지</Text>
           </TouchableOpacity>
            </View>
           
           
            <View style={{flexDirection:'row', marginBottom:10}}>
            <View 
            style={{borderRadius:10, height: 30, width: 130, borderWidth:1,borderColor:'black', marginRight:20}}
            >
            <Picker
                style={{ height: 30, width: 140,  
                    borderColor:'black',borderWidth:1,color:'red' }}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >   
            <Picker.Item label="카테고리선택" value="0" />
                <Picker.Item label="식사" value="1" />
                <Picker.Item label="레시피" value="2" />
                <Picker.Item label="체험" value="3" />
                <Picker.Item label="생활습관" value="4" />
            </Picker>

            </View>
            
            
            <TextInput style={{
               borderRadius:10, 
                borderWidth:1, 
                borderColor:'black', 
                
                height:30, width:210,
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'white',
                textAlign:'center'}}
                placeholderTextColor='red'
                placeholder='퀘스트 이름 지정하기'/>
            </View>
           
            <View style={{
               borderRadius:10, 
                borderWidth:1, 
                borderColor:'black', 
                marginBottom:5, 
                height:30, width:335,
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'white',
                }}>
            <Text style={{fontSize:12}}>
                <Text style={{color:'red'}}>___</Text>
                일동안, 일주일에 
                <Text style={{color:'red'}}>___</Text>
                번, 하루에 
                <Text style={{color:'red'}}>___</Text>
                번 인증샷

            </Text>
           
           </View>
            
            <TouchableOpacity style={{
               borderRadius:10, 
                borderWidth:1, 
                borderColor:'black', 
                marginTop:-20,marginBottom:20, 
                height:150, width:335,
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'white',
                marginTop:10
                }}>
            <Icons name="plus" size={21} style={{color:'red'}}/>
          <Text style={{color:'red', fontSize:12}}>퀘스트 설명 추가</Text>
           </TouchableOpacity>
            <View style={{flexDirection:'row', marginTop:10}}>
                <TouchableOpacity style={{
                borderRadius:10, 
                    borderWidth:1, 
                    borderColor:'black', 
                    marginTop:-20,marginBottom:10,marginHorizontal:10, 
                    height:150, width:150,
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor:'white'}}>
                        <Icons name="plus" size={21} style={{color:'red'}}/>
                        <Text style={{color:'red', fontSize:12}}>퀘스트 예시 사진 첨부</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                borderRadius:10, 
                    borderWidth:1, 
                    borderColor:'black', 
                    marginTop:-20,marginBottom:20, marginHorizontal:10, 
                    height:150, width:150,
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor:'white'}}>
                        <Icons name="plus" size={21} style={{color:'red'}}/>
                        <Text style={{color:'red', fontSize:12}}>퀘스트 예시 사진 첨부</Text>
                </TouchableOpacity>
            </View>
            </View>
            <View
                style={{ alignItems:'center', justifyContent:'center', marginVertical:10}}
            >
               
                <TouchableOpacity
                    style={{
                    width: 140,
                        height:45,
                        borderWidth:1,
                        borderColor:'red',
                        borderRadius: SIZES.radius / 1.5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginHorizontal:20,
                        marginBottom:20
                        
                    }}
                >
                    <Text style={{ ...FONTS.body3 }}>개설하기</Text>
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

export default MakeQuestDetail;