import * as React from 'react';
import {Easing, TextInput, Animated, Text, View, StyleSheet,StatusBar} from 'react-native';
import Constants from 'expo-constants';
import Svg, { G, Circle, Rect } from 'react-native-svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';
import Donut from './Donut'

const data = [{
  percentage: 100,
  color: '#6DD5FA',
  max: 100
}]



const Here = () => {

  return (
    <View style={styles.container}>
      <LottieView 
        style={styles.carLottie}
        source={require("../../assets/lottie/car.json")}
        autoPlay
      />

      <StatusBar hidden/>
      <TouchableOpacity style={{alignSelf: 'center'}}>
          {data.map((p, i) => {
            return <Donut key={i} percentage={p.percentage} color={p.color} delay={500 + 100 * i} max={p.max}/>
          })}
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
    fontWeight: '900',
    textAlign: 'center' 
  },
  carLottie: {
    width: 160,
    height: 160,
    alignSelf: 'center',
    marginBottom: 60,
    marginTop: 20
  }
});

export default Here;