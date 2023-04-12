import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import propTypes from 'prop-types';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { SH, Colors, SW, SF } from '../../utils';

function Otp(props) {
    const { pinnum, code, onCodeChanged } = props;

    const Styles = useMemo(() =>
        StyleSheet.create({
            minviewotpin: {
                width: SW(183),
                height: SH(50),
            },
            settextinputstyle: {
                width: SW(35),
                height: SH(40),
                padding: 0,
                color: Colors.black_text_color,
                backgroundColor: Colors.light_polishe_pine,
                fontSize: SF(24),
                borderWidth: 0,
                borderBottomWidth: SW(1),
                borderColor: Colors.light_polishe_pine,
                fontWeight: '700',
                borderRadius: 0,
                marginHorizontal: SH(10)
            },
            setinputtexttwo: {
                width: SW(50),
                height: SH(51),
                padding:0,
                borderWidth: SH(2.5),
                fontSize: SF(28),
                fontWeight: '700',
                borderRadius: 7,
                color: Colors.theme_background_topaz,
                borderColor: Colors.theme_background_topaz
            },
        })
    )


    return (
        <OTPInputView
            style={Styles.minviewotpin}
            pinCount={pinnum}
            autoFocusOnLoad={false}
            code={code}
            onCodeChanged={(code) => onCodeChanged(code)}
            codeInputFieldStyle={Styles.settextinputstyle}
            codeInputHighlightStyle={Styles.setinputtexttwo}
        />
    )
}

Otp.defaultProps = {
    title: '',
    placeholder: '',
    titleStyle: {},
    inputStyle: {},
    onCodeChanged: () => { },
    onFocus: () => { },
    onBlur: () => { },
    value: '',
    textprops: {},
    inputprops: {},
    inputType: null,
};

Otp.propTypes = {
    title: propTypes.string,
    placeholder: propTypes.string,
    titleStyle: propTypes.shape({}),
    inputStyle: propTypes.shape({}),
    onCodeChanged: propTypes.func,
    value: propTypes.string,
    textprops: propTypes.object,
    inputprops: propTypes.object,
    onFocus: propTypes.func,
    onBlur: propTypes.func,
    inputType: propTypes.any,
};

export default Otp;