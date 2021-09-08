import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { deepPurple } from "@mui/material/colors";
import { Link } from "react-router-dom";

const HomePage = () => (
    <Box
        sx={{ height: "100rem" }}
        style={{
            backgroundImage: `url("img/ElementsImage.png")`,
            backgroundSize: "40%",
            backgroundPosition: "center 5%",
            backgroundRepeat: "no-repeat",
            position: "relative",
        }}
    >
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Typography
                sx={{
                    color: "#6200EE",
                    mt: "13rem",
                    mb: "6rem",
                    fontWeight: "bold",
                    fontFamily: "Montserrat, sans-serif",
                    whiteSpace: "nowrap",
                    fontSize: "4.5rem",
                }}
            >
                Redesigned-Tabi
            </Typography>
            <ImageSrc />
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
                        height: "5rem",
                        fontSize: "3rem",
                        fontWeight: "bold",
                        color: "white",
                        backgroundColor: "#6200EE",
                        textTransform: "none",
                        "&:hover": {
                            backgroundColor: deepPurple[800],
                        },
                    }}
                >
                    Start
                </Button>
            </Link>
        </Box>
    </Box>
);

const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
});

export default HomePage;
