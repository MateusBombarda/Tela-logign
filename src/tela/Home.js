import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase';


const PlaceholderImage = require('../component/image/mu.png');

const Home= () => {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [semestre, setsemestre] = useState('');
  const [disciplina, setdisciplina] = useState('');
  const [RA, setRA] = useState('');




  const onLoginClick = () => {
    console.log('Nome de Usuário:', nomeUsuario);
    console.log('semestre:', semestre);
    console.log('disciplina:', disciplina);
    console.log('RA:', RA);

    createUserWithEmailAndPassword(auth, nomeUsuario, semestre,disciplina,RA)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // 
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      //
      alert(errorMessage)
    });
  }


  

  return (
    <View style={styles.container}>
            <Image source={PlaceholderImage} style={styles.image} />
            <Text style={styles.titulo}>Home</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        onChangeText={text => setNomeUsuario(text)}
        value={nomeUsuario}
      />

<TextInput
        style={styles.input}
        placeholder="semestre"
        onChangeText={text => setsemestre(text)}
        value={semestre}
       
      />
      
      
      <TextInput
        style={styles.input}
        placeholder="disciplina"
        onChangeText={text => setdisciplina(text)}
        value={disciplina}
      
      />
     
      <TextInput
        style={styles.input}
        placeholder="RA"
        onChangeText={text => setRA(text)}
        value={RA}
      
      />
  
      <TouchableOpacity style={styles.botao} onPress={onLoginClick}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>




    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    gap:10,
  },
  image: {
    width:'80%',
    height:100,
    resizeMode:"contain",
  
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 60,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  botao: {
    backgroundColor: 'green',
    width: '75%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
