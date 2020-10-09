import React from "react";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import PersonPinIcon from '@material-ui/icons/PersonPin';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4),
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        marginTop: theme.spacing(2),
        width: "33%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down("sm")]: {
            width: "50%",
        },
        [theme.breakpoints.down("xs")]: {
            width: "80%",
        },
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.background.darkBlue,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2, 0),
        background: theme.palette.background.darkBlue,
        color: "#fff",
    },
    navlink: {
        textDecoration: "inherit",
        fontFamily: "lato",
        color: "#363130",
    },
}));


const Partner = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.container}>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <PersonPinIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Become Our Partner
        </Typography>
                    <form className={classes.form}>
                        <TextField
                            variant="outlined"
                            color="secondary"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                        />
                        <TextField
                            variant="outlined"
                            color="secondary"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                        />
                        <TextField
                            variant="outlined"
                            color="secondary"
                            margin="normal"
                            required
                            fullWidth
                            name="phone"
                            label="Phone"
                            type="phone"
                            id="phone"
                        />
                        <TextField
                            variant="outlined"
                            color="secondary"
                            margin="normal"
                            required
                            fullWidth
                            name="address"
                            label="Address"
                            type="address"
                            id="address"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"

                            className={classes.submit}
                        >
                            Submit
          </Button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Partner
