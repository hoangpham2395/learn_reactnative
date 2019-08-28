/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator} from 'react-navigation';
import HelloWord from "./Demo/HelloWord";
import Bananas from "./Demo/Props/Bananas";
import LotsOfGreeting from "./Demo/Props/LotsOfGreeting";
import BlinkApp from "./Demo/State/BlinkApp";
import LotsOfStyles from "./Demo/Style/LotsOfStyle";
import FixedDimensionsBasic from "./Demo/HeightAndWidth/FixedDimensionsBasic";
import FlexDimensionsBasic from "./Demo/HeightAndWidth/FlexDimensionsBasic";
import FlexDirectionBasic from "./Demo/LayoutWithFlexbox/FlexDirectionBasic";
import JustifyContentBasic from "./Demo/LayoutWithFlexbox/JustifyContentBasic";
import AlignItemsBasic from "./Demo/LayoutWithFlexbox/AlignItemsBasic";
import AlignSelfBasic from "./Demo/LayoutWithFlexbox/AlignSelfBasic";
import PositionBasic from "./Demo/LayoutWithFlexbox/PositionBasic";
import PizzaTranslator from "./Demo/HandlingInputText/PizzaTranslator";
import ButtonBasic from "./Demo/HandlingTouches/ButtonBasic";
import TouchablesBasic from "./Demo/HandlingTouches/TouchablesBasic";
import ScrolledDown from "./Demo/UsingAScrollView/ScrolledDown";
import FlatListBasic from "./Demo/UsingListViews/FlatListBasic";
import FetchExample from "./Demo/Networking/FetchExample";
import WebSocketExample from "./Demo/Networking/WebSocketExample";
import LoginScreen from "./Demo/Demo/Login/LoginScreen";
import ProfileScreen from "./Demo/Demo/User/ProfileScreen";
import AuthLoadingScreen from "./Demo/Demo/Login/AuthLoadingScreen";
import ShopsScreen from "./Demo/Demo/User/ShopsScreen";
import ShopDetailScreen from "./Demo/Demo/User/ShopDetailScreen";
import EditUserScreen from "./Demo/Demo/User/EditUserScreen";
import Icon from 'react-native-vector-icons/FontAwesome5';
import ListBannersScreen from "./Demo/Demo/Banners/ListBannersScreen";
import SettingScreen from "./Demo/Demo/Settings/SettingScreen";
import PushNotificationScreen from "./Demo/Demo/Settings/PushNotificationScreen";
import SendMailScreen from "./Demo/Demo/Settings/SendMailScreen";

// const App = () => {
//   return (
//     <Fragment>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Hello word! Hello HoangPH!</Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </Fragment>
//   );
// };
//
// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

const MainNavigation = createStackNavigator({
  // HelloWord: {screen: HelloWord},
  // Bananas: {screen: Bananas},
  // LotsOfGreeting: {screen: LotsOfGreeting},
  // BlinkApp: {screen: BlinkApp},
  // LotsOfStyles: {screen: LotsOfStyles},
  // FixedDimensionsBasic: {screen: FixedDimensionsBasic},
  // FlexDimensionsBasic: {screen: FlexDimensionsBasic},
  // FlexDirectionBasic: {screen: FlexDirectionBasic},
  // JustifyContentBasic: {screen: JustifyContentBasic},
  // AlignItemsBasic: {screen: AlignItemsBasic},
  // AlignSelfBasic: {screen: AlignSelfBasic},
  // PizzaTranslator: {screen: PizzaTranslator},
  // ButtonBasic: {screen: ButtonBasic},
  // TouchablesBasic: {screen: TouchablesBasic},

  // ScrolledDown: {screen: ScrolledDown},
  // FlatListBasic: {screen: FlatListBasic},
  //   FetchExample: {screen: FetchExample},
  //   WebSocketExample: {screen: WebSocketExample},
    Login: {screen: LoginScreen},
    Profile: {screen: ProfileScreen}
});

const AppBottom = createBottomTabNavigator({
    Profile: createStackNavigator({
        MyProfile: {screen: ProfileScreen},
        EditUser: {screen: EditUserScreen}
    }, {
        initialRouteName: 'MyProfile',
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarOptions: {
                showIcon: true
            },
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                return <Icon name="user" size={25} color={tintColor}/>;
            }
        }
    }),
    Shops: createStackNavigator({
        MyShops: {screen: ShopsScreen},
        ShopDetail: {screen: ShopDetailScreen}
    }, {
        initialRouteName: 'MyShops',
        navigationOptions: {
            tabBarLabel: 'Shops',
            tabBarOptions: {
                showIcon: true
            },
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                return <Icon name="store" size={25} color={tintColor}/>;
            }
        }
    }),
    Banners: createStackNavigator({
        ListBanners: {screen: ListBannersScreen},
    }, {
        initialRouteName: 'ListBanners',
        navigationOptions: {
            tabBarLabel: 'Banners',
            tabBarOptions: {
                showIcon: true
            },
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                return <Icon name="images" size={25} color={tintColor}/>;
            }
        }
    }),
    Settings: createStackNavigator({
        Setting: {screen: SettingScreen},
        PushNotification: {screen: PushNotificationScreen},
        SendMail: {screen: SendMailScreen},
    }, {
        initialRouteName: 'Setting',
        navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarOptions: {
                showIcon: true,
            },
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                return <Icon name="cog" size={25} color={tintColor}/>;
            }
        },
    }),
});

const AuthStack = createStackNavigator({
    Login: {screen: LoginScreen}
});

const App = createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppBottom,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));

export default App;
