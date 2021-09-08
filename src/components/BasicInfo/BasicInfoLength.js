import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DayItem from "./DayItem";

const TripLength = (props) => (
    <Link className="Trip" onClick={() => props.onClick(props.number)}>
        {props.number}
    </Link>
);

const BasicInfoLength = () => {
    const [trip, setTrip] = useState(1);
    return (
        <Typography component="div">
            <Box
                sx={{
                    color: "#018786",
                    width: "923px",
                    height: "116px",
                    ml: "499px",
                    mt: "286px",
                    fontWeight: "bold",
                    fontFamily: "Montserrat, sans-serif",
                    whiteSpace: "nowrap",
                    fontSize: "76px",
                    textAlign: "center",
                }}
            >
                How many days do you tabi?
            </Box>
            <DayItem onClick={setTrip} />
        </Typography>
    );
};

export default BasicInfoLength;
