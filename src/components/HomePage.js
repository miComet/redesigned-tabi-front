import React from "react";
import { motion } from "framer-motion";
const Button = () => {
    return <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />;
};

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
        fontSize: "90px",
        position: "absolute",
        fontFamily: "Arial",
        fontWeight: "bold",
        whiteSpace: "nowrap",
    };

    const buttonStyle = {
        color: "white",
        top: "439px",
        left: "147px",
        width: "499px",
        height: "111px",
        // textAlign: "center",
        fontSize: "70px",
        position: "absolute",
        backgroundColor: "#6200EE",
        borderRadius: 500,
        cursor: "pointer",
        opacity: "0.9",
    };

    return (
        <>
            <div style={contentStyle}>
                <div style={pictureStyle}>
                    <div style={titleStyle}>Redesigned-Tabi</div>

                    <motion.button
                        style={buttonStyle}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 1.0 }}
                    >
                        Start
                    </motion.button>
                </div>
            </div>
        </>
    );
};

export default HomePage;
