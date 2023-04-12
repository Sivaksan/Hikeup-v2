import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, Image, StatusBar, TouchableOpacity, } from 'react-native';
import { Button, Container, Input, Spacing } from '../../../components';
import { RouteName } from '../../../routes';
import { Style, Login } from '../../../styles';
import { SH, SF, Colors } from '../../../utils';
import IconG from 'react-native-vector-icons/Ionicons';
import { useNavigation, useTheme } from '@react-navigation/native';
import images from '../../../index';
import { useTranslation } from "react-i18next";

const LoginScreen = () => {
    const { Colors } = useTheme();
    const Logins = useMemo(() => Login(Colors), [Colors]);
    const Styles = useMemo(() => Style(Colors), [Colors]);

    const navigation = useNavigation();
    const [mobileNumber, setMobileNumber] = useState('');
    const [passwordVisibility, setpasswordVisibility] = useState(true);
    const [TextInputPassword, setTextInputPassword] = useState('');

    const onChangeText = (text) => {
        if (text === 'TextInputPassword') setpasswordVisibility(!passwordVisibility);
    };
    const { t } = useTranslation();

    const OnRegisterPress = () => {
        navigation.navigate(RouteName.REGISTER_SCREEN);
    }

    return (
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.bgWhite} />
            <View style={Logins.MinViewScreen}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={Styles.contentContainerStyle}>
                    <View style={Logins.Container}>
                        <View style={Styles.MinViewContent}>
                            <View style={Logins.ManViewLogins}>
                                <Image style={Logins.ImageSet} resizeMode='cover' source={images.App_logo} />
                            </View>
                            <Text style={Logins.LoginText}>{t("Login_Text")}</Text>
                            <Spacing space={SH(20)} />
                            <View style={Logins.InputSpaceView}>
                                <Input
                                    placeholder={t("Mobile_Number")}
                                    onChangeText={(value) => setMobileNumber(value)}
                                    value={mobileNumber}
                                    inputType="numeric"
                                    maxLength={10}
                                    placeholderTextColor={Colors.gray_text_color}
                                />
                            </View>
                            <Spacing space={SH(20)} />
                            <View style={Styles.FlexRowPassword}>
                                <Input
                                    inputStyle={Logins.InputPassword}
                                    name="password"
                                    value={TextInputPassword}
                                    placeholder={t("Password_Text")}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    placeholderTextColor={Colors.gray_text_color}
                                    textContentType="newPassword"
                                    secureTextEntry={passwordVisibility}
                                    enablesReturnKeyAutomatically
                                    onChangeText={(text) => setTextInputPassword(text)}
                                />
                                <TouchableOpacity onPress={() => { onChangeText("TextInputPassword") }} style={Logins.eyeiconset}>
                                    <IconG name={passwordVisibility ? 'eye-off' : 'eye'} size={SF(20)} />
                                </TouchableOpacity>
                            </View>
                            <Spacing space={SH(10)} />
                            <View style={Logins.ViewTextStyle}>
                                <Text style={Logins.TextStyle}>{t("Dont_Have_Account")} <Text style={Logins.registerTextStyle} onPress={() => OnRegisterPress()}> {t("Register_Text")}</Text></Text>
                            </View>
                            <Spacing space={SH(20)} />
                            <View style={Logins.LoginButton}>
                                <Button
                                    title={t("Login_Text")}
                                    onPress={() => navigation.navigate(RouteName.OTP_VERYFY_SCREEN)}
                                />
                            </View>
                            <Spacing space={SH(10)} />
                            <TouchableOpacity onPress={() => navigation.navigate(RouteName.Forget_Password)}>
                                <Text style={Logins.ForgetPasswordStyles}>{t("Forgot_Password")}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Container>
    );
}
export default LoginScreen;
