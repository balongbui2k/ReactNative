import {StyleSheet} from 'react-native';
import {FONTS} from './../../constants/Fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 20 * 1.4,
    width: 200,
    marginHorizontal: 100,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 20 * 1.4,
    marginVertical: 20,
    marginHorizontal: 20,
    color: '#199',
  },
  content: {
    fontSize: 16,
    fontFamily: FONTS.POPPINS_MEDIUM,
    marginBottom: 30,
    marginHorizontal: 20,
  },
  phoneNumberText: {
    fontSize: 18,
    fontFamily: FONTS.POPPINS_REGULAR,
    lineHeight: 18 * 1.4,
    color: 'orange',
  },
  otpContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  otpBox: {
    width: 50,
    height: 50,
    borderRadius: 5,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpText: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    padding: 0,
  },
  verifyButton: {
    backgroundColor: '#fb4',
    borderRadius: 8,
    marginHorizontal: 20,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  verifyButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: 'white',
    fontFamily: FONTS.POPPINS_MEDIUM,
  },
  //
  resendCodeContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginHorizontal: 20,
  },
  resendCodeText: {
    color: 'orange',
  },
});
export default styles;
