import React, { Component } from "react";
import { View } from 'react-native';

class App extends Component {
  render() {

    let nome = 'José';
    let img = 'https://sujeitoprogramador.com/steve.png'

    return(
      <view>
        <Text>Olá mundo</Text>
        <Text>Meu primeiro App</Text>
        <Text style={{ color: '#FF0000', fontSize: 25, margin: 15}}>
          Sujeito Programador 
        </Text>

        <Image
          source = {{ uri: img}}

          style = {{ widht: 300, height: 300}}
        
        />

        <Text style = {{ fontSize: 30}}> {nome} </Text>
      </view>

    );
  }
}

export default App;