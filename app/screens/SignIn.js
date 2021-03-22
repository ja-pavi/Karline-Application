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
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignIn = () => {

  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true
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
      <View style={styles.header}>
      <Text style={styles.text_header}>Welcome to Klein Carpool!</Text>
      </View>
      <View style={styles.footer}>
      <Text style={styles.text_footer}>Footer</Text>
      <View style={styles.action}>
        <FontAwesome
          name="user-o"
          color="#05375a"
          size={20}
        />
        <TextInput
          placeholder="Your Email"
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={(val) => textInputChange(val)}
        />
        {data.check_textInputChange ? 
        <Feather
            name="check-circle"
            color="green"
            size={20}
        />
          : null}
        </View>

        <Text style={[styles.text_footer, {
          marginTop: 35
        }]}>Password</Text>
        <View style={styles.action}>
        <Feather
          name="lock"
          color="#05375a"
          size={20}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.textInput}
          autoCapitalize="none"
        />
        <Feather
            name="eye-off"
            color="grey"
            size={20}
        />
      </View>
      </View>
      </View>
    
  )
}

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
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
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
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });