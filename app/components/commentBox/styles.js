import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  commentWrapper: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#DCDDDF',
    borderTopWidth: 0.5,
    bottom: 0,
    flex: 1,
    flexDirection: 'column',
    maxHeight: 100,
    padding: 10,
    width: '100%',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
    width: '100%',
  },
  input: {
    flex: 1,
    maxHeight: 120,
  },
  inputField: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    width: '100%',
  },
})

export default styles
