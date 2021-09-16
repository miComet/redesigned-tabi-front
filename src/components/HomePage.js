import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { deepPurple } from "@mui/material/colors";
import { Link } from "react-router-dom";

const HomePage = () => {
    const contentStyle = {
        // top: "93px",
        // left: "0px",
        width: "1920px",
        height: "987px",
    };

    const pictureStyle = {
        top: "92px",
        left: "564px",
        width: "793px",
        height: "793px",
        position: "relative",
        backgroundImage: `url("img/ElementsImage.png")`,
    };

    const titleStyle = {
        color: "#6200EE",
        top: "158px",
        left: "31px",
        width: "730px",
        height: "244px",
        textAlign: "center",
        fontSize: "105px",
        position: "relative",
        fontFamily: "Arial",
        fontWeight: "bold",
        whiteSpace: "nowrap",
    };

    const buttonStyle = {};

    return (
        <>
            <div style={contentStyle}>
                <div style={pictureStyle}>
                    <div style={titleStyle}>Redesigned-Tabi</div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
