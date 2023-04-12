import { Lottie, RatingScreen } from '../components';
import React from 'react';
import images from '../index';
import Icon from "react-native-vector-icons/AntDesign";
import { Colors, SF } from '../utils';
import IconM from "react-native-vector-icons/MaterialCommunityIcons";
import IconT from "react-native-vector-icons/MaterialIcons";
import IconF from "react-native-vector-icons/Feather";
import IconO from 'react-native-vector-icons/Octicons';
import { RouteName } from '../routes';

export const Swiperdata = [
  {
    key: 's1',
    text: 'Swiperfirst',
    title: "Swipertitle",
    animation: <Lottie
      source={images.First_Swiper}
    />,

  },
  {
    key: 's2',
    text: 'SwiperFirstTwo',
    title: 'SwiperTitleTwo',
    animation: <Lottie
      source={images.Two_Swiper}
    />,
  },
  {
    key: 's3',
    text: 'SwiperFirstThree',
    title: 'Swipertitlethree',
    animation: <Lottie
      source={images.Three_Swiper}
    />,
    backgroundColor: 'transparent',
  },

]
export const Countrydata = [
  {
    "id": 1,
    "textsimple": 'Afghanistan',
    "digit": '+ 93',
  },
  {
    "id": 2,
    "textsimple": 'Albania',
    "digit": '+ 355',
  },
  {
    "id": 3,
    "textsimple": 'Algeria',
    "digit": '+ 213',
  },
  {
    "id": 1,
    "textsimple": 'Belgium',
    "digit": '+ 32',
  },
  {
    "id": 4,
    "textsimple": 'Belize',
    "digit": '+ 501',
  },
  {
    "id": 5,
    "textsimple": 'Benin',
    "digit": '+ 229',
  },
  {
    "id": 6,
    "textsimple": 'Gambia',
    "digit": '+ 220',
  },
  {
    "id": 7,
    "textsimple": 'Georgia',
    "digit": '+ 995',
  },
  {
    "id": 8,
    "textsimple": 'Greece',
    "digit": '+ 30',
  },
  {
    "id": 9,
    "textsimple": 'Hong Kong',
    "digit": '+ 852',
  },
  {
    "id": 10,
    "textsimple": 'Iceland',
    "digit": '+ 354',
  },
  {
    "id": 11,
    "textsimple": 'India',
    "digit": '+ 91',
  },
  {
    "id": 12,
    "textsimple": 'Japan',
    "digit": '+ 81',
  },
  {
    "id": 13,
    "textsimple": 'Kazakhstan',
    "digit": '+ 7',
  },
  {
    "id": 14,
    "textsimple": 'Lebanon',
    "digit": '+ 961',
  },
  {
    "id": 15,
    "textsimple": 'Liberia',
    "digit": '+ 231',
  },
  {
    "id": 16,
    "textsimple": 'Liechtenstein',
    "digit": '+ 423',
  },
  {
    "id": 17,
    "textsimple": 'Luxembourg',
    "digit": '+ 352',
  },
  {
    "id": 18,
    "textsimple": 'Malawi',
    "digit": '+ 256',
  },
  {
    "id": 19,
    "textsimple": 'Maldives',
    "digit": '+ 960',
  },
  {
    "id": 20,
    "textsimple": 'Mexico',
    "digit": '+ 52',
  },
]

export const Messagelistdata = [
  {
    "id": 1,
    "image": images.Chat_image_saven,
    "text": 'Alastair_Cook',
    "texttwoset": 'Online_Text',
    "icon": <IconO name="dot-fill" size={SF(30)} color={Colors.useronline_color} />,
  },
  {
    "id": 2,
    "image": images.Chat_image_one,
    "text": 'Graham_Gooch',
    "texttwoset": 'Offline_Text',
    "settime": 'Minutes_Ago',
    "icon": <IconO name="dot-fill"  size={SF(30)} color={Colors.red} />,
  },
  {
    "id": 3,
    "image": images.Chat_image_two,
    "text": 'Andrew_Flintoff',
    "texttwoset": 'Online_Text',
    "icon": <IconO name="dot-fill"  size={SF(30)} color={Colors.useronline_color}/>,
  },
  {
    "id": 4,
    "image": images.Chat_image_saven,
    "text": 'Ian_Botham',
    "texttwoset": 'Online_Text',
    "icon": <IconO name="dot-fill"  size={SF(30)} color={Colors.useronline_color} />,
  },
  {
    "id": 5,
    "image": images.Chat_image_five,
    "text": 'Sophia_Dunkley',
    "texttwoset": 'Offline_Text',
    "settime": 'Minutes_Ago_41',
    "icon": <IconO name="dot-fill" size={SF(30)} color={Colors.red} />,
  },
  {
    "id": 6,
    "image": images.Chat_image_six,
    "text": 'Lauren_Bell',
    "texttwoset": 'Online_Text',
    "icon": <IconO name="dot-fill" size={SF(30)} color={Colors.useronline_color} />,
  },
  {
    "id": 7,
    "image": images.Chat_image_saven,
    "text": 'Charlie_Dean',
    "texttwoset": 'Offline_Text',
    "settime": 'Minutes_Ago_1',
    "icon": <IconO name="dot-fill" size={SF(30)} color={Colors.red} />,
  },
  {
    "id": 8,
    "image": images.Chat_image_one,
    "text": 'Danni_Wyatt',
    "texttwoset": 'Offline_Text',
    "settime": 'Minutes_Ago_3',
    "icon": <IconO name="dot-fill" size={SF(30)} color={Colors.red} />,
  },
];
export const Faqdataset = [
  {
    "id": 1,
    "paymentparegraph": "FAQ_paregraph_One",
    "smalltext": 'FAQ_paregraph_Two',
  },
  {
    "id": 2,
    "paymentparegraph": "FAQ_paregraph_Three",
    "smalltext": 'FAQ_paregraph_Four',
  },
  {
    "id": 3,
    "paymentparegraph": "FAQ_paregraph_Five",
    "smalltext": 'FAQ_paregraph_Six',
  },
  {
    "id": 4,
    "paymentparegraph": "FAQ_Paregraph_Saven",
    "smalltext": 'FAQ_Paregraph_Aeight',
  },
  {
    "id": 5,
    "paymentparegraph": "FAQ_Paregraph_Nine",
    "smalltext": 'FAQ_Paregraph_Ten',
  },
  {
    "id": 6,
    "paymentparegraph": "FAQ_Paregraph_Eleven",
    "smalltext": 'FAQ_One',
  },
  {
    "id": 7,
    "paymentparegraph": "FAQ_Two",
    "smalltext": 'FAQ_Three',
  },
  {
    "id": 8,
    "paymentparegraph": "FAQ_Four",
    "smalltext": 'FAQ_Five',
  },
]
export const MessageBox = [
  {
    "id": 1,
    "text": 'Message_Text_Home',
    "iconname":  <Icon name="message1" size={SF(20)} color={Colors.theme_background_topaz} />
  },
  {
    "id": 2,
    "text": 'Message_Text_Home',
  },
  {
    "id": 3,
    "text": 'Message_Text_Home',
  },
  {
    "id": 4,
    "text": 'Message_Text_Home',
  },
  {
    "id": 5,
    "text": 'Message_Text_Home',
  },
]





