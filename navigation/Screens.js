import React from "react";
import { Easing, Animated, Dimensions } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Block } from "galio-framework";

// screens
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import Pro from "../screens/Pro";
import Profile from "../screens/Profile";
import Register from "../screens/Register";
import Login from "../screens/Login";
import ForgotPassword from "../screens/ForgotPassword";
import Elements from "../screens/Elements";
import Articles from "../screens/Articles";
import Stadium from '../screens/Stadium';
import Booking from '../screens/Booking';
import BookingHistory from '../screens/BookingHistory';
import BookingDetail from '../screens/BookingDetail';
import NearbyStadium from '../screens/NearbyStadium';
import News from '../screens/News';
import Reason from '../screens/Reason';
import Feedback from '../screens/Feedback';
import Code from '../screens/Code';
// drawer
import CustomDrawerContent from "./Menu";

// header for screens
import { Icon, Header } from "../components";
import { argonTheme, tabs } from "../constants";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function ElementsStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Elements"
        component={Elements}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Elements" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function ArticlesStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Articles" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack(props) {
  return (
    <Stack.Navigator initialRouteName="Profile" mode="card" headerMode="screen">
      <Stack.Screen
        name="THÔNG TIN CÁ NHÂN"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title="THÔNG TIN CÁ NHÂN"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="TRANG CHỦ"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="TRANG CHỦ"
              search
              placeholder="Nhập tên sân hoặc khu vực muốn tìm kiếm"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="Stadium"
        component={Stadium}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="CHI TIẾT SÂN BÓNG"
              back
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="Booking"
        component={Booking}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="ĐẶT SÂN"
              back
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="NearbyStadium"
        component={NearbyStadium}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="TÌM XUNG QUANH"
              back
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="Code"
        component={Code}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="COVID19 99% Off | 15h - 17h"
              back
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function NewsStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="KHUYẾN MÃI"
        component={News}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="KHUYẾN MÃI"
              // search
              // options
              // optionLeft="SAN BONG"
              // optionRight="TIN TUC"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      
    </Stack.Navigator>
  );
}

function BookingHistoryStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="THÔNG TIN ĐẶT SÂN"
        component={BookingHistory}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="THÔNG TIN ĐẶT SÂN"
              // search
              // options
              // optionLeft="SAN BONG"
              // optionRight="TIN TUC"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="LÝ DO"
        component={Reason}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="HUỶ LỊCH"
              // search
              // options
              // optionLeft="SAN BONG"
              // optionRight="TIN TUC"
              back
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="ĐÁNH GIÁ"
        component={Feedback}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="ĐÁNH GIÁ"
              // search
              // options
              // optionLeft="SAN BONG"
              // optionRight="TIN TUC"
              back
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="BookingDetail"
        component={BookingDetail}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="CHI TIẾT ĐẶT SÂN"
              back
              // options
              // optionLeft="SAN BONG"
              // optionRight="TIN TUC"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Login"
        component={Login}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8
      }}
      drawerContentOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden"
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal"
        }
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="TRANG CHỦ" component={HomeStack} />
      <Drawer.Screen name="KHUYẾN MÃI" component={NewsStack} />
      <Drawer.Screen name="THÔNG TIN ĐẶT SÂN" component={BookingHistoryStack} />
      <Drawer.Screen name="THÔNG TIN CÁ NHÂN" component={ProfileStack} />
      {/* <Drawer.Screen name="Account" component={Register} /> */}
      <Drawer.Screen name="Elements" component={ElementsStack} />
      <Drawer.Screen name="Articles" component={ArticlesStack} />
    </Drawer.Navigator>
  );
}

