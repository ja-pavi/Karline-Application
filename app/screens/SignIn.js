import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { setStatusBarStyle } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

const SignIn = ({navigation}) => {

  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if( val.trim().length >= 4 ){
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true
    });
  } else {
    setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false
      });
    }
  }

  const handlePasswordChange = (val) => {
    if( val.trim().length >= 8 ) {
        setData({
            ...data,
            password: val,
            isValidPassword: true
        });
    } else {
        setData({
            ...data,
            password: val,
            isValidPassword: false
        });
      }
    }

  const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
    });
  }

  const handleValidUser = (val) => {
    if( val.trim().length >= 4 ) {
        setData({
            ...data,
            isValidUser: true
        });
    } else {
        setData({
            ...data,
            isValidUser: false
        });
      }
    }

  const loginHandle = (userName, password) => {
    const foundUser = Users.filter( item => {
      return userName == item.username && password == item.password;
  } );

  if ( data.username.length == 0 || data.password.length == 0 ) {
      Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
          {text: 'Okay'}
      ]);
      return;
  }

  if ( foundUser.length == 0 ) {
      Alert.alert('Invalid User!', 'Username or password is incorrect.', [
          {text: 'Okay'}
      ]);
      return;
  }
  signIn(foundUser);
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='transparent' barStyle="light-content"/>
    <LinearGradient
      colors={['#6DD5FA', '#55c9f2', '#FFFFFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}/>
    <Animatable.View 
    animation="slideInDown"
    style={styles.header}>
      <Text style={styles.text_header}>Welcome to Karline </Text>
      </Animatable.View>
    <Animatable.View 
      animation="fadeInUpBig"
      style={styles.footer}>

      <Text style={styles.text_footer}
      >Username</Text>
      <View style={styles.action}>
        <FontAwesome
          name="user-o"
          color="black"
          size={20}
        />

        <TextInput
          placeholder="Username"
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={(val) => textInputChange(val)}
        />
        
        {data.check_textInputChange ? 
        <Animatable.View
        animation="bounceIn"
        >
        <Feather
            name="check-circle"
            color="green"
            size={20}
        />
        </Animatable.View>
        : null}
        </View>

        <Text style={[styles.text_footer, {
          marginTop: 35
        }]}>Password</Text>
        <View style={styles.action}>
        <Feather
          name="lock"
          color="black"
          size={20}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={data.secureTextEntry ? true : false}
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={(val) => handlePasswordChange(val)}
        />
        <TouchableOpacity
        onPress={updateSecureTextEntry}
        >
        {data.secureTextEntry ?
        <Feather
            name="eye-off"
            color="grey"
            size={20}
        />
        :
        <Feather
            name="eye"
            color="grey"
            size={20}
        />
      }
      </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity style={styles.button}
      onPress={() => navigation.navigate("TabNavigator")}>
        <LinearGradient
          colors={['#6DD5FA', '#69d0f5']}
          style={styles.signIn} 
        >
        <Text style={[styles.textSign, { color: '#fff'}]}>Sign In</Text>
        </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.text}>* If you don't have an account, contact the district's office.</Text>
      </View>
      </Animatable.View>
      </View>
    
  );
};

export default SignIn;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#5DB6CA'
    },
    header: {
        flex: 1,
        color: "black",
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 1000,
    },
    footer: {
        flex: 3,
        backgroundColor: 'rgba(255,255,255,1)',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 32
    },
    text_footer: {
        color: 'black',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    text: {
      marginTop: 10,
      fontSize: 12,
      color: 'rgba(1,1,1,0.5)',
      paddingHorizontal: 5,
    }
  });