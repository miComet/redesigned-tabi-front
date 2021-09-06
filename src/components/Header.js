import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal, cyan } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: "#018786",
        },
        secondary: {
            main: cyan[300],
        },
    },
});

const Header = () => {
    // const activeStyle = { color: "#F15B2A" };
    return (
        <>
            <ThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{
                                flexGrow: 1,
                                pl: 10,
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
