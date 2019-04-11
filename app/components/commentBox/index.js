import React from 'react'
import PropTypes from 'prop-types'
import {TextInput, TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'

class CommentBox extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
    this.inputField = React.createRef()
    this.onInputChange = this.onInputChange.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
  }

  onInputChange(text) {
    this.setState({text})
  }

  sendMessage() {
    this.props.addMessage(this.state.text)
    this.inputField.current.clear()
    this.setState({
      text: '',
    })
  }

  render() {
    const icons = [
      'insert-emoticon',
      'photo-camera',
      'insert-photo',
      'attach-file',
      'crop-3-2',
      'email',
    ]

    const {text} = this.state

    return (
      <View style={styles.commentWrapper}>
        <View style={styles.icons}>
          {icons.map((icon) => <Icon key={icon} size={25} color={'#808080'} name={icon}/>)}
        </View>
        <View style={styles.inputField}>
          <TextInput
            ref={this.inputField}
            style={styles.input}
            placeholder={'Reply'}
            placeholderTextColor={'#A9A9A9'}
            autoCapitalize={'sentences'}
            onChangeText={this.onInputChange}
            multiline
          />
          <TouchableOpacity disabled={!text} onPress={this.sendMessage}>
            <Icon size={30} name={'send'} color={text ? '#3A73FE' : '#DCDDDF'}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

CommentBox.propTypes = {
  addMessage: PropTypes.func,
}

export default CommentBox
