import React from "react";

const Header = () => {
    const headerStyle = {
        backgroundColor: "#6200EE",
        top: "0px",
        left: "0px",
        width: "1920px",
        height: "93px",
    };

    const headerStyle2 = {
        color: "#FFFFFF",
        top: "10px",
        left: "140px",
        width: "398px",
        height: "67px",
        textAlign: "center",
        fontSize: "53px",
        position: "relative",
        fontFamily: "Arial",
        fontWeight: "bold 0.8",
    };
    return (
        <div style={headerStyle}>
            <div style={headerStyle2}>Redesigned-Tabi</div>
        </div>
    );
};

export default Header;
