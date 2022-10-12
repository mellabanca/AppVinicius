import React, {Component} from "react";
import { Text,View,Button } from "react-native";


export default class TelaLogin extends Component{
render(){
    return(
     <View style = {{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
     }}>
      <Text>
      se tu ta vendo isso é pq deu certo
      </Text>
    <Button title="Ir para proxima tela" onPress={()=> this.props.navigation.navigate("TelaExp")}/>
     </View>   
    )

}
}