import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "header": {
        "height": 60,
        "background": "black",
        "color": "white",
        "width": "100%",
        "zIndex": 12,
        "position": "fixed"
    },
    "title-bar-left": {
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10,
        "fontSize": 1.2,
        "fontWeight": "bold",
        "color": "white"
    },
    "title-bar-left a": {
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10,
        "fontSize": 1.2,
        "fontWeight": "bold",
        "color": "white"
    },
    "title-bar-right": {
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10,
        "fontSize": 1.2,
        "fontWeight": "bold",
        "color": "white"
    },
    "title-bar-right a": {
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10,
        "fontSize": "2rem !important",
        "fontWeight": "bold",
        "color": "white"
    },
    "header-small": {
        "background": "black",
        "color": "white",
        "width": "100%"
    },
    "resultados": {
        "display": "flex",
        "justifyContent": "center"
    }
});