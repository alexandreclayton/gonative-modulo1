import React from 'react';
import { View, Text } from 'react-native';
import { styles } from 'styles';

const Header = ({ title }) => (
  <View style={styles.mainHeader}><Text style={styles.mainHeaderText}>{title}</Text></View>
);
export default Header;
