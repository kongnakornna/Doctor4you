import React, { memo } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

import Colors from '../../../common/Colors';
import FontFamily from '../../../common/FontFamily';

const TopDoctorListItem = ({ item, index, style }) => {
    const navigation = useNavigation();

    return (
        <View style={[styles.container, { ...style }]}>
            <View style={{ alignSelf: "center", paddingTop: 10 ,borderRadius:25,}}>{item.icon}</View>

            <Text style={styles.title}>{item.name}</Text>

            <Text style={styles.range}>{item.number}</Text>
        </View>
    );
};

export default memo(TopDoctorListItem);

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: Colors.bordergray,
        paddingHorizontal: 17,
        marginRight: 10,
        width: 130,
        height: 188,

        backgroundColor: Colors.white,

        // shadowColor: Colors.black,
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,

        // elevation: 5,
    },
    productImage: {
        width: '90%',
        height: 150,
        alignSelf: 'center',
        marginVertical: 10,
    },
    range: {
        fontFamily: FontFamily.semiBold,
        color: Colors.bordergray,
        fontSize: 11,
        paddingTop: 5,
        textAlign: 'center'
    },
    title: {
        fontFamily: FontFamily.bold,
        color: Colors.lightblack,
        fontSize: 14,
        paddingTop: 5,
        textAlign: 'center'
    },
    bottomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginVertical: 10,
    },
    prizeTag: {
        flex: 1,
        textAlign: 'left',
        fontFamily: FontFamily.bold,
        color: Colors.primary,
    },
    eyeContainer: {
        height: 28,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
