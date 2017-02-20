import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "movie-detail-container h1": {
        "display": "flex",
        "justifyContent": "center"
    },
    "basic-info-movie": {
        "display": "flex",
        "marginTop": "2%"
    },
    "img-container": {
        "display": "flex",
        "justifyContent": "flex-start",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "columncolumn": {
        "paddingTop": 0,
        "paddingRight": "!important",
        "paddingBottom": 0,
        "paddingLeft": "!important"
    },
    "column": {
        "paddingTop": 0,
        "paddingRight": "!important",
        "paddingBottom": 0,
        "paddingLeft": "!important"
    },
    "columns": {
        "paddingTop": 0,
        "paddingRight": "!important",
        "paddingBottom": 0,
        "paddingLeft": "!important"
    },
    "info-container": {
        "paddingTop": "5px !important",
        "paddingLeft": "2% !important"
    },
    "info-container p": {
        "marginLeft": "2%",
        "color": "#215DD4",
        "fontWeight": "bold"
    },
    "info-container span": {
        "color": "black"
    },
    "fieldset": {
        "paddingTop": "1%",
        "paddingRight": "1%",
        "paddingBottom": "1%",
        "paddingLeft": "1%",
        "border": "3px #215DD4 solid",
        "borderRadius": 5,
        "fontWeight": "bold",
        "color": "black"
    },
    "overview-info": {
        "marginTop": "2%"
    },
    "tagline": {
        "marginTop": "1%",
        "textAlign": "center",
        "color": "#8E2F35"
    }
});