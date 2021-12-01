import React from "react";
import { View, Text, Image } from "react-native";
import styles from './style'

export default function QuotationItem() {
    return (
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image style={styles.logoBitcoin}
                    source={require("../../../img/logo-bitcoin-2048.png")}
                    />
                    <Text style={styles.dateQuotation}>01/12/2021</Text>
                </View>
            </View>
            <View style={styles.contextRigth}>
                <Text style={styles.price}>$ 4333,33</Text>
            </View>
        </View>
    )
}