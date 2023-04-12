import React, { useMemo } from "react";
import { Text, View, Image, ScrollView, KeyboardAvoidingView, FlatList, TouchableOpacity, StatusBar } from "react-native";
import { ChatStyles } from '../../../styles';
import { RouteName } from '../../../routes';
import { Messagelistdata, SH, Colors } from '../../../utils';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { Container, Spacing } from '../../../components';

const Messagelist = (props) => {
  const { navigation } = props;
  const { Colors } = useTheme();
  const ChatStyless = useMemo(() => ChatStyles(Colors), [Colors]);
  const { t } = useTranslation();

  const Messagedata = (item) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(RouteName.CHAT_SCREEN)}>
        <View style={ChatStyless.SetWhiteBox}>
          <View style={ChatStyless.FlexRowSetImage}>
            <View style={ChatStyless.ImageCenterStyleTop}>
              <Image style={ChatStyless.imagsetstyle} resizeMode="cover" source={item.image} />
            </View>
            <View style={ChatStyless.ListDotViewStyle}>
              {item.icon}
            </View>
            <View style={ChatStyless.ImageCenterStyle}>
              <Text style={ChatStyless.textsetdoctore}>{t(item.text)}</Text>
              <View style={ChatStyless.setflextimeroe}>
                <Text style={ChatStyless.textsetdoctoretwo}>{t(item.texttwoset)}</Text>
                <Text style={ChatStyless.textsetdoctoretwo}>{t(item.settime)}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.bgWhite} />
      <View style={ChatStyless.MinViewScreen}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={ChatStyless.ContentContainerStyle} >
          <KeyboardAvoidingView enabled>
            <View style={ChatStyless.MinFlexViewtwo}>
              <View style={ChatStyless.MinViewSecond}>
                <Spacing space={SH(5)} />
                <FlatList
                  data={Messagelistdata}
                  renderItem={({ item, index }) => Messagedata(item, index)}
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </Container>
  );
};
export default Messagelist;
