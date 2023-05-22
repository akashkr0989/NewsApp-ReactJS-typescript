import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import { environment } from '../../environment/development';


export const COUNTRIES_INTERFACE = {
  name: String,
  capital: String,
  flag: String,
  population: Number,
  region: String,
  callingCodes: []
}


let countries = [
  {
    name: 'United States',
    capital: 'Washington, D.C.',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Flag_of_the_United_States_%28Pantone%29.svg',
    population: 328.2,
    region: 'Americas',
    callingCodes: []
  }
];

const getRandomCountry = () => {
  const randomIndex = Math.floor(Math.random() * countries.length);
  return countries[randomIndex];
};

const CountryCard = () => {
  const [country, setCountry] = React.useState(getRandomCountry());

  //   const handleRandomClick = () => {
  //     setCountry(getRandomCountry());
  // };

  return (
    <Card sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      margin: '10px',
      maxWidth: 340,
    }}>
      <CardMedia
        sx={{ height: 140, }}
        image={country?.flag}
        title={country.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {country.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Capital: {country.capital}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Calling Code: {country.callingCodes[0]}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Population: {country.population} million
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Region: {country.region}
        </Typography>
        {/* <button onClick={handleRandomClick}>Random Country</button> */}
      </CardContent>
    </Card>
  );
};

const CountryList = () => {

  const [data, setData] = useState([null]);
  const [loader, setLoader] = useState(false);

  let skeleton = new Array(20).fill(0)



  useEffect(() => {
    async function fetchData() {
      const response = await fetch(environment.countryAPI);
      const data: [] = await response.json();
      setData(data);
      //   console.table(data);
      countries = data;
      setLoader(true);
    }

    fetchData();
  }, []);

  return (
    <div style={{ flexGrow: 1 }}>

      <Grid container spacing={3}>
        {!loader ? (
          skeleton.map((element: any) => {
            return <>
              <div style={{ paddingTop: '3%', paddingLeft: '5%', display: 'block' }} >
                <Skeleton variant="rectangular" width={275} height={200} >
                </Skeleton>
                <Skeleton />
                <Skeleton />
              </div>
            </>
          })

        ) : (
          data.map((element, index) => (
            <Grid item xs={12} sm={6} md={5} lg={3} key={index}>
              {<CountryCard />}
            </Grid>
          ))
        )
        }
      </Grid>
    </div>
  );
};

export default function About() {

  return (
    <div>
      <CountryList />
    </div>
  );
}

