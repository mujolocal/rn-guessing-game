import React from "react"
import { StyleSheet, View, Text, TextInput, Button } from "react-native";


const StartGameScreen =props=>{
    return(<View style={styles.screen}>
        <Text style={styles.title}>Sart A New Game</Text>
        <View style={styles.inputContainer}>
            <Text>Select A Number</Text>
            <TextInput/>
            <View style={styles.buttonContainer}>
                <Button title="reset"/>
                <Button title="confirm"/>
            </View>
        </View>

    </View>)
};

const styles = StyleSheet.create(
{
    screen:{
        flex:1,
        padding: 10,
        alignItems: "center",
    },
    buttonContainer:{
        flexDirection:"row",
        width: "100%",
        justifyContent:"space-between",
        paddingHorizontal:15,
    },
    title:{
        fontSize:20,
        marginVertical:10,

    },
    inputContainer:{
        width:300,
        maxWidth:"80%",
        alignItems:"center",
        shadowColor:"black",
        shadowOffset:{width:0, height:2},
        shadowRadius:6,
        shadowOpacity: 0.26,
        backgroundColor:"white",
        elevation: 5,
        padding:20,
        borderRadius: 20,
        
    
    }
}
)


export default StartGameScreen;