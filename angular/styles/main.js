import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "h1": {
        "fontSize": 2.5
    },
    "buscador": {
        "marginTop": "3%"
    },
    "titulo": {
        "marginTop": "12%"
    },
    "card-section h3": {
        "marginTop": "1%",
        "color": "blue",
        "textAlign": "justify"
    },
    "buscador input": {
        "height": 40
    },
    "buscador button": {
        "height": 40
    },
    "card img": {
        "width": "100%"
    },
    "card-container": {
        "float": "left",
        "marginLeft": "2%"
    },
    "card": {
        "fontFamily": "'Roboto', sans-serif",
        "overflow": "hidden",
        "boxShadow": "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
        "color": "#272727",
        "borderRadius": 2,
        "marginTop": "5%"
    },
    "card title": {
        "lineHeight": 3,
        "fontSize": 1.5,
        "fontWeight": "300"
    },
    "card content": {
        "paddingTop": 1.3,
        "paddingRight": 1.3,
        "paddingBottom": 1.3,
        "paddingLeft": 1.3,
        "fontWeight": "300",
        "borderRadius": "0 0 2px 2px",
        "width": 200,
        "height": 90
    },
    "card p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "color": "#2b2b79",
        "fontSize": 1.2
    },
    "card action": {
        "borderTop": "1px solid rgba(160, 160, 160, 0.2)",
        "paddingTop": 1.3,
        "paddingRight": 1.3,
        "paddingBottom": 1.3,
        "paddingLeft": 1.3
    },
    "card a": {
        "color": "#ffab40",
        "marginRight": 1.3,
        "transition": "color 0.3s ease",
        "textTransform": "uppercase",
        "textDecoration": "none"
    },
    "card image": {
        "position": "relative",
        "width": "110%"
    },
    "card image title": {
        "position": "absolute",
        "bottom": 0,
        "left": 0,
        "paddingTop": 1.3,
        "paddingRight": 1.3,
        "paddingBottom": 1.3,
        "paddingLeft": 1.3,
        "color": "#fff"
    },
    "card image img": {
        "borderRadius": "2px 2px 0 0",
        "width": "100%",
        "maxHeight": 201
    },
    "container-peliculas": {
        "marginLeft": "2%"
    }
});