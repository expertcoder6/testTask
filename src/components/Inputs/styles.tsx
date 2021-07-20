import { StyleSheet } from 'react-native';

/*-------- helper ----------*/
import { colors } from '../../utils/index';

/*--------  responsive ----------*/
import { getScaleSize, getFontStyle } from '../../utils/index';

/*--------  define your styles ----------*/
export default StyleSheet.create({
  textInputContainer: {
    marginVertical: getScaleSize(15)
  },
  inputTextContainer: {
    fontSize: getScaleSize(14),
    height: getScaleSize(40),
    color: 'white',
    paddingHorizontal: getScaleSize(15),
    width: '90%',
    alignSelf: 'center',
    backgroundColor: colors.inputBackground,
    borderRadius: getScaleSize(40),
    fontFamily: getFontStyle().normal.fontFamily
  },
  errorText:{
    color: colors.errorColor,
    fontSize: getScaleSize(12),
    marginLeft: getScaleSize(25)
  }
});
