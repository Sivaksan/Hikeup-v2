import React, { useState, useMemo } from "react";
import { View, ScrollView, KeyboardAvoidingView, Text, FlatList, TouchableOpacity, TextInput, } from "react-native";
import { HelpScreenStyles } from '../../styles';
import Icon from 'react-native-vector-icons/AntDesign';
import { Input, Spacing } from '../../components';
import { Colors, Faqdataset, SH, SF } from '../../utils';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';


const FAQScreen = () => {
    const { t } = useTranslation();
    const [Search, setSearch] = useState('');
    const { Colors } = useTheme();
    const HelpScreenStyless = useMemo(() => HelpScreenStyles(Colors), [Colors]);
    const Faqdataitem = (item, index) => {
        return (
            <TouchableOpacity style={HelpScreenStyless.BgColorWhite} onPress={() => toggleHandler(item.id)}>
                <View>
                    <View style={HelpScreenStyless.FlexRowArrowLeftThree}>
                        <View style={HelpScreenStyless.FlexRowCreditCard}>
                            <View style={HelpScreenStyless.TextWidth}>
                                <Text style={HelpScreenStyless.CreditCardText}>{t(item.smalltext)}</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity
                                onPress={() => toggleHandler(item.id)}>
                                {show === item.id ? <Icon name='up' size={SF(21)} /> : <Icon name='down' size={SF(21)} />}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {show === item.id ? <View>
                    <View style={HelpScreenStyless.ParegraPhViewStyle}>
                        <Text style={HelpScreenStyless.ParegraphTextHelp}>{t(item.paymentparegraph)}</Text>
                    </View>
                </View> : null}
            </TouchableOpacity>
        );
    }
    const [show, setShow] = useState(null);
    const toggleHandler = (id) => {
        (id === show) ? setShow(null) : setShow(id)
    };
    return (
        <View style={HelpScreenStyless.MinViewScreen}>
            <View>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={HelpScreenStyless.contentContainerStyle}>
                    <KeyboardAvoidingView enabled>
                        <View style={HelpScreenStyless.MinFlexView}>
                            <View style={HelpScreenStyless.MinViewAllContent}>
                                <Spacing space={SH(100)} />
                                <FlatList
                                    data={Faqdataset}
                                    renderItem={({ item, index }) => Faqdataitem(item, index)}
                                    keyExtractor={item => item.id}
                                    showsHorizontalScrollIndicator={false}
                                    style={HelpScreenStyless.SetFlex}
                                />
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
                <View style={HelpScreenStyless.BgWhiteView}>
                    <View style={HelpScreenStyless.ChangeTheameBgColor}>
                        <TouchableOpacity style={HelpScreenStyless.SetFileChnage}>
                            <View style={HelpScreenStyless.InputWidth}>
                                <Input
                                    placeholder={t("Search_Text")}
                                    onChangeText={(value) => setSearch(value)}
                                    value={Search}
                                    maxLength={10}
                                    placeholderTextColor={Colors.gray_text_color}
                                    inputStyle={HelpScreenStyless.InputStyles}
                                />
                            </View>
                            <View style={HelpScreenStyless.Iconstyles}>
                                <Icon name="search1" size={SF(20)} color={Colors.theme_background_topaz} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};
export default FAQScreen;
