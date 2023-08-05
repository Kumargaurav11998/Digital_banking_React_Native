import {StyleSheet} from 'react-native';
import {Color} from '../utils/color';

export const IndexStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  row_justify: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  padTop: {paddingTop: '2%'},
  flexrow: {
    flexDirection: 'row',
  },
  margin5: {
    marginTop: '5%',
  },
});
