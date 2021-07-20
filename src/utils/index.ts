import { Dimensions } from 'react-native';

/* ------------- Dimensions ------------- */
const ScreenHeight = Math.round(Dimensions.get('window').height);
const ScreenWidth = Math.round(Dimensions.get('window').width);

const colors = {
  primary: '#4A064B',
  white: '#FFFFFF',
  inputBackground: 'rgba(255, 255, 255, 0.19)',
  lightGray: '#949494',
  errorColor: '#e82020'
};


/*--------- responsive  ------------*/
const scalingFactor = Math.min(ScreenWidth, ScreenHeight) / 375;

const getScaleSize = (multi: number) =>
  multi ? scalingFactor * multi : scalingFactor;

/*--------- fontfamily  ------------*/
const getFontStyle = (langauge?: string) => ({
  bold: {
    fontFamily: 'Montserrat-Bold',
  },
  semibold: {
    fontFamily: 'Montserrat-SemiBold',
  },
  medium: {
    fontFamily: 'Montserrat-Medium',
  },
  normal: {
    fontFamily: 'Montserrat-Regular',
  },
});

/*-------- all exports  --------*/
export { ScreenHeight, ScreenWidth, colors, getFontStyle, getScaleSize };
