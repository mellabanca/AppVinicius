import React, {Component} from "react";
import { Text,View,Button } from "react-native";


export default class TelaAnime extends Component{
render(){
    return(
     <View style = {{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
     }}>
      <Text>
      Anime
      </Text>
    <Button title="Ir para proxima tela"/>
     </View>   
    )

}
}