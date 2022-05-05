import React from "react";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

import { GiHastyGrave } from "react-icons/gi";
import { MdLocalHospital } from "react-icons/md";

import { useSelector } from "react-redux";
import { selectDaily } from "../covidSlice";

const Cards: React.FC = () => {
  const daily = useSelector(selectDaily);
  return (
    <div className={styles.container}>
      <Grid container spacing={1} justify="center">
        <Grid item xs={12} md={12} component={Card} className={styles.infected}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <MdLocalHospital />
              感染者数
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={daily[daily.length - 1].Confirmed}
                duration={1.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={12} component={Card} className={styles.deaths}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <GiHastyGrave />
              死者数
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={daily[daily.length - 1].Deaths}
                duration={1.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;