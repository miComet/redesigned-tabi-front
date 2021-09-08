import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { deepPurple } from "@mui/material/colors";

export default function DayItem() {
    return (
        <Box
            sx={{
                m: 2,
            }}
        >
            <Button
                variant="contained"
                size="large"
                sx={{
                    borderRadius: 50,
                    height: "10rem",
                    width: "10rem",
                    fontSize: "3rem",
                    fontWeight: "bold",
                    color: "white",
                    backgroundColor: deepPurple[900],
                    "&:hover": {
                        backgroundColor: deepPurple[800],
                    },
                    m: 2,
                    left: "33%",
                }}
            >
                1
            </Button>
            <Button
                variant="contained"
                size="large"
                sx={{
                    borderRadius: 50,
                    height: "10rem",
                    width: "10rem",
                    fontSize: "3rem",
                    fontWeight: "bold",
                    color: "white",
                    backgroundColor: deepPurple[500],
                    "&:hover": {
                        backgroundColor: deepPurple[400],
                    },
                    m: 2,
                    left: "44%",
                }}
            >
                2
            </Button>
            <Button
                variant="contained"
                size="large"
                sx={{
                    borderRadius: 50,
                    height: "10rem",
                    width: "10rem",
                    fontSize: "3rem",
                    fontWeight: "bold",
                    color: "white",
                    backgroundColor: deepPurple[100],
                    "&:hover": {
                        backgroundColor: deepPurple[200],
                    },
                    m: 2,
                    left: "55%",
                }}
            >
                3
            </Button>
        </Box>
    );
}
