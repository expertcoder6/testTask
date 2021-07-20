import React, {useState, useEffect} from 'react'
import { View } from 'react-native';

/*--------  redux ----------*/
import {connect} from 'react-redux';
import {ActionCreators} from '../../actions';
import {bindActionCreators} from 'redux';

/*-------- library ----------*/
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

/*---------- style ------------*/
import styles from './styles';

/*---------- components ------------*/
import TextInput from '../../components/Inputs';
import Button from '../../components/Button';

/*-------- Interfaces ----------*/
import { LoginProps } from '../../Interfaces/containers';

/*---------- helper ------------*/
import { appString } from '../../utils/contants';
import { emailValidation, InputValidation } from '../../helper/validation';

const Login = ({
  props,
  navigation,
  loginSuccess,
  actions
}: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMsg, sePasswordErrorMsg] = useState('');

  useEffect(() => {
    if(loginSuccess){
      navigation.navigate('Home')
    }
  }, [loginSuccess]);

  const onChangeEmail = (value: any) => {
    setEmail(value);
    setEmailError(false);
    setPasswordError(false);
  }

  const onChangePassword = (value: any) => {
    setPassword(value);
  }

  const onLogin = async () =>{
    let valid = await handleValidation();
    if(valid){
      const data = {
        email: email,
        password: password
      }
      actions.loginApi(data);
    }
  }

  const handleValidation = () => {
    let errorEmail = null;
    let errorPassword = null;
    let isValid: boolean = true;

    errorEmail = emailValidation(email);
    if (!errorEmail.emailValid) {
      setEmailError(true)
      setEmailErrorMsg(errorEmail.errorMessage)
      isValid = false;
    }

    errorPassword = InputValidation(password);
    if (!errorPassword.passwordValid) {
      setPasswordError(true)
      sePasswordErrorMsg(errorPassword.errorMessage)
      isValid = false
    }
    
    return isValid;
  };

  return (
    <View style={styles.containerView}>
      <KeyboardAwareScrollView
        bounces={false}
        scrollEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.mainView}>
          <TextInput
            onChangeText={(text) => onChangeEmail(text)}
            placeholder={appString.email_placeholder}
            value={email}
            error={emailError}
            errorMessage={emailErrorMsg}
          />
          <TextInput
            onChangeText={(text) => onChangePassword(text)}
            placeholder={appString.password_placeholder}
            value={password}
            secureEntry={true}
            error={passwordError}
            errorMessage={passwordErrorMsg}
          />
          <View style={{height: 30}}/>
          <Button
            text={appString.login}
            onClick={onLogin}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);
