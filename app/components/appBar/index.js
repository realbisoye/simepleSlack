import React from 'react'
import {Text, TouchableOpacity, Image, View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'

const AppBar = () => (
  <View style={styles.appBar}>
    <View style={styles.orgDetails}>
      <TouchableOpacity testID={'menuButton'}>
        <Image
          source={require('../../assets/slackbot.png')}
          style={styles.logo}
        />
      </TouchableOpacity>
      <Text testID={'appTitle'} style={styles.appBarTitle}>
        {'SimpleSlack'}
      </Text>
    </View>
    <View style={styles.icons}>
      <Icon size={25} name={'search'} color={'#FFFFFF'}/>
      <Icon size={25} name={'more-vert'} color={'#FFFFFF'}/>
    </View>
  </View>
)

export default AppBar
