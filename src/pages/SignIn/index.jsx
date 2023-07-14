import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";

export default function SignIn() {
  return (
    <View style={style.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={400}
        style={style.containerHeader}
      >
        <Text style={style.message}>Bem vindo</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={style.containerForm}>
        <Text style={style.title}>Email</Text>
        <TextInput placeholder="Digite um email" style={style.input} />

        <Text style={style.title}>Senha</Text>
        <TextInput placeholder="Digite sua senha" style={style.input} />

        <TouchableOpacity style={style.button}>
            <Text style={style.buttonText}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.buttonRegister}>
            <Text style={style.registerText}>Não possui uma? Cadastra-se</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#472847',
  },
  containerHeader: {
    marginTop:'14%',
    marginBottom: '18%',
    paddingStart: '5%'
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff"
  },
  containerForm: {
    flex:1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#472847',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent:'center',
    alignItems: "center"
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center',
  },
  registerText: {
    color: '#a1a1a1'
  }
});
