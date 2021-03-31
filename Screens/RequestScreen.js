import React from 'react';
import {TouchableOpacity ,View ,Text, TextInput, StyleSheet, Modal, Alert, ScrollView, KeyboardAvoidingView,} from 'react-native';
import MyHeader from "../Components/Myheader";
import firebase from 'firebase';
import db from '../Config';

export default class RequestScreen extends React.Component{
    constructor(){
        super()
        this.state = {
           UserID:firebase.auth().currentUser.email,
           Book_Name:'',
           Reason:'',
        }
    }
    AddRequest = ()=>{
        db.collection("REQUESTED_BOOKS").add({
            User_ID:this.state.UserID,
            Book_Name:this.state.Book_Name,
            Reason:this.state.Reason,
            Request_ID:Math.random().toString(25).substring(7)
        })
        this.setState({
            Book_Name:'',
            Reason:'',
        })
        alert("Request Submitted");
    }
    render(){
        return(
            <View style = {{flex:1}}>
                <MyHeader title = "REQUEST HERE" navigation = {this.props.navigation}/>
                <KeyboardAvoidingView style = {styles.keyBoardStyle}>
                    <TextInput placeholder = "Book Name" style = {styles.formTextInput} onChangeText = {(text)=>{
                            this.setState({
                                Book_Name:text,
                            })
                        }}
                        value = {this.state.FirstName}/>
                        <TextInput placeholder = "Reason"  style = {styles.formTextInput} multiline = {true} numberOfLines = {5} onChangeText = {(text)=>{
                            this.setState({
                                Reason:text,
                            })
                        }}>
                    </TextInput>
                    <TouchableOpacity style = {styles.button} onPress = {()=>{
                        this.AddRequest();
                    }}>
                        <Text>
                            REQUEST BOOK
                        </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({ 
    keyBoardStyle : { flex:1, 
        alignItems:'center', 
        justifyContent:'center' }, 
    formTextInput:{ width:"75%",
        height:35,
        alignSelf:'center', 
        borderColor:'#ffab91', 
        borderRadius:10, 
        borderWidth:1, 
        marginTop:20, 
        padding:10, }, 
    button:{ width:"75%", 
        height:50, 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:10, 
        backgroundColor:"#ff5722", 
        shadowColor: "#000", 
    shadowOffset: { width: 0, 
        height: 8, }, 
        shadowOpacity: 0.44, 
        shadowRadius: 10.32, 
        elevation: 16, 
        marginTop:20 }, } )
