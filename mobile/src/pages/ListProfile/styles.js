import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    
    img:{
         width: 148,
         height: 18
    },

   header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
   },

   headerText:{
       fontSize: 15,
       color: '#737380'
   },

   headerTextBold: {
        fontWeight: 'bold'
   },

   title:{
        fontSize: 32,
        marginBottom: 0,
        marginTop: 30,
        color: '#13131a',
        fontWeight: 'bold'
   },

   tasksList:{
        marginTop: 10
   },

   tasks:{
       padding: 24,
       borderRadius: 8,
       backgroundColor: '#FFF',
       marginBottom: 16
   },

   tasksProperty:{
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
   },

   tasksValue:{
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
   },

   detailsButton:{
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center'

   },

   detailsButtonText:{
      color: '#0DA41C' ,
      fontSize: 15,
      fontWeight: 'bold' 
   }

})