import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  appBar: {
    alignItems: 'center',
    backgroundColor: '#3F0F3F',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxHeight: '6%',
    paddingBottom: 10,
    paddingHorizontal: 10,
    top: 0,
    width: '100%',
  },
  appBarTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 10,
    zIndex: 1000,
  },
  icons: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo: {
    height: 30,
    width: 30,
  },
  orgDetails: {
    alignItems: 'center',
    flexDirection: 'row',
  },
})

export default styles
