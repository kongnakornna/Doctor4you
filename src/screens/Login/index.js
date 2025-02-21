import {
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image
} from 'react-native';
import React, { useRef, useState } from 'react';
import { SvgXml } from 'react-native-svg';
import styles from './style';
import Loginlogo from '../../assets/Images/SVG/Loginlogo';
import Background from '../../assets/Images/Temp/background_image.png';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';
import EMAIL_ICON from '../../assets/Images/Temp/email.png';
import PASSWORD_ICON from '../../assets/Images/Temp/password.png';
import ButtonDy from '../../common/Components/ButtonDy';
import TextField from '../../common/Components/TextField';
import { ErrorMessage, Formik } from 'formik';
import { CommonActions } from '@react-navigation/native';
import { loginValues } from '../../utils/formixInitials';
import { LoginSchema } from '../../utils/validationSchema';
import ErrorTextDY from '../../common/Components/ErrorTextDY';
// import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Horizontalline from './Components/Horizontalline';
import Facebook from '../../assets/Images/SVG/Facebook';
import GOOGLE_ICON from '../../assets/Images/Temp/Google_Icon.png'


const Login = ({ navigation }) => {

  const passwordRef = useRef(null);
  const windowHeight = Dimensions.get('window').height;




  return (
    <SafeAreaView style={styles.safeContainer}>
      <KeyboardAwareView animated={true}>
        <ImageBackground
          source={Background}
          resizeMode="stretch"
          style={styles.imagebackgroundstyle}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {/* logo image */}
            <View style={{ alignSelf: "center", top: windowHeight / 4.5 }}>
              <Loginlogo />
            </View>
            {/* hightview */}
            <View style={{ height: windowHeight / 4 }} />

            {/* login text */}
            <Text style={styles.logintext}>Welcome to</Text>
            <Text style={styles.doctortext}>Doctor4you</Text>

            <View style={styles.container}>
              <Formik
                initialValues={loginValues}
                validationSchema={LoginSchema}
              // onSubmit={__onLoginPress}
              >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                  <>
                    {/* Number validation parts */}
                    <TextField
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      placeholder={'Email'}
                      keyboardType={"email-address"}
                      mainplaceholder={"johndoe@gmail.com"}
                      autoCapitalize="none"
                      iconPath={EMAIL_ICON}
                      returnKeyType={"next"}
                      onSubmitEditing={() => passwordRef.current.focus()}
                    />

                    <ErrorMessage
                      render={msg => <ErrorTextDY title={msg} />}
                      name="email"
                    />
                    <View height={20} />
                    {/* password validation parts */}
                    <TextField
                      ref={passwordRef}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      mainplaceholder={"Enter password"}
                      value={values.password}
                      iconPath={PASSWORD_ICON}
                      placeholder={'Password'}
                      isPassword
                      isvisible
                    />
                    <ErrorMessage
                      render={msg => <ErrorTextDY title={msg} />}
                      name="password"
                    />

                    {/* forgot password text */}
                    <Text
                      onPress={() => navigation.navigate("Forgotpassword")}
                      style={styles.forgorText}
                    >
                      {'ForgotPassword ?'}
                    </Text>

                    <ButtonDy
                      onPress={() => navigation.navigate("HomeTab")}
                      title={'Sign In'}
                      style={styles.button}
                      textStyle={styles.buttontext}
                    // processing={signinProcess}
                    />

                    <Horizontalline />
                    <View style={styles.googleview}>
                      <Image
                        source={GOOGLE_ICON}
                        style={{ height: 50, width: 50 }}
                        resizeMode="contain"
                      />
                      <View width={30} />
                      <Facebook />
                    </View>
                    <View height={20} />

                    <Text style={styles.dontHaveText}>
                      {'Don’t have an account?'}
                      {`  `}
                      <Text style={styles.signup}
                        onPress={() => navigation.navigate('Signup')}
                      >
                        {'Create New'}
                      </Text>
                    </Text>

                  </>
                )}
              </Formik>
            </View>

          </ScrollView>
        </ImageBackground>
      </KeyboardAwareView>
    </SafeAreaView>
  );
};

export default Login;

