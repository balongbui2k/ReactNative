import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useForm} from 'react-hook-form';
import {ROUTES} from './../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';
import CustomStatusBar from '../../constants/GeneralStyles';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const {control, handleSubmit} = useForm();

  const handleBackToSignIn = () => {
    navigation.navigate(ROUTES.SIGN_IN_SCREEN);
  };
  const handleVerificationScreen = () => {
    navigation.navigate(ROUTES.VERIFICATION_SCREEN);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <CustomStatusBar />
        <View>
          <Text style={styles.title}>Forgot password</Text>
        </View>
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
          onPress={handleSubmit(handleVerificationScreen)}
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
    fontSize: 23,
    fontWeight: '700',
    marginBottom: 16,
  },
});

export default ForgotPasswordScreen;
