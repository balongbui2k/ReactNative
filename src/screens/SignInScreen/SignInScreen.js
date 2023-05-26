import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import Logo from '../../assets/images/2khung.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import FastImage from 'react-native-fast-image';

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSignInPressed = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      navigation.navigate('Home');
    } catch (error) {
      console.error('Loi con me no roi');
    }
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={0}
        style={styles.container}>
        <View style={styles.root}>
          <FastImage
            source={Logo}
            style={[styles.logo, {height: height * 0.3}]}
            resizeMode="contain"
          />

          <CustomInput
            name="username"
            placeholder="Username"
            control={control}
            rules={{required: 'Username is required'}}
          />

          <CustomInput
            name="password"
            placeholder="Password"
            secureTextEntry
            control={control}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password should be minimum 8 characters long',
              },
            }}
          />

          <CustomButton
            text="Sign In"
            onPress={handleSubmit(onSignInPressed)}
          />

          <CustomButton
            text="Forgot password?"
            onPress={onForgotPasswordPressed}
            type="TERTIARY"
          />

          <CustomButton
            text="Don't have an account? Create one"
            onPress={onSignUpPress}
            type="TERTIARY"
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    height: '40%',
    maxWidth: 300,
    maxHeight: 200,
    marginBottom: 13,
    marginLeft: 30,
  },
});

export default SignInScreen;
