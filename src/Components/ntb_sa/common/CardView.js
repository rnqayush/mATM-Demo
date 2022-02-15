/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { isIos } from 'utils/platform';

const styles = StyleSheet.create({
  rowCardStyles: {
    borderRadius: 8,
    backgroundColor: 'white',
    borderColor: 'transparent',
    shadowColor: 'grey',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: isIos ? 0.2 : 1,
    elevation: 2,
  },
});

const Card = props => {
  return <View style={{ ...styles.rowCardStyles, ...props.style }}>{props.children}</View>;
};

export default Card;
