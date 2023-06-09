import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  useWindowDimensions,
  Text,
  TextInput,
} from 'react-native';

import Logo from '../../assets/images/2khung.png';
import CustomButton from '../../components/CustomButton';
import {useForm} from 'react-hook-form';
import FastImage from 'react-native-fast-image';
import auth from '@react-native-firebase/auth';

const SignInScreen = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();

  const onSignInPressed = async () => {
    if (!email || !password) {
      setError('Email and password cannot be empty!');
      return;
    }

    try {
      // Assuming `auth` is imported and available in the scope
      await auth().signInWithEmailAndPassword(email, password);
      console.warn('User signed in!');
      navigation.navigate('Home');
    } catch (error) {
      if (error.code === 'auth/invalid-email') {
        setError('Invalid email address!');
      } else if (error.code === 'auth/user-disabled') {
        setError('Your account has been disabled!');
      } else if (error.code === 'auth/user-not-found') {
        setError('Email is not found');
      } else if (error.code === 'auth/wrong-password') {
        setError('Invalid email or password!');
      } else {
        console.error(error);
      }
    }
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  const handleGoogleButtonPress = () => {
    console.warn('onGoogleButtonPress');
  };

  const handleFacebookButtonPress = () => {
    console.warn('onFacebookButtonPress');
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

          <TextInput
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="Example@gmail.com"
            style={styles.input}
          />
          <TextInput
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder="Password"
            secureTextEntry
            style={styles.input}
          />

          {error !== '' && <Text style={styles.errorText}>*{error}</Text>}

          <CustomButton
            text="Sign In"
            onPress={handleSubmit(onSignInPressed)}
          />

          <CustomButton
            text="Forgot password?"
            onPress={onForgotPasswordPressed}
            type="TERTIARY"
          />

          <Text>Or you can sign in with</Text>

          <View style={styles.socialButtonContainer}>
            <CustomButton
              text="Sign up with Google"
              onPress={handleGoogleButtonPress}
            />
            <CustomButton
              text="Sign up with Facebook"
              onPress={handleFacebookButtonPress}
            />
          </View>

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
  errorText: {
    color: 'red',
    marginVertical: 3,
    marginRight: '30%',
    width: '70%',
  },
  socialButtonContainer: {
    width: 100,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  input: {
    backgroundColor: 'white',
    width: '100%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
});

export default SignInScreen;
