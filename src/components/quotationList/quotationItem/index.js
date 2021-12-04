import React from "react";
import { View, Text, Image } from "react-native";
import styles from './style'

export default function QuotationItem(props) {
    return (
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image style={styles.logoBitcoin}
                    source={require("../../../img/logo-bitcoin-2048.png")}
                    />
                    <Text style={styles.dateQuotation}>{props.data}</Text>
                </View>
            </View>
            <View style={styles.contextRigth}>
                <Text style={styles.price}>${props.valor.toFixed(2)}</Text>
            </View>
        </View>
    )
}