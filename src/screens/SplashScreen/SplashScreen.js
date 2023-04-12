import React, { useEffect, useMemo } from 'react';
import { View, StatusBar } from 'react-native';
import images from '../../index';
import { Style , SplashScreenStyle} from '../../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { color_picker_set_action } from "../../redux/action/CommonAction";
import { RouteName } from '../../routes';
import { Lottie } from '../../components';
import { Colors } from '../../utils';
import { useSelector } from "react-redux";
import { useTheme } from '@react-navigation/native';


const SplashScreen = ({ navigation }) => {
    const { Colors } = useTheme();
    const Styles = useMemo(() => Style(Colors), [Colors]);
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    StatusBar.setBackgroundColor(Colors.bgWhite);
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            AsyncStorage.getItem('user_id').then((value) =>
                navigation.replace(RouteName.SELECT_LANGUAGE)
            );
        }, 1500);
        // {
        //     colorrdata  ?
        //     dispatch(color_picker_set_action(colorrdata)) :
        //     dispatch(color_picker_set_action(Colors.theme_background_topaz))
        // }
        {
            colorrdata != '' ?
                dispatch(color_picker_set_action(colorrdata))
                :
                dispatch(color_picker_set_action('#ffbd30'))
        }
    }, []);
    return (
        <View style={Styles.SplashMinView}>
            <View style={Styles.MinViewStyleSplash}>
                <Lottie source={images.Splash_Swiper} />
            </View>
        </View>
    );
};
export default SplashScreen;
