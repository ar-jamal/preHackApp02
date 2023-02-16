import React from 'react';
import { View, StyleSheet, Animated, TouchableOpacity, ScrollView, Image, } from 'react-native';
import { colors } from '../Utils/colors';
import { Icon } from '../Utils/icons/Icon';

export default function MenuBar(props) {
    return (
        <View style={styles.headerView}>
            <View style={styles.headerLeft}>
                <Image style={styles.logo} source={require('../Utils/Images/LogoHeader.png')} />
                <Image style={styles.titleText} source={require('../Utils/Images/PlantifyHeader.png')} />
            </View>
            {props.headerRight && <View style={styles.headerRight} >
                <TouchableOpacity>
                    <Icon style= {styles.iconBell} /* type= 'fonAwesome' */ name= 'bell-o' size= {23} color= {colors.iconColor} />
                </TouchableOpacity>
                <TouchableOpacity>
                    {/* <Image style={styles.iconMenu} source={require('../Utils/Images/Menu.png')} /> */}
                    <Icon style= {styles.iconMenu} type= 'feather' name= 'menu' size= {23} color= {colors.iconColor} />
                </TouchableOpacity>
            </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    headerView: {
        width: '100%',
        // height: '12%',
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
        paddingRight: 12,
        resizeMode: 'contain',
        marginHorizontal: 12,
        // backgroundColor: 'green'
    }

});