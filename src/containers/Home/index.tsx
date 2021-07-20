import React, { useEffect } from 'react'
import { View, Text, Image } from 'react-native';

/*---------- config ------------*/
import globalStyle from '../../config/globalStyle'
import styles from './styles';

/*-------- Interfaces ----------*/
import { HomeProps } from '../../Interfaces/containers';

/*--------  redux ----------*/
import {connect} from 'react-redux';
import {ActionCreators} from '../../actions';
import {bindActionCreators} from 'redux';

/*---------- components ------------*/
import Button from '../../components/Button';

/*---------- helper ------------*/
import { appString } from '../../utils/contants';
import { ScrollView } from 'react-native-gesture-handler';

/*---------- Assets ------------*/
import DummyImage from '../../assets/icons/Property.jpeg';

const Home = ({
  navigation,
  props,
  logoutSuccess,
  actions
}: HomeProps) => {

  useEffect(() => {
    if(logoutSuccess){
      navigation.navigate('Login')
    }
  }, [logoutSuccess]);

  const onLogOut = () => {
    actions.logoutApi('logout');
  }

  return (
    <View style={globalStyle.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
      >
        <Text style={styles.mainTitle}>{appString.home}</Text>
        <View style={styles.imageView}>
          <Image
            source={DummyImage}
            style={styles.image}
          />
        </View>
        <View style={styles.buttonView}>
          <Button
            text={appString.logout}
            onClick={onLogOut}
          />
        </View>
      </ScrollView>
    </View>
  )
}

/*-------- received  props ----------*/
const mapStateToProps = (state: any) => ({
  logoutSuccess: state.authReducer.logoutSuccess,
});

/*-------- send action ----------*/
const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

/*-------- export container  ----------*/
export default connect(mapStateToProps, mapDispatchToProps)(Home);
