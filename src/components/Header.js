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
            main: "#6200EE",
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
                            height: "4rem",
                        }}
                    >
                        <Typography
                            component="div"
                            sx={{
                                flexGrow: 1,
                                paddingX: "8rem",
                                paddingY: "19px",
                                fontSize: "2rem",
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
