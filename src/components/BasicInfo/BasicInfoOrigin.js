import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const BasicInfoOrigin = () => {
    const [origin, setOrigin] = React.useState(10);

    const handleChange = (event) => {
        setOrigin(event.target.value);
    };
    return (
        <>
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
            <Box
                sx={{
                    display: "flex",
                    minWidth: 120,
                    justifyContent: "center",
                }}
            >
                <FormControl sx={{ m: 1, minWidth: "35rem" }}>
                    <InputLabel id="demo-simple-select-label">
                        origin
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={origin}
                        label="Tokyo"
                        onChange={handleChange}
                        sx={{ fontSize: "2.2rem" }}
                    >
                        <MenuItem sx={{ fontSize: "2.2rem" }} value={10}>
                            Tokyo
                        </MenuItem>
                        <MenuItem sx={{ fontSize: "2.2rem" }} value={20}>
                            Osaka
                        </MenuItem>
                        <MenuItem sx={{ fontSize: "2.2rem" }} value={30}>
                            Fukuoka
                        </MenuItem>
                        <MenuItem sx={{ fontSize: "2.2rem" }} value={40}>
                            Overseas
                        </MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </>
    );
};

export default BasicInfoOrigin;
