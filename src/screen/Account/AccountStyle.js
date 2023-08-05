import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
import {Color} from '../../utils/color';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: Color.purpul,
  },
  headingtxt: {
    color: Color.white,
    fontSize: 17,
    paddingTop: '1%',
  },
  flatlistcard: {
    alignSelf: 'center',
    borderRadius: 10,
    width: Dimensions.get('screen').width / 2.5,
    height: 100,
  },
  cardview: {
    alignSelf: 'center',

    //  width: Dimensions.get('screen').width - 10,
  },
  flatliststyle: {
    alignSelf: 'center',
  },
  avtarstyle: {
    alignSelf: 'center',
  },
  txtcard: {
    textAlign: 'center',
    color: Color.black,
  },
  topcard: {
    borderRadius: 10,
    marginTop: '1%',
  },
  topcardtxt: {
    textAlign: 'center',
    fontSize: 18,
    color: Color.purpul,
  },
  welcometxtx: {
    paddingLeft: '5%',
    color: Color.black,
  },
  title: {
    paddingLeft: '2%',
    color: Color.purpul,
  },
});
