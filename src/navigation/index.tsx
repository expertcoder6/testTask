import React from 'react';

/* ------------- container ------------- */
import { NavigationContainer } from '@react-navigation/native';

/*--------  redux ----------*/
import {connect} from 'react-redux';
import {ActionCreators} from '../actions';
import {bindActionCreators} from 'redux';

/* ------------- stack navigator ------------- */
import { HomeStack } from './StackNavigator';
import { AuthStack } from './AuthNavigator';

interface MainNavigatorProps { 
  loginSuccess?: any;
}

/* ------------- Navigator ------------- */
const MainNavigator = (props: MainNavigatorProps) => {
  return (
    <NavigationContainer>
      {
        !props.loginSuccess ?
          <AuthStack />
        :
          <HomeStack />
      }
    </NavigationContainer>
  )
}

/*-------- received  props ----------*/
const mapStateToProps = (state: any) => ({
  loginSuccess: state.authReducer.loginSuccess,
});

/*-------- send action ----------*/
const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

/*-------- export container  ----------*/
export default connect(mapStateToProps, mapDispatchToProps)(MainNavigator);



