import React from 'react';
import { Text, TouchableOpacity } from "react-native";

export const GoodButton = ({ style, disabled, text, textStyle, onPress }) => {
    return (
        <TouchableOpacity style={style} disabled={disabled} onPress={onPress} ><Text style={textStyle}>{text}</Text></TouchableOpacity>
    );
};