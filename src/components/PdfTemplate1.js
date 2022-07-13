import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

export default function PdfTemplate1({ addressData, addressData2, items, extra, total }) {
    const styles = StyleSheet.create({
        page: {
            backgroundColor: "#24252E",
            padding: 40,
            paddingBottom: 100
        },
        head: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#FFFFFF",
            fontSize: "14px",
            fontWeight: 800,
            borderBottom: "0.4px solid #FFFFFF",
            paddingBottom: "20px"
        },
        row: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
        },
        headlogo: {
            height: 28,
            width: 167,
            marginRight: 5
        },
        addressbox: {
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginTop: 25,
            paddingBottom: 60,
            borderBottom: "0.5px solid #8459BA"
        },
        addresscolLeft: {
            display: "flex",
            flexDirection: "col",
            justifyContent: "center",
            alignItems: "flex-start",
            width: "40%",
            textAlign: "left"
        },
        addresscolRight: {
            display: "flex",
            flexDirection: "col",
            justifyContent: "center",
            alignItems: "flex-end",
            width: "40%",
            textAlign: "right"
        },
        addresshead: {
            color: "rgba(255, 255, 255, 0.5)",
            fontSize: "12px",
            fontWeight: 500,
        },
        addresshead2: {
            color: "rgba(255, 255, 255, 0.5)",
            fontSize: "12px",
            fontWeight: 500,
            marginBottom: 2,
            marginTop: 5
        },
        addresshead3: {
            color: "rgba(255, 255, 255, 0.5)",
            fontSize: "12px",
            fontWeight: 500,
            marginTop: 25
        },
        addressname: {
            marginVertical: 9,
            color: "#FFFFFF",
            fontSize: "20px",
            fontWeight: 600,
        },
        addresstext: {
            marginTop: 6,
            color: "#FFFFFF",
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "1.3px"
        },
        billrow: {
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        },
        billitems: {
            borderBottom: "0.5px solid #535353",
            paddingBottom: 8
        },
        billrow2: {
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        },
        billrow3: {
            display: "flex",
            flexDirection: "col",
            alignItems: "flex-end",
            justifyContent: "center",
        },
        billhead: {
            color: "rgba(255, 255, 255, 0.5)",
            fontSize: "12px",
            fontWeight: 400,
        },
        billcolLeft: {
            display: "flex",
            flexDirection: "col",
            justifyContent: "center",
            alignItems: "flex-start",
            width: "60%",
            textAlign: "left"
        },
        billcolRight: {
            display: "flex",
            flexDirection: "col",
            justifyContent: "center",
            alignItems: "flex-end",
            width: "30%",
            textAlign: "right",
        },
        billname: {
            fontSize: "12px",
            fontWeight: 500,
            color: "#FFFFFF"
        },
        billname2: {
            fontSize: "12px",
            fontWeight: 500,
            color: "#FFFFFF",
            marginLeft: 100
        },
        billname3: {
            fontSize: "12px",
            fontWeight: 500,
            color: "#FFFFFF",
            marginLeft: 50
        },
        billtext: {
            fontSize: "10px",
            fontWeight: 400,
            color: "rgba(255, 255, 255, 0.5)",
            marginTop: 5,
        },
        billtotal: {
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        },
        billtotal2: {
            marginTop: 30,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#2A2B37",
            padding: 8,
            borderRadius: 4
        },
        footer: {
            position: "absolute",
            bottom: 70,
            left: 40,
            borderTop: "0.5px solid #8459BA",
            paddingTop: 13,
            width: "100%"
        },
        disclaimer: {
            textAlign: "center",
            fontSize: "12px",
            fontWeight: 500,
            color: "#FFFFFF"
        }
    });
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View fixed={true} style={styles.head}>
                    <View style={styles.row}>
                        <Image style={styles.headlogo} src="/images/logo.png" alt="Tournafest" />
                    </View>
                    <Text>RECEIPT</Text>
                </View>
                <View style={styles.addressbox}>
                    <View style={styles.addresscolLeft}>
                        {
                            addressData.sender ?
                                <>
                                    <Text style={styles.addresshead}>{addressData.sender}</Text>
                                    <Text style={styles.addressname}>{addressData.name}</Text>
                                    <Text style={styles.addresstext}>
                                        {
                                            Object.keys(addressData.address).map((d, i) => (
                                                <span>
                                                    {addressData.address[d]}{"\n"}
                                                </span>
                                            ))
                                        }
                                    </Text>
                                    <Text style={styles.addresstext}>{addressData.email}</Text>
                                    <Text style={styles.addresstext}>{addressData.phone}</Text>
                                    <Text style={styles.addresshead3}>Date & Time</Text>
                                    <Text style={styles.addresstext}>{addressData.date}</Text>
                                </>
                                : <></>
                        }
                    </View>
                    <View style={styles.addresscolRight}>
                        {
                            addressData2.sender ?
                                <>
                                    <Text style={styles.addresshead}>{addressData2.sender}</Text>
                                    <Text style={styles.addressname}>{addressData2.name}</Text>
                                    <Text style={styles.addresshead2}>{addressData2.addressheading}</Text>
                                    <Text style={styles.addresstext}>
                                        {
                                            Object.keys(addressData2.address).map((d, i) => (
                                                <span>
                                                    {addressData2.address[d]}{"\n"}
                                                </span>
                                            ))
                                        }
                                    </Text>
                                    <Text style={styles.addresstext}>{addressData2.email}</Text>
                                    <Text style={styles.addresstext}>{addressData2.phone}</Text>
                                    {
                                        addressData2.date ?
                                            <>
                                                <Text style={styles.addresshead3}>Date & Time</Text>
                                                <Text style={styles.addresstext}>{addressData2.date}</Text>
                                            </>
                                            : <></>
                                    }
                                </>
                                : <></>
                        }
                    </View>
                </View>
                <View style={styles.billbox}>
                    <View style={styles.billrow}>
                        <Text style={styles.billhead}>Description</Text>
                        <Text style={styles.billhead}>Amount</Text>
                    </View>
                    <View style={styles.billitems}>
                        {
                            items.length > 0 ?
                                items.map((d, i) => (
                                    <View style={styles.billrow2}>
                                        <View style={styles.billcolLeft}>
                                            <Text style={styles.billname}>{d.title}</Text>
                                            <Text style={styles.billtext}>{d.description}</Text>
                                        </View>
                                        <View style={styles.billcolRight}>
                                            <Text style={styles.billname}>{d.amount}</Text>
                                        </View>
                                    </View>
                                ))
                                : <></>
                        }
                    </View>
                    <View style={styles.billrow3}>
                        {
                            extra.length > 0 ?
                                extra.map((d, i) => (
                                    <View style={styles.billtotal}>
                                        <Text style={styles.billname}>{d.title}</Text>
                                        <Text style={styles.billname2}>{d.amount}</Text>
                                    </View>
                                ))
                                :
                                <></>
                        }
                        <View style={styles.billtotal2}>
                            <Text style={styles.billname}>Total</Text>
                            <Text style={styles.billname3}>{total}</Text>
                        </View>
                    </View>
                </View>
                <View fixed={true} style={styles.footer}>
                    <Text style={styles.disclaimer}>Note: This is a computer generated recipt and does not require physical signature.</Text>
                </View>
            </Page>
        </Document>
    )
} 