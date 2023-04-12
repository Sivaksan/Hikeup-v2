import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { HomeTab, MessagesList, Profile, Arriving, ChooseTrip } from '../screens';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconZ from 'react-native-vector-icons/AntDesign';
import IconE from 'react-native-vector-icons/EvilIcons';
import IconT from 'react-native-vector-icons/MaterialIcons';
import IconG from 'react-native-vector-icons/Entypo';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { Style } from '../styles';
import { ColorPicker, CustomSidebarMenu } from '../components';
import RouteName from '../routes/RouteName';
import { Colors, SH, SF } from '../utils';
import { useTranslation } from "react-i18next";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerSidebarScreen(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>
      <CustomSidebarMenu {...props} />
    </DrawerContentScrollView>
  );
}
function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="HomeScsreenTabAll" drawerContent={props => <DrawerSidebarScreen {...props} />}>
      <Drawer.Screen name="HomeScsreenTabAll"
        options={{ headerShown: false }}
        component={HomeScsreenTabAll} />
    </Drawer.Navigator>
  );
}
function Root() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Drawer"
        component={MyDrawer}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen name="Homese" component={HomeScsreenTabAll}
        options={{
          title: '',
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}
export default Root;

function HomeTabScreenStack({ navigation }) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="HomeTab">
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          title: t("Home_Text"), headerShown: true,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: SF(20),
            color: Colors.theme_background_topaz,
          },
          headerStyle: {
            backgroundColor: Colors.bgWhite,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerLeft: () => (
            <View style={Style.flexrowsetaddresh}>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <IconE style={Style.setbariconmarginright} name="navicon" color={Colors.theme_background_topaz} size={SF(35)} />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <ColorPicker />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function MessagesListTabStack({ navigation }) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="MessagesList">
      <Stack.Screen
        name="MessagesList"
        component={MessagesList}
        options={{
          title: t("Messages"), headerShown: true,
          headerShadowVisible: false,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize:SF(20),
            color: Colors.theme_background_topaz,
          },
          headerStyle: {
            backgroundColor: Colors.white_text_color,
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <IconE style={Style.setbariconmarginright} name="navicon" color={Colors.theme_background_topaz} size={SF(35)} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <ColorPicker />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function ArrivingTabStack({ navigation }) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="Arriving">
      <Stack.Screen
        name="Arriving"
        component={Arriving}
        options={{
          title: t("Arriving_Label"), headerShown: true,
          headerShadowVisible: false,
          headerTitleStyle: {
            color: Colors.theme_background_topaz,
            fontWeight: '700',
          },
          headerStyle: {
            backgroundColor: Colors.white_text_color,
          },
          headerLeft: () => (
            <View style={Style.flexrowsetaddresh}>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <IconE style={Style.setbariconmarginright} name="navicon" color={Colors.theme_background_topaz} size={SF(35)} />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <ColorPicker />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function ChooseTripTabStack({ navigation }) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="ChooseTrip">
      <Stack.Screen
        name="ChooseTrip"
        component={ChooseTrip}
        options={{
          title: t("Choose_A_Trip"), headerShown: true,
          headerShadowVisible: false,
          headerTitleStyle: {
            color: Colors.theme_background_topaz,
            fontWeight: '700',
          },
          headerStyle: {
            backgroundColor: Colors.white_text_color,
          },
          headerLeft: () => (
            <View style={Style.flexrowsetaddresh}>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <IconE style={Style.setbariconmarginright} name="navicon" color={Colors.theme_background_topaz} size={SF(35)} />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <ColorPicker />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileScreenStack({ navigation }) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: t("Profile_Text"), headerShown: true,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: SF(20),
            color: Colors.theme_background_topaz,
          },
          headerStyle: {
            backgroundColor: Colors.white_text_color,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <IconE style={Style.setbariconmarginright} name="navicon" color={Colors.theme_background_topaz} size={SF(35)} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
export function HomeScsreenTabAll() {
  const { t } = useTranslation();
  return (
    <Tab.Navigator initialRouteName="Homes"
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        activeTintColor: Colors.theme_background_topaz,
        inactiveTintColor: Colors.gray_text_color,
        activeBackgroundColor: Colors.white_text_color,
        labeled: true,
        labelStyle: {
        },
        tabStyle: {
          height: SH(49),
          backgroundColor: Colors.white_text_color,
          paddingTop: 0,
        },
      }}
    >
      <Tab.Screen
        name={RouteName.HOME_TAB}
        component={HomeTabScreenStack}
        options={{
          tabBarLabel: t("Home_Text"),
          tabBarIcon: ({ focused }) => (
            <Icon
              size={SF(19)}
              name="home"
              style={{ color: focused ? Colors.theme_background_topaz : Colors.gray_text_color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.MESSAGE_TAB}
        component={MessagesListTabStack}
        options={{
          tabBarLabel: t("Messages"),
          tabBarIcon: ({ focused }) => (
            <View>
              <IconG name="message" style={{ color: focused ? Colors.theme_background_topaz : Colors.gray_text_color }} size={SF(27)} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.ARRIVING}
        component={ArrivingTabStack}
        options={{
          tabBarLabel: t("Arriving_Label"),
          tabBarIcon: ({ focused }) => (
            <IconZ
              size={SF(23)}
              name="areachart"
              style={{ color: focused ? Colors.theme_background_topaz : Colors.gray_text_color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.CHOOSE_TRIP}
        component={ChooseTripTabStack}
        options={{
          tabBarLabel: t("Choose_A_Trip"),
          tabBarIcon: ({ focused }) => (
            <IconT
              size={SF(23)}
              name="trip-origin"
              style={{ color: focused ? Colors.theme_background_topaz : Colors.gray_text_color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.PROFILE_TAB}
        component={ProfileScreenStack}
        options={{
          tabBarLabel: t("Profile_Text"),
          tabBarIcon: ({ focused }) => (
            <IconF
              size={SF(19)}
              name="user-circle"
              style={{ color: focused ? Colors.theme_background_topaz : Colors.gray_text_color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
