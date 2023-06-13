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

  // If user sign in before, they continue to access Home Screen

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('Home');
      } else {
      }
    });

    return () => unsubscribe();
  }, []);

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleSignUpPress = () => {
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
        style={{height, width}}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <View style={styles.container}>
          <Image source={Logo} style={styles.logo} resizeMode="contain" />

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
            text={isLoading ? 'Loading...' : 'Sign In'}
            onPress={handleSubmit(handleSignInPressed)}
          />

          <CustomButton
            text="Forgot password?"
            onPress={handleForgotPassword}
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
            onPress={handleSignUpPress}
            type="TERTIARY"
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  logo: {
    height: 150,
    width: 150,
    marginBottom: 13,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  errorText: {
    color: 'red',
    marginVertical: 3,
    marginRight: '30%',
    width: '90%',
  },
  socialButtonContainer: {
    justifyContent: 'space-between',
    marginVertical: 10,
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
