import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: deepPurple[500],
        },
    },
});

const Header = () => {
    // const activeStyle = { color: "#F15B2A" };
    return (
        <>
            <ThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar
                        variant="dense"
                        sx={{
                            height: "93px",
                        }}
                    >
                        <Typography
                            component="div"
                            sx={{
                                flexGrow: 1,
                                paddingX: "140px",
                                paddingY: "19px",
                                fontSize: "53px",
                                textAlign: "center",
                                position: "absolute",
                            }}
                        >
                            Redesigned-Tabi
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </>
    );
};

export default Header;
