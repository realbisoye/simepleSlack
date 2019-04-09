import React from 'react'
import {SafeAreaView, View, Text} from 'react-native'
import AppBar from '..//appBar'
import styles from './styles'

const Main = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <AppBar />
      <View style={styles.wrapper}>
       <Text style={styles.texts}> Hi </Text>
      </View>
    </SafeAreaView>
  )
}

export default Main
