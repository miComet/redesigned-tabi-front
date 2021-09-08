import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { deepPurple } from "@mui/material/colors";
import { Link } from "react-router-dom";

const HomePage = () => (
    <>
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    color: "#6200EE",
                    m: "143px",
                    fontWeight: "bold",
                    fontFamily: "Montserrat, sans-serif",
                    whiteSpace: "nowrap",
                    fontSize: "105px",
                }}
            >
                Redesigned-Tabi
            </Box>
        </Box>
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Link to="/BasicInfoLength" style={{ textDecoration: "none" }}>
                <Button
                    size="large"
                    sx={{
                        borderRadius: 50,
                        width: "25rem",
                        fontSize: "3rem",
                        fontWeight: "bold",
                        color: "white",
                        backgroundColor: "#6200EE",
                        "&:hover": {
                            backgroundColor: deepPurple[800],
                        },
                    }}
                >
                    Start
                </Button>
            </Link>
        </Box>
    </>
);

export default HomePage;
