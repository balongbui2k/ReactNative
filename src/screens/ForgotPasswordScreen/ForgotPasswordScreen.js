import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useForm} from 'react-hook-form';
import {ROUTES} from './../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const {control, handleSubmit} = useForm();

  const handleBackToSignIn = () => {
    navigation.navigate(ROUTES.SIGN_IN_SCREEN);
  };
  const handleNewPassWordScreen = () => {
    navigation.navigate(ROUTES.NEW_PASSWORD_SCREEN);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          rules={{
            required: 'Email is required',
            pattern: {
              value: EMAIL_REGEX,
              message: 'Email is invalid ',
            },
          }}
        />

        <CustomButton
          text="Send"
          onPress={handleSubmit(handleNewPassWordScreen)}
        />

        <CustomButton
          text="Back to Sign in screen"
          onPress={handleBackToSignIn}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default ForgotPasswordScreen;
