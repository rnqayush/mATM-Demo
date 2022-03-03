import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import styled from 'styled-components/native';
import {NEWCOMMUNICATIONADDRESS} from '../../constants/constants';
import Popup from '../Popup/Popup';

const PopupCommunicationAddress = props => {
  const [pan, setPan] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');

  const {
    popupType,
    isVisible,
    Heading,
    popupInfo,
    ButtonText,
    buttonPress,
    CancelButtonText,
    cancelButtonPress,
    animationIn,
    popupIcon,
    TextInputPlaceholder,
    TextInputvalue,
    onchangeText,
    isError,
    error_text,
    isActive,
    isValue,
    textColor,
    maxLength,
  } = props;

  return (
    <Popup
      style={{backgroundColor: '#f6f6f6'}}
      animationIn={animationIn}
      popupIcon={popupIcon}
      popupIconStyle={{}}
      isVisible={isVisible}
      Heading={Heading}
      component={
        <BodyContainer>
          <View style={{marginBottom: 34}}>
            <PopupText>{popupInfo}</PopupText>
          </View>

          <WhiteRectangleBox>
            <InputContainer>
              <TextInputStyle>
                <TextInput
                  keyboardType={'numeric'}
                  style={{fontSize: 20, width: '100%'}}
                  placeholder={NEWCOMMUNICATIONADDRESS.NCA_PINCODE}
                  isActive={isActive}
                  value={pan}
                  onchangeText={text => {
                    setPan(text);
                  }}
                  textColor={textColor}
                  maxLength={maxLength}
                />
              </TextInputStyle>

              {isError && <RedText>{error_text}</RedText>}
            </InputContainer>
          </WhiteRectangleBox>

          <WhiteRectangleBox>
            <InputContainer>
              <TextInputStyle>
                <TextInput
                  keyboardType={'default'}
                  style={{fontSize: 20, width: '100%'}}
                  placeholder={NEWCOMMUNICATIONADDRESS.NCA_ADDRESS1}
                  isActive={isActive}
                  value={address1}
                  onchangeText={text => {
                    setAddress1(text);
                  }}
                  textColor={textColor}
                  maxLength={maxLength}
                />
              </TextInputStyle>

              {isError && <RedText>{error_text}</RedText>}
            </InputContainer>
          </WhiteRectangleBox>

          <WhiteRectangleBox>
            <InputContainer>
              <TextInputStyle>
                <TextInput
                  keyboardType={'default'}
                  style={{fontSize: 20, width: '100%'}}
                  placeholder={NEWCOMMUNICATIONADDRESS.NCA_ADDRESS2}
                  isActive={isActive}
                  value={address2}
                  onchangeText={text => {
                    setAddress2(text);
                  }}
                  textColor={textColor}
                  maxLength={maxLength}
                />
              </TextInputStyle>

              {isError && <RedText>{error_text}</RedText>}
            </InputContainer>
          </WhiteRectangleBox>
        </BodyContainer>
      }
      ButtonText={ButtonText}
      buttonPress={() => buttonPress()}
      CancelButtonText={CancelButtonText}
      cancelButtonPress={() => cancelButtonPress()}
    />
  );
};

export default PopupCommunicationAddress;

const RedText = styled.Text`
  height: 13px;
  font-family: Inter;
  font-size: 10px;
  font-weight: 500,
  font-style: normal;
  line-height: 13px;
  letter-spacing: -0.3px;
  color: #d60b26;
  margin-bottom: 12px;`;

const PopupText = styled.Text`
  font-family: Inter;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  line-height: 24px;
  color: #25243b;
`;

const WhiteRectangleBox = styled.View`
  width: 100%;
  height: 75px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 8px;
  background-color: white;
  elevation: 3;
  shadow-color: #d60b26;
  margin-vertical: 8;
`;

const SideIcon = styled.Image`
  position: absolute;
  width: 48px;
  height: 48px;
  right: 16px;
  top: -15px;
`;
const InputContainer = styled.View`
  ${'' /* border-bottom-color: #d60b26; */}
  border-bottom-width: 0.6px;
`;
const BodyContainer = styled.View`
  padding-bottom: 20px;
`;

const TextInputStyle = styled.View`
  flex-direction: row;
  overflow: hidden;
  align-items: center;
`;

const CountryCodeStyle = styled.Text`
  width: 46px;
  font-family: Inter;
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  line-height: 26px;
  letter-spacing: -0.5px;
  color: #9b1e26;
`;