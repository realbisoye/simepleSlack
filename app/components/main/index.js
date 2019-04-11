import React from 'react'
import {SafeAreaView, ScrollView, StatusBar, View, Text} from 'react-native'
import AppBar from '../appBar'
import CommentBox from '../commentBox'
import Comment from '../comment'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
    }
    this.addMessage = this.addMessage.bind(this)
  }

  addMessage(message) {
    const messages = this.state.messages
    const time = new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    })
    messages.push({
      message,
      time,
    })
    this.setState({messages})
  }

  render() {
    const {messages} = this.state
    return (
      <SafeAreaView style={styles.main}>
        <StatusBar backgroundColor="#3F0F3F" barStyle="light-content" />
        <AppBar />
        <View style={styles.contentWrapper}>
          <View style={styles.memberNameSection}>
            <View style={styles.memberNameWrapper}>
              <Icon name={'check-circle'} color={'#006D56'} size={15}/>
              <Text style={styles.memberName}>{'Jon Mctay'}</Text>
            </View>
            <Icon name={'keyboard-arrow-down'} color={'#808080'} size={20}/>
          </View>
          <ScrollView contentContainerStyle={styles.commentsContainer}>
            {Boolean(messages.length) && messages.map((m) => <Comment key={m.message} message={m.message} time={m.time}/>)}
          </ScrollView>
        </View>
        <CommentBox addMessage={this.addMessage}/>
      </SafeAreaView>
    )
  }
}

export default Main
