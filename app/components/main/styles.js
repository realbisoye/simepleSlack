import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  commentsContainer: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'column',
    height: '100%',
  },
  main: {
    backgroundColor: '#3F0F3F',
    flex: 1,
    flexDirection: 'column',
  },
  memberName: {
    marginLeft: 10,
  },
  memberNameSection: {
    backgroundColor: '#DFDFDF',
    borderBottomWidth: 0.2,
    borderColor: '#808080',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    width: '100%',
    zIndex: 1000,
  },
  memberNameWrapper: {
    flexDirection: 'row',
  },
  texts: {
    fontSize: 30,
    fontWeight: 'bold',
    zIndex: 1000,
  },
})

export default styles
