import { StyleSheet } from 'react-native';

/*-------- helper ----------*/
import { getScaleSize, getFontStyle, ScreenHeight, ScreenWidth, colors } from '../../utils/index';

/*--------  define your styles ----------*/
export default StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: colors.primary
  },
  mainView:{
    flex: 1,
    justifyContent: 'center'
  }
});
