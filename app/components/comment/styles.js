import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  commentWrapper: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  contents: {
    flexDirection: 'column',
    marginLeft: 5,
    marginTop: 7,
  },
  message: {
    color: '#404040',
  },
  nameWrapper: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  time: {
    color: '#808080',
  },
  userImage: {
    height: 50,
    width: 50,
  },
  username: {
    fontWeight: 'bold',
    marginRight: 5,
  },
})

export default styles
