import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { CardView } from '../../components/CardView';
import { StatusBar } from 'expo-status-bar';

export function GarageScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style='light'/>
      <View style={styles.cameraBox}>
        <View style={styles.triangleCorner} />
        <View style={[styles.triangleCorner, styles.topRight]} />
        <View style={[styles.triangleCorner, styles.bottomLeft]} />
        <View style={[styles.triangleCorner, styles.bottomRight]} />

        <CardView />
      </View>
    </View>
  );
}