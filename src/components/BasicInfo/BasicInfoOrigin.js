import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const BasicInfoOrigin = () => {
    return (
        <Typography component="div">
            <Box
                sx={{
                    color: "#6200EE",
                    m: "143px",
                    fontWeight: "bold",
                    fontFamily: "Montserrat, sans-serif",
                    whiteSpace: "nowrap",
                    fontSize: "76px",
                    textAlign: "center",
                }}
            >
                Where do you start?
            </Box>
        </Typography>
    );
};

export default BasicInfoOrigin;
