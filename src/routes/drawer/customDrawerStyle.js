import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import {Color} from '../../utils/color';

export const styles = StyleSheet.create({
  usernametxt: {
    fontSize: 25,
    color: Color.black,
    textAlign: 'center',
    color: Color.white,
  },
  constner: {
    backgroundColor: Color.purpul,
  },
  iconimage: {
    width: 25,
    height: 25,
  },
  textstyle: {
    color: Color.white,
    paddingLeft: '5%',
    fontSize: 20,
  },
  versionstyle: {
    backgroundColor: Color.appbackgroundcolor,
  },
  versiontextstyle: {
    color: Color.silver,
    textAlign: 'center',
  },
  iconimageView: {
    borderColor: Color.white,
    borderWidth: 0.5,
    borderRadius: 100 / 2,
    padding: 1,
  },
  profileimage: {
    width: 50,
    height: 50,
  },
});
