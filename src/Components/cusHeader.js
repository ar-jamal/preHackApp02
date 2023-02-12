import React from 'react';
import { View, StyleSheet, Animated, TouchableOpacity, ScrollView, Image, } from 'react-native';

export default function CusHeader(props) {
    return (
        <View style={styles.headerView}>
            <View style={styles.headerLeft}>
                <Image style={styles.logo} source={require('../Utils/Images/LogoHeader.png')} />
                <Image style={styles.titleText} source={require('../Utils/Images/PlantifyHeader.png')} />
            </View>
            {props.headerRight && <View style={styles.headerRight} >
                <TouchableOpacity>
                    <Image style={styles.iconBell} source={require('../Utils/Images/IconBell.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.iconMenu} source={require('../Utils/Images/Menu.png')} />
                </TouchableOpacity>
            </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    headerView: {
        width: '100%',
        // paddingHorizontal: '2%',
        flexDirection: 'row',
        marginBottom: '2%',
        // backgroundColor: 'green',
    },
    headerLeft: {
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'blue',
    },
    logo: {
        height: '22%',
        aspectRatio: 1,
        marginRight: 20,
        resizeMode: 'contain',
        // backgroundColor: 'green',
    },
    titleText: {
        // height: '7%',
        width: '45%',
        aspectRatio: 2,
        resizeMode: 'contain',
        // backgroundColor: 'lightgrey'
    },
    headerRight: {
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // paddingHorizontal: 12,
        // backgroundColor: 'yellow',
    },
    iconBell: {
        width: '50%',
        aspectRatio: 2,
        resizeMode: 'contain',
        marginHorizontal: 12,
    }

});