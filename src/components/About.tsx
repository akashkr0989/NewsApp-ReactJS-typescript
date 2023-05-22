import React, { Component } from 'react'
import NavBar from './NavBar'

export class About extends Component {
  render() {
    return (
      <div>

        <h1>This is About Us page</h1>
        <h2>Under Development !!!!</h2>
      </div>
    )
  }
}

export default About

// import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
// import React from 'react';


// const countries = [
//   {
//     name: 'United States',
//     capital: 'Washington, D.C.',
//     flag: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Flag_of_the_United_States_%28Pantone%29.svg',
//     population: 328.2,
//     region: 'Americas',
//   },
//   {
//     name: 'France',
//     capital: 'Paris',
//     flag: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg',
//     population: 66.99,
//     region: 'Europe',
//   },
//   //... and so on for other countries
// ];

// const getRandomCountry = () => {
//   const randomIndex = Math.floor(Math.random() * countries.length);
//   return countries[randomIndex];
// };

// const CountryCard = () => {
//   const [country, setCountry] = React.useState(getRandomCountry());

//   const handleRandomClick = () => {
//     setCountry(getRandomCountry());
//   };

//   return (
//     <Card sx={{
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'space-between',
//       margin: '10px',
//       maxWidth: 340,
//     }}>
//       <CardMedia
//         sx={{  height: 140,}}
//         image={country.flag}
//         title={country.name}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="h2">
//           {country.name}
//         </Typography>
//         <Typography variant="body2" color="textSecondary" component="p">
//           Capital: {country.capital}
//         </Typography>
//         <Typography variant="body2" color="textSecondary" component="p">
//           Population: {country.population} million
//         </Typography>
//         <Typography variant="body2" color="textSecondary" component="p">
//           Region: {country.region}
//         </Typography>
//         <button onClick={handleRandomClick}>Random Country</button>
//       </CardContent>
//     </Card>
//   );
// };

// const CountryList = () => {
//   // const classes = useStyles();
//   return (
//     <div style={{flexGrow: 1}}>
//       <Grid container spacing={3}>
//         {[...Array(20)].map((_, index) => (
//           <Grid item xs={12} sm={6} md={5} lg={3} key={index}>
//             <CountryCard />
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };

// export default function About() {
//   return (
//     <div>
//       <CountryList />
//     </div>
//   );
// }
