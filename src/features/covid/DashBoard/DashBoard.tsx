import React, { useEffect } from "react";
import styles from "./DashBoard.module.css";
import { makeStyles } from "@material-ui/core/styles";
import {
 AppBar,
 Toolbar,
 Typography,
 Container,
 Grid,
} from "@material-ui/core";

import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../app/hooks";

import { selectDaily, fetchAsyncGetDaily} from "../covidSlice";
import Cards from "../Cards/Cards";
import Chart from "../Chart/Chart";
import PieChart from "../PieChart/PieChart";
import SwithCountry from "../SwitchCountry/SwitchCountry";

const useStyles = makeStyles((theme) => ({
 title: {
  flexGrow: 1,
 },
 content: {
  marginTop: 85,
 },
}));

const DashBoard: React.FC = () => {
 const classes = useStyles();
 const dispatch = useAppDispatch();
 const daily = useSelector(selectDaily);

 useEffect(() => {
  dispatch(fetchAsyncGetDaily("Japan"));
 }, [dispatch]);

 return (
  <div>
   <AppBar position="absolute">
    <Toolbar>
     <Typography variant="h6" className={classes.title}>
      コロナウイルス 国別感染者数 死者数
     </Typography>
     <div>
         <Typography variant="body1">
             更新日：{new Date(daily[daily.length - 1].Date).toLocaleDateString()}
         </Typography>
     </div>
    </Toolbar>
   </AppBar>

   <Container className={classes.content}>
    <div className={styles.container}>
     <SwithCountry />
    </div>
    <Grid container spacing={3}>
     <Grid item xs={12} md={6}>
      <Cards />
     </Grid>

     <Grid item xs={12} md={6}>
      <PieChart />
     </Grid>

     <Grid item xs={12} md={12}>
      <Chart />
     </Grid>
    </Grid>
   </Container>
  </div>
 );
};

export default DashBoard;