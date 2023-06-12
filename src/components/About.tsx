import React, { Component } from 'react'
import NavBar from './NavBar'
import { Box, Container } from '@mui/material'

export class About extends Component {
  render() {
    return (
      <>
        <Box>
          <Container maxWidth='sm'>
            <h1>This is About Us page</h1>
            <h2>Under Development !!!!</h2>
          </Container>
        </Box>
      </>
    )
  }
}

export default About
