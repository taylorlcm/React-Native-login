import { StyleSheet, Dimensions } from 'react-native';


const {width: WIDTH} = Dimensions.get('window')

export default StyleSheet.create({
     bgContainer: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',

     },
     title: {
       fontSize: 50,
       textAlign: 'center',
       margin: 10,
       color: 'rgba(255, 255, 255, .9)'
     },
     input: {
       padding: 0,
       width: WIDTH -150,
       textAlign: 'center',
       marginBottom: 20,
       backgroundColor: 'rgba(0, 0, 0, 0.25)',
       color: 'rgba(255, 255, 255, 1)',
       height: 45,
       borderRadius: 25,
       fontSize: 18
     },
     titleContainer: {
       marginBottom: 40
     },
     btnLogin: {
        width: WIDTH -250,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#012C34',
        justifyContent: 'center',
        marginTop: 20
     },
     btnText: {
        color: 'rgba(255, 255, 255, .9)',
        fontSize: 18,
        textAlign: 'center',

     },
     select: {
       width: 150,
       textAlign: 'center',
       marginBottom: 20,
       color: 'rgba(255, 255, 255, 0.9)',
       height: 45,
       borderRadius: 25,
       fontSize: 18,
     },


   });

