import React, {useRef, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import CountryCode from '../../constants/CountryCode';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from './../../constants/routeNames';
import CustomStatusBar from '../../constants/GeneralStyles';
import styles from '../NewPasswordScreen/styles';
const VerificationScreen = () => {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: ''});

  const handleInputChange = (text, index) => {
    const inputRefs = [firstInput, secondInput, thirdInput, fourthInput];
    const nextIndex = text ? Math.min(index + 1, 4) : Math.max(index - 1, 1);
    inputRefs[nextIndex - 1].current.focus();
    setOtp({...otp, [index]: text});
  };

  const navigation = useNavigation();

  const onVerifyPressed = () => {
    navigation.navigate(ROUTES.NEW_PASSWORD_SCREEN);
  };

  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>OTP Verification</Text>
      </View>
      <Text style={styles.title}>Verification</Text>
      <Text style={styles.content}>
        Enter the OTP number just sent to you at{' '}
        <Text style={styles.phoneNumberText}>{CountryCode.dial_code}</Text>
      </Text>
      <View style={styles.otpContainer}>
        {[firstInput, secondInput, thirdInput, fourthInput].map(
          (inputRef, index) => (
            <View key={index} style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                ref={inputRef}
                onChangeText={text => handleInputChange(text, index + 1)}
              />
            </View>
          ),
        )}
      </View>
      <TouchableOpacity style={styles.verifyButton} onPress={onVerifyPressed}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>
      <View style={styles.resendCodeContainer}>
        <Text>Didn't received SMS? </Text>
        <TouchableOpacity>
          <Text style={styles.resendCodeText}>Resend code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerificationScreen;
