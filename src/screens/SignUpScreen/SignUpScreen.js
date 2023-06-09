import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useForm} from 'react-hook-form';
import auth from '@react-native-firebase/auth';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+\.com)$/;

const SignUpScreen = ({navigation}) => {
  auth()
    .createUserWithEmailAndPassword('balongbui2k@gmail.com', 'long290120')
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });

  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password');

  const handleRegister = () => {
    navigation.navigate('ConfirmEmail');
  };

  const handleSignInPress = () => {
    navigation.navigate('SignIn');
  };

  const handleTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };

  const handlePrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };

  const handleGoogleButtonPress = () => {
    console.warn('onGoogleButtonPress');
  };

  const handleFacebookButtonPress = () => {
    console.warn('onFacebookButtonPress');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          rules={{
            required: 'Email is required',
            pattern: {
              value: EMAIL_REGEX,
              message: 'Email is invalid',
            },
          }}
        />
        <CustomInput
          name="password"
          control={control}
          placeholder="Password"
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />
        <CustomInput
          name="password-repeat"
          control={control}
          placeholder="Repeat Password"
          secureTextEntry
          rules={{
            validate: value => value === pwd || 'Passwords do not match',
          }}
        />

        <CustomButton text="Register" onPress={handleSubmit(handleRegister)} />

        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={handleTermsOfUsePressed}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={handlePrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <View style={styles.socialButtonContainer}>
          <CustomButton
            text="Sign up with Google"
            onPress={handleGoogleButtonPress}
            type="PRIMARY"
          />
          <CustomButton
            text="Sign up with Facebook"
            onPress={handleFacebookButtonPress}
            type="PRIMARY"
          />
        </View>

        <CustomButton
          text="Have an account? Sign in"
          onPress={handleSignInPress}
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

export default SignUpScreen;
