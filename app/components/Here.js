import * as React from 'react';
import {Easing, TextInput, Animated, Text, View, StyleSheet,StatusBar} from 'react-native';
import Constants from 'expo-constants';
import Svg, { G, Circle, Rect } from 'react-native-svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export default function Here({
  percentage = 100,
  radius = 150,
  strokeWidth = 13,
  duration = 2500,
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
                {fontSize: 60, color: textColor ?? color},styles.text,]}>I'm Here
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff' 
  },
  text: { 
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 110
  },
  carLottie: {
    width: 160,
    height: 160,
    alignSelf: 'center',
    marginBottom: 60,
    marginTop: 20
  }
});