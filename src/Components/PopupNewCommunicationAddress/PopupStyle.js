import styled from 'styled-components/native';

export const CenteredView = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

export const ModalView = styled.View`
  justify-content: center;
  ${'' /* width: 464px; */}
  width: 95%;
  background-color: #ffffff;
  border-radius: 16px;
  shadow-color: black;
  elevation: 4;
`;

export const PopupHeading = styled.Text`
  font-family: Inter;
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  line-height: 26px;
  letter-spacing: -0.5px;
  color: #25243b;
`;

export const SubTextContainer = styled.Text`
  margin-top: 30px;
  width: 80%;
  height: 50%;
`;

export const TopIconView = styled.View`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  top: -32px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;