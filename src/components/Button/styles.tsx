import { StyleSheet } from 'react-native';

/*-------- helper ----------*/
import { colors } from '../../utils/index';

/*--------  responsive ----------*/
import { getScaleSize, getFontStyle } from '../../utils/index';

/*--------  define your styles ----------*/
export default StyleSheet.create({
  container: {
    height: getScaleSize(50),
    width: '90%',
    alignSelf: 'center',
    backgroundColor: colors.white,
    justifyContent: 'center',
    borderRadius: getScaleSize(25)
  },
  text:{
    color: colors.primary,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: getScaleSize(16)
  }
});
