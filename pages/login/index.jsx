import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';

const Login = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const Logar = () => {

        const corpo = {
            email : email,
            senha : senha
        }
        fetch('http://192.168.15.13:62602/api/Account/login', {
            method : 'POST',
            headers :{
                'Content-Type' : 'applicattion/json'
            },
            body : JSON.stringify(corpo)
        })
        .then(response => response.json())
        .then(data =>{

            if(data.status !== 404){
            alert('Seja bem vindo') ;
            alert(data.token) ;
            navigation.push('Autenticado');
            }
            else{
                alert(' senha ou login invalida'); 
            }
        })
    }

    return (
        <view >
            <text>Login</text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder="Digite seu emial"
            />

            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setSenha(text)}
                value={senha}
                placeholder="Digite sea senha"
                secureTextEntry={true}
            />

            <TouchableOpacity
                onPress={Logar}
            >
                cadastrar
            </TouchableOpacity>

        </view>
    );
}



export default Login;