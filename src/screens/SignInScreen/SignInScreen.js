import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  useWindowDimensions,
  Text,
  TextInput,
  Image,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import Logo from '../../assets/images/2khung.png';
import {useForm} from 'react-hook-form';
import auth from '@react-native-firebase/auth';
import {signInErrors} from './../../constants/Validate';
import CustomButton from './../../components/CustomButton/CustomButton';
import {ROUTES} from './../../constants/routeNames';

const SignInScreen = ({navigation}) => {
  const {
    handleSubmit,
    formState: {errors},
  } = useForm();

  const {height} = useWindowDimensions();

  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignInPressed = async () => {
    if (!email || !password) {
      setError('Email and password cannot be empty!');
      setTimeout(() => {
        setError('');
      }, 2000);
      return;
    }
    setIsLoading(true);
    try {
      await auth().signInWithEmailAndPassword(email, password);
      ToastAndroid.show('Welcome Home', ToastAndroid.CENTER, ToastAndroid.LONG);
    } catch (error) {
      setError(signInErrors[error.code] || 'Unknown error occurred');
      setTimeout(() => {
        setError('');
      }, 2000);
    }
    setIsLoading(false);
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate(ROUTES.FORGOT_PASSWORD_SCREEN);
  };

  const onSignUpPress = () => {
    navigation.navigate(ROUTES.SIGN_UP_SCREEN);
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
        style={{height}}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <View style={styles.container}>
          <Image source={Logo} style={styles.logo} resizeMode="contain" />

          <TextInput
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="Example@gmail.com"
            style={styles.input}
            editable={!isLoading}
          />
          <TextInput
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            editable={!isLoading}
          />

          {error !== '' && <Text style={styles.errorText}>{error}</Text>}

          <View>
            <CustomButton
              text={isLoading ? 'Loading...' : 'Sign In'}
              onPress={handleSubmit(handleSignInPressed)}
              disabled={isLoading}
            />
            {isLoading && (
              <View style={styles.loadingOverlay}>
                <ActivityIndicator size={30} color="white" />
              </View>
            )}
          </View>

          <CustomButton
            text="Forgot password?"
            onPress={onForgotPasswordPressed}
            type="TERTIARY"
            disabled={isLoading}
          />

          <Text style={{marginLeft: 90, paddingBottom: 8}}>
            ----Or you can sign in with----
          </Text>

          <View>
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
            text="Don't have an account? Create one"
            onPress={onSignUpPress}
            type="TERTIARY"
            disabled={isLoading}
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
  loadingOverlay: {
    position: 'absolute',
    marginLeft: '90%',
    marginVertical: 16,
    zIndex: 1,
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
