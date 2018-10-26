// import React, { Component } from 'react'
// import {Alert, View, ScrollView, Button, TextInput} from 'react-native'
// import {Content, Container, Text, List, ListItem, Thumbnail, Body, Left} from 'native-base'
// import axios from 'axios'

// class App extends Component { 
//   constructor(){
//     super()
//     this.state = {pemain:[], tim:'', validasi:true}
//   }
//   getapi = () =>{
//     var url = `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=${this.state.tim}`
//     axios.get(url).then((x)=>{
//       this.setState({pemain: x.data.player})
//     })
//   }
//   render() { 
//     var datafinal;
//       if(this.state.pemain){
//       datafinal = this.state.pemain.map((v,i)=>{
//         var nama = v.strPlayer
//         var posisi = v.strPosition
//         var img = v.strThumb
//         return (
//             <ListItem avatar key={i}>
//               <Left>
//                 <Thumbnail source={{uri:img}}/>
//               </Left>
//               <Body>
//                 <Text>{nama}</Text>
//                 <Text note>{posisi}</Text>
//               </Body>
//             </ListItem>
//       )})
//   } else {
//     var datafinal = <View></View>
//       Alert.alert(this.state.tim + 'Tidak ada didalam Database')
//   }
//     return (
//       <Container>
//         <Text>{this.state.tim}</Text>
//         <TextInput placeholder='Ketik tim...'
//         style={{height:50}}
//         onChangeText={(x)=>{this.setState({tim: x})}}
//         />
//         <Button onPress={this.getapi}
//         title='Klik Sini!' color='green'/>
//         <Content>
//           <ScrollView>
//             <List>
//               {datafinal}
//             </List>
//           </ScrollView>
//         </Content>
//       </Container>
//   )
// }
// }
// export default App;

import React, { Component } from 'react';
import { View,StyleSheet,Text,Button,TextInput, TouchableOpacity,Image } from 'react-native';




class App extends Component{ 
  klik = () => {}
  constructor(){
    super();
    this.state={ms:0,hg:0,imt:0,diag:'',stat:false}
  }

  klik=()=>{
    var berat = parseInt(this.state.ms);
    var hgt = parseInt(this.state.hg)/100;
    var imtv = berat/Math.pow(hgt,2);
    var diagv ='';
    if(imtv<18.5){
      diagv='Berat Badan anda kurang (Your Body Weight is Less)';
    }else if(imtv>=18.5 && imtv<=24.9){
      diagv='Berat Badan Ideal (Your Body Weight is Ideal)';
    }else if(imtv>=25.0 && imtv<=29.9){
      diagv ='Berat Badan Berlebih (Your Body Weight is Excess)';
    }else if(imtv>=30.0 && imtv<=39.9){
      diagv='Berat Badan Sangat Berlebih (You are Very Weight!)'
    }else{
      diagv='Berat Badan Obesitas (WARNING, You are Obesity!)'; 
    }
    this.setState({
      ms:berat,
      hg:hgt,
      imt:imtv,
      diag:diagv,
      stat:true
    })
  }
  render() {
    return (
      <View style={styles.container}>
     
        <Image style={styles.logo} source={require('./images/bounce.png')}/>
        
      
        <TextInput onChangeText={(angka1)=>this.setState({ms:angka1})} style={{height:50,width:350,backgroundColor:'rgba(255,255,255,0.2)',color:'#FFF'}} 
        placeholder='Berat Badan/Body Weight (kg)' value={this.state.ms}  />
        <Text>{'\n'}</Text>
        <TextInput onChangeText={(angka2)=>this.setState({hg:angka2})} style={{height:50,width:350,backgroundColor:'rgba(255,255,255,0.2)',color:'#FFF'}} 
        placeholder='Tinggi/Body Height (cm)' value={this.state.hg}  />
        <Text>{'\n'}</Text>
        <TouchableOpacity>
        <Button onPress={()=>{this.klik();}} title="Hitung Index Massa anda" color="#067070" style={{width:50,height:100}}/>
        </TouchableOpacity>
      
        {this.state.stat &&
        <View style={styles.welcome} hidden="true">
          <Text style={styles.text}>Berat Badan Kamu (Your Body Weight):{'\n'}{this.state.ms} kg</Text>
          <Text style={styles.text}>Tinggi Badan Kamu (Your Body Height):{'\n'}{this.state.hg} m</Text>
          <Text style={styles.text}>Index Massa Tubuh (Body Mass Index):{'\n'}{this.state.imt}</Text>
          <Text style={styles.text}>Diagnosa (Diagnosis):{'\n'}{this.state.diag}</Text>
        </View>
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor:'#317fa5',
    justifyContent: 'center',
    paddingHorizontal:30
  },
  welcome: {
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: 'violet',
  },
  image:{
    width:290,
    height:350
  },
  text:{
    fontSize: 20,
    textAlign:'center'
  },
  logo:{
    height:300,
    width:330,
    alignItems: 'center',
    justifyContent:'center'
    
  }
});

export default App;