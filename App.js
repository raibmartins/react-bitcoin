import React from 'react';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import CurrentPrice from './src/components/currentPrice';
import HistoryGraphic from './src/components/historyGraphic';
import QuotationList from './src/components/quotationList'
import QuotationItem from './src/components/quotationList/quotationItem';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
      backgroundColor="#f50d41"
      barStyle="light-content"
      />
      <CurrentPrice></CurrentPrice>
      <HistoryGraphic></HistoryGraphic>
      <QuotationList></QuotationList>
      <QuotationItem></QuotationItem>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 40: 0
  },
});
