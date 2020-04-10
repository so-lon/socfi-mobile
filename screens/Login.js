import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  Image,
  Linking,
  Alert,
  AsyncStorage
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import { ScrollView } from "react-native-gesture-handler";
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
import Expo from "expo";
import host from '../constants/host';
const { width, height } = Dimensions.get("screen");

class Login extends React.Component {
  state = {
    isLoading: false
  }

  _storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      // console.log(AsyncStorage.getItem('token'));
    } catch (error) {
      // Error saving data
    }
  };

  logInFacebook = async () => {
    this.setState({ isLoading: true });
    try {
      await Facebook.initializeAsync('480545299270145');
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile', 'email'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const responseFb = await fetch(`https://graph.facebook.com/me?fields=id,email,name&access_token=${token}`);
        // Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        console.log(await responseFb.json());
        fetch(host.api_url + "loginBySocial", {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: 'facebooklogin',
            name: responseFb.name,
            email: responseFb.email
          })
        })
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson);
            if (responseJson.message === 'success') {
              this._storeData('token', responseJson['token']);
              this._storeData('id', responseJson['id']);
              this.props.navigation.navigate('App');
            } else {
              console.log(responseJson);
              Alert.alert('Đăng kí', 'Đăng kí thất bại, vui lòng thử lại');
            }
          }).catch((error) => {
            console.log(error);
          });
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  logInGoogle = async () => {
    this.setState({ isLoading: true });
    try {
      const { type, accessToken, user } = await Google.logInAsync({
        androidClientId: "221974845316-v0tamam2i75661a90r3c1ksp41rrr5h0.apps.googleusercontent.com",
        //iosClientId: YOUR_CLIENT_ID_HERE,  <-- if you use iOS
        // scopes: ["profile", "email"]
      })
      if (type === "success") {
        console.log(user);
        fetch(host.api_url + "loginBySocial", {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: 'googlesignin',
            name: user.name,
            email: user.email
          })
        })
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson);
            if (responseJson.message === 'success') {
              this._storeData('token', responseJson['token']);
              this._storeData('id', responseJson['id']);
              this.props.navigation.navigate('App');
            } else {
              console.log(responseJson);
              Alert.alert('Đăng kí', 'Đăng kí thất bại, vui lòng thử lại');
            }
          }).catch((error) => {
            console.log(error);
          });
      } else {
        console.log("cancelled")
      }
    } catch (e) {
      console.log("error", e)
    }
  }

  handleLogin = async () => {
    this.setState({ isLoading: true });
    fetch(host.api_url + "login", {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson.message === 'success') {
          this._storeData('token', responseJson['token']);
          this._storeData('id', responseJson['id']);
          this.props.navigation.navigate('App');
        } else {
          console.log(responseJson);
          this.setState({isLoading: false})
          Alert.alert('Đăng nhập thất bại', 'Tài khoản hoặc mật khẩu không đúng');
        }
      }).catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { navigation } = this.props;
    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block flex middle>
            <Block style={styles.registerContainer}>
              <Block flex={0.25} middle style={styles.socialConnect}>
                <Text color="#8898AA" size={12}>
                  Đăng nhập bằng
                </Text>
                <Block row style={{ marginTop: theme.SIZES.BASE }}>
                  <Button
                    onPress={() => this.logInFacebook()}
                    style={{ ...styles.socialButtons, marginRight: 30 }}>
                    <Block row>
                      <Icon
                        name="logo-facebook"
                        family="Ionicon"
                        size={14}
                        color={"black"}
                        style={{ marginTop: 2, marginRight: 5 }}
                      />
                      <Text style={styles.socialTextButtons}>FACEBOOK</Text>
                    </Block>
                  </Button>
                  <Button
                    onPress={() => this.logInGoogle()}
                    style={styles.socialButtons}>
                    <Block row>
                      <Icon
                        name="logo-google"
                        family="Ionicon"
                        size={14}
                        color={"black"}
                        style={{ marginTop: 2, marginRight: 5 }}
                      />
                      <Text style={styles.socialTextButtons}>GOOGLE</Text>
                    </Block>
                  </Button>
                </Block>
              </Block>

              <Block flex style={{ marginTop: 50 }}>
                <ScrollView>
                  <Block flex={0.17} middle style={{ marginBottom: 30 }}>
                    <Text color="#8898AA" size={12}>
                      hoặc đăng nhập bằng tài khoản
                  </Text>
                    <Image source={Images.SocfiLogo} style={{ marginVertical: 10, height: 80, width: width - 200 }} />
                  </Block>
                  <Block flex center>
                    <KeyboardAvoidingView
                      style={{ flex: 1 }}
                      behavior="padding"
                      enabled
                    >
                      {/* <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Name"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block> */}
                      <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                        <Input
                          onChangeText={(username) => { this.setState({ username: username }) }}
                          borderless
                          placeholder="Tài khoản"
                          iconContent={
                            <Icon
                              size={16}
                              color={argonTheme.COLORS.ICON}
                              name="account-circle"
                              family="material_community"
                              style={styles.inputIcons}
                            />
                          }
                        />
                      </Block>
                      <Block width={width * 0.8}>
                        <Input
                          onChangeText={(password) => { this.setState({ password: password }) }}
                          password
                          borderless
                          placeholder="Mật khẩu"
                          iconContent={
                            <Icon
                              size={16}
                              color={argonTheme.COLORS.ICON}
                              name="padlock-unlocked"
                              family="ArgonExtra"
                              style={styles.inputIcons}
                            />
                          }
                        />
                        {/* <Block row style={styles.passwordCheck}>
                        <Text size={12} color={argonTheme.COLORS.MUTED}>
                          password strength:
                        </Text>
                        <Text bold size={12} color={argonTheme.COLORS.SUCCESS}>
                          {" "}
                          strong
                        </Text>
                      </Block> */}
                      </Block>
                      {/* <Block row width={width * 0.75}>
                      <Checkbox
                        checkboxStyle={{
                          borderWidth: 3
                        }}
                        color={argonTheme.COLORS.PRIMARY}
                        label="I agree with the"
                      />
                      <Button
                        style={{ width: 100 }}
                        color="transparent"
                        textStyle={{
                          color: argonTheme.COLORS.PRIMARY,
                          fontSize: 14
                        }}
                      >
                        Privacy Policy
                      </Button>
                    </Block> */}
                      <Block middle>
                        <Button color="primary" onPress={() => this.handleLogin()} style={styles.createButton}>
                          <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                            ĐĂNG NHẬP
                        </Text>
                        </Button>
                      </Block>
                      <Block row style={{ marginTop: theme.SIZES.BASE }}>
                        <Block row style={styles.passwordCheck}>
                          <Text size={12} color={argonTheme.COLORS.DEFAULT} onPress={() => navigation.navigate("Register")}>
                            Đăng Ký Tài Khoản
                        </Text>
                        </Block>
                        <Block row style={styles.passwordCheck}>
                          <Text size={12} color={argonTheme.COLORS.DEFAULT} onPress={() => navigation.navigate("ForgotPassword")}>
                            Quên Mật Khẩu
                        </Text>
                        </Block>
                      </Block>
                      {this.state.isLoading && <Block center>
                        <Image source={Images.loading} style={{ width: 50, height: 50 }}></Image>
                      </Block>}
                    </KeyboardAvoidingView>
                  </Block>
                </ScrollView>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.78,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    marginTop: 10,
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30,
    marginLeft: 25
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  }
});

export default Login;
