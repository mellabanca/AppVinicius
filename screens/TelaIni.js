import React, {Component} from "react";
import { Text,View,Button } from "react-native";


export default class TelaIni extends Component{
render(){
    return(
     <View style = {{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
     }}>
      <Text>
      Beta
      </Text>
    <Button title="Ir para proxima tela" onPress={()=>this.props.navigation.navigate("TelaLogin")}/>
     </View>   
    )

}













}


