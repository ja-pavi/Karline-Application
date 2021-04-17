import * as React from 'react';
import {Easing, TextInput, Animated, Text, View, StyleSheet,StatusBar} from 'react-native';
import Constants from 'expo-constants';
import Svg, { G, Circle, Rect } from 'react-native-svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';
import { color } from 'react-native-reanimated';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient'

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export default function Here({
  percentage = 100,
  radius = 160,
  strokeWidth = 20,
  duration = 4000,
  color = "#6DD5FA",
  delay = 0,
  textColor,
  max = 100
}) {
  const animated = React.useRef(new Animated.Value(0)).current;
  const circleRef = React.useRef();
  const inputRef = React.useRef();
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;

  const animation = (toValue) => {
    return Animated.timing(animated, {
      delay: 2500,
      toValue,
      duration,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start(() => {
      animation(toValue === 0 ? percentage : 0);
    });
  };

  React.useEffect(() => {
      animation(percentage);
      animated.addListener((v) => {
        const maxPerc = 100 * v.value / max;
        const strokeDashoffset = circumference - (circumference * maxPerc) / 100;
        if (inputRef?.current) {
          inputRef.current.setNativeProps({
            text: `${Math.round(v.value)}`,
          });
        }
        if (circleRef?.current) {
          circleRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      }, [max, percentage]);
  
      return () => {
        animated.removeAllListeners();
      };
  });

  return (
    <View style={styles.container}>
      <LottieView 
        style={styles.carLottie}
        source={require("../../assets/lottie/car.json")}
        autoPlay
      />

      <Text style={styles.updateText2}>  
      </Text>

      <StatusBar hidden/>
      <TouchableOpacity style={{alignSelf: 'center'}}>
        <View style={{ width: radius * 2, height: radius * 2 }}>
          <Svg
            height={radius * 2}
            width={radius * 2}
            viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
            <G
              rotation="-90"
              origin={`${halfCircle}, ${halfCircle}`}>
              <Circle
                ref={circleRef}
                cx="50%"
                cy="50%"
                r={radius}
                fill="transparent"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDashoffset={circumference}
                strokeDasharray={circumference}
              />
              <Circle
                cx="50%"
                cy="50%"
                r={radius}
                fill="transparent"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinejoin="round"
                strokeOpacity=".1"
              />
            </G>
          </Svg>
          <Text
              style={[
                StyleSheet.absoluteFillObject,
                {fontSize: 35},styles.text,]}> 
                <MaterialIcons
                name="location-on"
                color="rgba(1,1,1,0.7)"
                size={30}
                /> I'm Leaving
          </Text>

        </View>
      </TouchableOpacity>

      <TouchableOpacity>
            <Animatable.View
            animation="bounceIn"
            style={styles.cancelButton}>
              <LinearGradient
                  colors={['#6DD5FA', '#69d0f5']}
                  style={styles.signIn}>
                <Text style={[styles.textSign, { color: '#fff'}]}><MaterialIcons
                  name="close"
                  color="#fff"
                  size={30}
                  /></Text>
                </LinearGradient>
              </Animatable.View>
            </TouchableOpacity>

            <Text style={styles.updateText}>  
          <MaterialIcons
                name="near-me"
                color="rgba(41,128,185,0.7)"
                size={15}
                textAlignVertical={"center"}
                paddingBottom
                /> Current Location: You are <Text style={styles.highlightText}>INSIDE</Text> the required zone.
          </Text>
      
     
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff' 
  },
  text: { 
    fontWeight: '700',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 132.5,
    color: "rgba(1,1,1,0.7)",
    textAlignVertical: "center",
    paddingBottom: 3
  },
  updateText: {
    fontSize: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    marginTop: 30,
    marginBottom: 40,
    color: "rgba(1,1,1,0.3)"
  },
  updateText2: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    marginTop: 10,
    marginBottom: 40,
    color: "#6DD5FA"
  },
    highlightText: {
      fontSize: 12,
      textAlign: 'center',
      fontWeight: 'bold',
      textAlignVertical: 'center',
      marginTop: 35,
      color: "#6DD5FA"
  },
  carLottie: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20
  },
  cancelButton: {
    backgroundColor: 'rgba(255,255,255,0.75)',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
    alignSelf: 'center',
    shadowColor: '#303838',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 5,
    shadowOpacity: 0.25,
  },
  signIn: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    flexDirection: 'row',
  }
});