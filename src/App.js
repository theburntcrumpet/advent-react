import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, useTheme, ThemeProvider } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import randomGreeting from './SeasonsGreetings';
import {getAdventDay, getAdventDaysUntil} from "./AdventDays";
import { Grid } from "@mui/material";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

export function YoutubeEmbed(props) {
  return <iframe width="560" height="315" src={props.url} allowfullscreen></iframe>;
}

export function dayOfMonth(){
  return new Date().getDate();
}

export function monthOfYear(){
  return new Date().getMonth() + 1;
}

export function ChristmasCard(props){
  var adventDay = getAdventDay(props.day);
  console.log(adventDay);
  console.log(dayOfMonth());
  if (props.day > dayOfMonth()){
    return (
      <Container>
        <Typography
      variant="h5"
      color="text.secondary"
      gutterBottom
    >Nice Try! You'll have to wait until {props.day}!</Typography>
        </Container>
    );
  }
  return (
    <Container>
      <Typography
      variant="h5"
      color="text.secondary"
      gutterBottom
    >Day {props.day} - {25 - props.day} {randomGreeting()}</Typography>
    
    <Typography
      variant="p-2"
      color="text.secondary"
      gutterBottom
    >Fun Christmas Fact: {adventDay.fact}</Typography>
    <br/> <br />
    <YoutubeEmbed url={adventDay.url}></YoutubeEmbed>
  </Container>
  );
}

export function ChristmasAppBar(){
  return <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Festive Countdown!
          </Typography>
        </Toolbar>
      </AppBar>
        </Box>
}

export function DayButtons(props){
  return props.days.map((item,index)=>{
    return <Grid item xs={2}>
        <Button component={Link} component={Link} to={`/${index+1}`}>Day {index+1}</Button>
      </Grid>
});
}

export function PreviousDays(){
  return (
  <Card>
    <br />
    <Container>
      <Typography
      variant="h5"
      color="text.secondary"
      gutterBottom
    >Previous Days</Typography>
      <CardContent>
        <Grid container spacing={2}>
          <DayButtons days={getAdventDaysUntil(dayOfMonth())}/>
        </Grid>
      </CardContent>
      </Container>
    </Card>);
}


export function ChristmasGreeting(props){
  if (dayOfMonth() > 25 || monthOfYear() != 12){
    return ChristmasCard({"day" : 25});
  } else{
    return ChristmasCard({"day" : props.day ? props.day: dayOfMonth()});
  }
}

export function AppCards(props){
  const darkTheme = createTheme({
    palette: {
      mode: "dark"
    }
  });
  
  return <ThemeProvider theme={darkTheme}>
        <ChristmasAppBar/>
        <CssBaseline />
        <Container>
          <br/>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <ChristmasGreeting day={useParams().day}/>
            </CardContent>
          </Card>
          <br/>
          <PreviousDays />
        </Container>
      </ThemeProvider>
}

export default function BasicCard() {
  return (

    <Router>
      <Routes>
          <Route path="/" element={<AppCards />} />
      </Routes>
      <Routes>
          <Route path=":day" element={<AppCards />} />
      </Routes>
    </Router>
  );
}
