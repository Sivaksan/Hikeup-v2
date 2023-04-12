import React, { useState, useMemo } from 'react';
import '../SelectLanguage/i18n';
import { View, Text, StatusBar } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button, Container, DropDown, Lottie, Spacing, } from '../../../components';
import Icon from 'react-native-vector-icons/AntDesign';
import { LanguageStyles } from '../../../styles';
import { useNavigation, useTheme } from '@react-navigation/native';
import RouteName from '../../../routes/RouteName';
import images from '../../../index';
import { SH, Colors,SF } from '../../../utils';

const Translation = (props) => {
  const { navigation } = props;
  const { t, i18n } = useTranslation();
  const [Language, setLanguage] = useState('en');
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState('en');

  const { Colors } = useTheme();
  const LanguageStyless = useMemo(() => LanguageStyles(Colors), [Colors]);

  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
    {
      setValue(value);
      setIsFocus(false);
    }
  };
  const DataofDropdown = [
    { label: t("English"), value: 'en' },
    { label: t("Arabic"), value: 'ara' },
    { label: t("Spanish"), value: 'Spa' },
    { label: t("French"), value: 'Fr' },
  ];
  const confirmButton = () => {
    navigation.navigate(RouteName.SWIPER_SCREEN)
  };
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.bgWhite} />
      <View style={LanguageStyless.MinView}>
        <Lottie source={images.Languageanimation} />
        <Spacing space={SH(50)} />
        <View style={LanguageStyless.SelectTagWrap}>
          <Text style={LanguageStyless.SelectText}>{t("Select_Language")}</Text>
          <View style={isFocus ? LanguageStyless.TranslationDropdown : LanguageStyless.TranslationDropdownOpen}>
            <DropDown
              data={DataofDropdown}
              dropdownStyle={LanguageStyless.DropdownStyles}
              onChange={item => {
                changeLanguage(item.value)
              }}
              search
              maxHeight={250}
              searchPlaceholder="Search bar"
              IconStyle={LanguageStyless.IconStyle}
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              labelField="label"
              valueField="value"
              renderLeftIcon={() => (
                <Icon color="black" name={isFocus ? 'arrowup' : 'arrowdown'} size={SF(20)} />
              )}
            />
          </View>
        </View>
        <Spacing space={SH(20)} />
        <View style={LanguageStyless.ConfirmButtonView}>
          <Button
            title={t("Confirm_Text")}
            onPress={confirmButton}
            buttonStyle={LanguageStyless.LoginButton} />
        </View>
      </View>
    </Container>
  );
};

export default Translation;