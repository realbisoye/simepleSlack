import React from 'react'
import PropTypes from 'prop-types'
import {Text, Image, View} from 'react-native'
import styles from './styles'

const Comment = (props) => (
  <View style={styles.commentWrapper}>
    <Image
      source={require('../../assets/slackbot.png')}
      style={styles.userImage}
    />
    <View style={styles.contents}>
      <View style={styles.nameWrapper}>
        <Text testID={'appTitle'} style={styles.username}>
          {'John Legend'}
        </Text>
        <Text testID={'appTitle'} style={styles.time}>
          {props.time}
        </Text>
      </View>
      <Text style={styles.message}>
        {props.message}
      </Text>
    </View>
  </View>
)

Comment.propTypes = {
  time: PropTypes.string,
  message: PropTypes.string,
}

export default Comment
