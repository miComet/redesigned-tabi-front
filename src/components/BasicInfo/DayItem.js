import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { deepPurple } from "@mui/material/colors";
import { getThemeProps } from "@mui/system";
import { popoverClasses } from "@mui/material";

export default function DayItem({ day, onClick, history }) {
    let backgroundColor =
        day === 1
            ? deepPurple[900]
            : day === 3
            ? deepPurple[500]
            : day === 7
            ? deepPurple[100]
            : "#fff";
    let hoverBackgroundColor =
        day === 1
            ? deepPurple[800]
            : day === 3
            ? deepPurple[400]
            : day === 7
            ? deepPurple[200]
            : "#fff";

    return (
        <Button
            component={Link}
            to="/BasicInfoOrigin"
            variant="contained"
            size="large"
            sx={{
                borderRadius: 50,
                height: "10rem",
                width: "10rem",
                fontSize: "3rem",
                fontWeight: "bold",
                color: "white",
                backgroundColor: backgroundColor,
                "&:hover": {
                    backgroundColor: hoverBackgroundColor,
                },
                m: "3rem",
            }}
        >
            {day}
        </Button>
    );
}
