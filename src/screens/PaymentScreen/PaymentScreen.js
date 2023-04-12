import React, { useState, useMemo } from "react";
import { Text, View, Image, ScrollView, StatusBar, FlatList, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import { PaymentStyle, Style } from '../../styles';
import Icon from 'react-native-vector-icons/AntDesign';
import images from '../../index';
import RouteName from '../../routes/RouteName';
import { useSelector } from "react-redux";
import { SF, SH, Colors } from "../../utils";
import { AppHeader, Container, Spacing } from "../../components";
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const MangePaymentMethode = (props) => {
  const { t } = useTranslation();
  const { navigation } = props;
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const { Colors } = useTheme();
  const PaymentStyles = useMemo(() => PaymentStyle(Colors), [Colors]);
  const Styles = useMemo(() => Style(Colors), [Colors]);

  const [Paymentdata] = useState([
    {
      "id": 1,
      "paymentparegraph": "Payment_screen_Paragraph_One",
      "image": <Image source={images.gpay_upi_img} resizeMode='center' style={PaymentStyles.setbgimage} />,
      "smalltext": "Pay_Via_UPI_Label",
      "walletstextset": t("Wallets_Lebal"),
    },
    {
      "id": 2,
      "paymentparegraph": "Payment_screen_Paragraph_Two",
      "image": <Image source={images.paytem_img} resizeMode='center' style={PaymentStyles.setbgimage} />,
      "smalltext": t("Paytm_Label"),
    },
    {
      "id": 3,
      "paymentparegraph": "Payment_screen_Paragraph_Three",
      "image": <Image source={images.Mobikwikimage_img} resizeMode='center' style={PaymentStyles.setbgimage} />,
      "smalltext": t("MobikWik_Label"),
    },
    {
      "id": 4,
      "paymentparegraph": "Payment_screen_Paragraph_Four",
      "image": <Image source={images.freechargelogo_img} resizeMode='center' style={PaymentStyles.setbgimage} />,
      "smalltext": t("Freecharge_Label"),
    },

  ]);
  const [show, setShow] = useState(null);
  const toggleHandler = (id) => {
    (id === show) ? setShow(null) : setShow(id)
  };
  const ItemRender = (item, index) => {
    return (
      <TouchableOpacity onPress={() => toggleHandler(item.id)}>
        <View>
          <View style={PaymentStyles.setflexrowarrowleftthree}>
            <View style={PaymentStyles.flexrowcreditcard}>
              <View style={PaymentStyles.iconsetborderwidth}>
                {item.image}
              </View>
              <View style={PaymentStyles.settextwidth}>
                <Text style={PaymentStyles.creditcardtext}>{t(item.smalltext)}</Text>
                <Text style={PaymentStyles.youneedstext}>{t(item.paymentparegraph)}</Text>
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
          <View style={PaymentStyles.setparegraphviewstyle}>
            <Text style={PaymentStyles.paregraphtextPaymentStyleset}>{t("PaytmDetails")}</Text>
          </View>
        </View> : null}
      </TouchableOpacity>
    );
  }
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.bgWhite} />
      <AppHeader Iconname={true} headerTitle={t("Payment_Label")} onPress={() => navigation.replace(RouteName.DRIVER_SELECT_SCREEN)} />
      <View style={PaymentStyles.minstyleviewphotograpgy}>
        <ScrollView
          style={Styles.contentContainerStyle}
        >
          <KeyboardAvoidingView enabled>
            <View style={PaymentStyles.minflexview}>
              <View style={PaymentStyles.minviewsigninscreen}>
                <View>
                  <Text style={[PaymentStyles.cardtextstyle, { color: colorrdata }]}>{t("Cards_Label")}</Text>
                  <TouchableOpacity style={PaymentStyles.setflexrowarrowleft} onPress={() => navigation.replace(RouteName.CREDIT_CARD_SCREEN)}>
                    <View style={PaymentStyles.flexrowcreditcard}>
                      <View style={PaymentStyles.iconsetborderwidth}>
                        <Icon name="creditcard" size={SF(25)} color={Colors.gray_text_color} />
                      </View>
                      <Text style={PaymentStyles.creditcardtext}>{t("Credit_ATM_Debit_Cards")}</Text>
                    </View>
                    <View>
                      <Icon name="right" size={SF(21)} olor={Colors.gray_text_color} />
                    </View>
                  </TouchableOpacity>
                  <View style={PaymentStyles.setflexrowarrowlefttwo}>
                  </View>

                  {/* START PAYPAL */}
                  <TouchableOpacity style={[PaymentStyles.flexrowcreditcardtwo, PaymentStyles.bottomborder]} onPress={() => navigation.replace(RouteName.PATMENT_SUCCESSFULL_SCREEN)}>
                    <View style={PaymentStyles.iconsetborderwidth}>
                      <Image source={images.paypal_img} resizeMode='center' style={PaymentStyles.setbgimage} />
                    </View>
                    <Text style={PaymentStyles.creditcardtext}>{t("Paypal_Label")}</Text>
                  </TouchableOpacity>

                  {/* END PAYPAL */}
                  <Text style={[PaymentStyles.cardtextstyletwo, { color: colorrdata }]}>{t("UPI_Label")}</Text>
                  <TouchableOpacity style={PaymentStyles.flexrowcreditcardtwo} onPress={() => navigation.replace(RouteName.PATMENT_SUCCESSFULL_SCREEN)}>
                    <View style={PaymentStyles.iconsetborderwidth}>
                      <Image source={images.paytem_img} resizeMode='center' style={PaymentStyles.setbgimage} />
                    </View>
                    <Text style={PaymentStyles.creditcardtext}>{t("Paytm_UPI_Label")}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={PaymentStyles.flexrowcreditcardtwo} onPress={() => navigation.replace(RouteName.PATMENT_SUCCESSFULL_SCREEN)}>
                    <View style={PaymentStyles.iconsetborderwidth}>
                      <Image source={images.gpay_img} resizeMode='center' style={PaymentStyles.setbgimage} />
                    </View>
                    <Text style={PaymentStyles.creditcardtext}>{t("Google_Pay_Label")}</Text>
                  </TouchableOpacity>
                  <Text style={[PaymentStyles.cardtextstylethree, { color: colorrdata }]}>{t("Wallets_Label")}</Text>
                  <FlatList
                    data={Paymentdata}
                    renderItem={({ item, index }) => ItemRender(item, index)}
                    keyExtractor={item => item.id}
                    style={PaymentStyles.flatelist}
                  />
                  <Spacing />
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </Container>

  );
};

export default MangePaymentMethode;
