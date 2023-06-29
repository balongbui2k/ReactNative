import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {useForm} from 'react-hook-form';
import auth from '@react-native-firebase/auth';
import CustomInput from './../../components/CustomInput/CustomInput';
import CustomButton from './../../components/CustomButton/CustomButton';
import {signUpErrors, signInErrors} from './../../constants/Validate';

const EMAIL_REGEX = /@gmail\.com$/;

const SignUpScreen = ({navigation}) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();
  const [error, setError] = useState('');

  const pwd = watch('password');

  const handleRegister = async ({email, password}) => {
    if (!email || !password) {
      setError('Email and password cannot be empty!');
      return;
    }

    try {
      await auth().createUserWithEmailAndPassword(email, password);
      console.warn('User account created & signed in!');
      navigation.navigate('SignIn');
    } catch (error) {
      setError(signUpErrors[error.code]);

      setTimeout(() => {
        setError('');
      }, 2000);
    }
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
              message: 'Email is invalid ',
            },
          }}
        />

        {error !== '' && <Text style={styles.errorText}>{error}</Text>}

        <CustomInput
          name="password"
          control={control}
          placeholder="Password"
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password should be at least 6 characters long',
            },
          }}
        />

        <CustomInput
          name="repeatPassword"
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
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    marginVertical: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  socialButtonContainer: {
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  errorText: {
    color: 'red',
    marginVertical: 4,
  },
});

export default SignUpScreen;
