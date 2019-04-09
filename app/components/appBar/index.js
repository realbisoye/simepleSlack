import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import styles from './styles'

const AppBar = (props) => (
  <View style={styles.appBar}
  >
    <TouchableOpacity testID={'menuButton'}>
      <Icon name={'menu'} size={25} />
    </TouchableOpacity>
    <Text testID={'appTitle'} style={styles.appBarTitle}>
      {'Simple Slack'}
    </Text>
  </View>
)

export default AppBar
