import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import CurrentPrice from './src/components/currentPrice';
import HistoryGraphic from './src/components/historyGraphic';
import QuotationList from './src/components/quotationList'


function formatDate(number) {
  if (number<10) {
    return "0" + number;
  }
  return number;
}

function url(days) {
  const data = new Date();
  const listLastDays = days;
  const end_date = `${data.getFullYear()}-${formatDate(data.getMonth()+1)}-${formatDate(data.getDate())}`
  data.setDate(data.getDate() - listLastDays);
  const start_date = `${data.getFullYear()}-${formatDate(data.getMonth()+1)}-${formatDate(data.getDate())}`
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`;
}

async function getListCoins(url) {
  let response = await fetch(url);
  let returnApi = await response.json();
  let selectListQuotation = returnApi.bpi;
  var id = 0;
  const QUERY_COINS_LIST = Object.keys(selectListQuotation).map((key) => {
    return {
      id: Math.random * 100,
      data: key.split("-").reverse().join("/"),
      valor: selectListQuotation[key]
    }
  })
  let data = QUERY_COINS_LIST.reverse();
  return data;
}

async function getPriceCoinsGraphic(url) {
  let responseG = await fetch(url);
  let returnApiG = await responseG.json();
  let selectListQuotationG = returnApiG.bpi;
  const QUERY_COINS_LIST = Object.keys(selectListQuotationG).map((key) => {
    return selectListQuotationG[key];
  })
  let dataG = QUERY_COINS_LIST;
  return dataG;
}


export default function App() {

  const [coinsList, setCoinsList] = useState([])
  const [coinsGraphicList, setCoinGraphicList] = useState([0])
  const [days, setDays] = useState(30)
  const [isDayUpdated, setIsDayUpdated] = useState(true)
  const [price, setPrice] = useState()
  
  function updateDay(number) {
    setDays(number);
    setIsDayUpdated(true)
  }

  function priceCotation() {
    console.log(coinsGraphicList)
    /* setPrice(coinsGraphicList.pop()); */
  }

  useEffect(() => {
    getListCoins(url(days)).then((data) => {
      setCoinsList(data);
    })

    getPriceCoinsGraphic(url(days)).then((dataG) => {
      setCoinGraphicList(dataG);
      setPrice(dataG.pop())
    })

    if (isDayUpdated === true) {
      setIsDayUpdated(false)
    }
  },[isDayUpdated]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
      backgroundColor="#f50d41"
      barStyle="light-content"
      />
      <CurrentPrice lastCotation={price}></CurrentPrice>
      <HistoryGraphic infoDataGrapigc={coinsGraphicList}></HistoryGraphic>
      <QuotationList filterDay={updateDay} listTransactions={coinsList}></QuotationList>
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
