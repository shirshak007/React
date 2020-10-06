import React, { useEffect } from "react";
import {
    makeStyles,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
} from "@material-ui/core";

import Axios from "axios";

/*CUSTOM STYLE*/

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    formControl: {
        margin: theme.spacing(1),
        width: "100%",
    },
}));

export default function SelectBrand(props) {
    const classes = useStyles();
    const [Brand, setBrand] = React.useState("");

    const handleChangeBrand = (event) => {
        setBrand(event.target.value);
        props.onchangebrand(event.target.value);

    };
    const [CarData, setCarData] = React.useState([]);
    useEffect(() => {
        getCarName();
        // console.log(Brand);
    }, [Brand]);

    async function getCarName() {
        const config = {
            method: "get",
            url:
                "https://private-anon-50a794b9c7-carsapi1.apiary-mock.com/manufacturers",
            headers: {},
        };
        await Axios(config)
            .then((res) => {
                setCarData(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
        //console.log("done");
    }

    return (

        <div className={classes.root}>
            <FormControl
                variant="outlined"
                color="secondary"
                style={{ width: "100%" }}
            >
                <InputLabel id="demo-simple-select-outlined-label">
                    Select Brand
        </InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={Brand}
                    onChange={handleChangeBrand}
                    label="Select Brand"
                >
                    {CarData.map((Car) => (
                        <MenuItem
                            style={{ paddingLeft: "10px" }}
                            key={Car.id}
                            value={Car.name}
                        >
                            {Car.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
