import React from "react";
import {
  makeStyles,
  Typography,
  Container,
  Box,
  Grid,
} from "@material-ui/core";
import sellingCarData from "../asset/sellingCarData";

/*Custom Style*/
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: theme.spacing(4),
  },
  container: {
    marginBottom: theme.spacing(2),
    width: "100%",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  specs: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
}));

export default function ShowSingleCar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {sellingCarData.map((car) => {
        // if ("/car/" + car.title === props.location.pathname) {
        if (
          car.id === props.id
          /*here goes all the query matching props*/
        ) {
          return (
            <Container key={car.id} className={classes.container}>
              <div className={classes.paper} style={{ paddingTop: "30px" }}>
                <Typography className={classes.typography} variant="h5">
                  Key Specifications of {car.title}
                </Typography>
              </div>
              {/*Hard coded data will be changed after getting api*/}
              <div style={{ width: "90%" }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Box display="flex" p={1} bgcolor="background.paper">
                      <Box
                        style={{ fontFamily: "lato" }}
                        p={1}
                        flexGrow={1}
                        bgcolor="grey.300"
                      >
                        ARAI Mileage
                      </Box>
                      <Box
                        style={{ fontFamily: "lato" }}
                        p={1}
                        bgcolor="grey.300"
                      >
                        17.0 kmpl
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box display="flex" p={1} bgcolor="background.paper">
                      <Box
                        style={{ fontFamily: "lato" }}
                        p={1}
                        flexGrow={1}
                        bgcolor="grey.300"
                      >
                        Fuel Type
                      </Box>
                      <Box
                        style={{ fontFamily: "lato" }}
                        p={1}
                        bgcolor="grey.300"
                      >
                        {car.fuel}
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box display="flex" p={1} bgcolor="background.paper">
                      <Box
                        style={{ fontFamily: "lato" }}
                        p={1}
                        flexGrow={1}
                        bgcolor="grey.300"
                      >
                        Engine Displacement (cc)
                      </Box>
                      <Box
                        style={{ fontFamily: "lato" }}
                        p={1}
                        bgcolor="grey.300"
                      >
                        1956
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box display="flex" p={1} bgcolor="background.paper">
                      <Box
                        style={{ fontFamily: "lato" }}
                        p={1}
                        flexGrow={1}
                        bgcolor="grey.300"
                      >
                        Max Torque (nm@rpm)
                      </Box>
                      <Box
                        style={{ fontFamily: "lato" }}
                        p={1}
                        bgcolor="grey.300"
                      >
                        350Nm@1750-2500rpm
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box display="flex" p={1} bgcolor="background.paper">
                      <Box
                        style={{ fontFamily: "lato" }}
                        p={1}
                        flexGrow={1}
                        bgcolor="grey.300"
                      >
                        TransmissionType
                      </Box>
                      <Box
                        style={{ fontFamily: "lato" }}
                        p={1}
                        bgcolor="grey.300"
                      >
                        {car.transmission}
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box display="flex" p={1} bgcolor="background.paper">
                      <Box
                        style={{ fontFamily: "lato" }}
                        p={1}
                        flexGrow={1}
                        bgcolor="grey.300"
                      >
                        Fuel Tank Capacity
                      </Box>
                      <Box
                        style={{ fontFamily: "lato" }}
                        p={1}
                        bgcolor="grey.300"
                      >
                        50
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box display="flex" p={1} bgcolor="background.paper">
                      <Box
                        style={{ fontFamily: "lato" }}
                        p={1}
                        flexGrow={1}
                        bgcolor="grey.300"
                      >
                        Service Cost (Avg. of 5 years)
                      </Box>
                      <Box
                        style={{ fontFamily: "lato" }}
                        p={1}
                        bgcolor="grey.300"
                      >
                        Rs.7,914
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box display="flex" p={1} bgcolor="background.paper">
                      <Box
                        style={{ fontFamily: "lato" }}
                        p={1}
                        flexGrow={1}
                        bgcolor="grey.300"
                      >
                        Max Power (bhp@rpm)
                      </Box>
                      <Box
                        style={{ fontFamily: "lato" }}
                        p={1}
                        bgcolor="grey.300"
                      >
                        167.67bhp@3750rpm
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box display="flex" p={1} bgcolor="background.paper">
                      <Box
                        style={{ fontFamily: "lato" }}
                        p={1}
                        flexGrow={1}
                        bgcolor="grey.300"
                      >
                        Seating Capacity
                      </Box>
                      <Box
                        style={{ fontFamily: "lato" }}
                        p={1}
                        bgcolor="grey.300"
                      >
                        5
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box display="flex" p={1} bgcolor="background.paper">
                      <Box
                        style={{ fontFamily: "lato" }}
                        p={1}
                        flexGrow={1}
                        bgcolor="grey.300"
                      >
                        Boot Space (Litres)
                      </Box>
                      <Box
                        style={{ fontFamily: "lato" }}
                        p={1}
                        bgcolor="grey.300"
                      >
                        425
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box display="flex" p={1} bgcolor="background.paper">
                      <Box
                        style={{ fontFamily: "lato" }}
                        p={1}
                        flexGrow={1}
                        bgcolor="grey.300"
                      >
                        Body Type
                      </Box>
                      <Box
                        style={{ fontFamily: "lato" }}
                        p={1}
                        bgcolor="grey.300"
                      >
                        {car.body}
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </div>
            </Container>
          );
        }
        return "";
      })}

      {/*Key specs-----------------------------------------------*/}
    </div>
  );
}
