import React from 'react'
import { CssBaseline, Grid } from '@mui/material'
import Header from './components/Header'
import List from './components/LIst/List'
import Map from './components/Map/Map'

const App = () => {
  return (
    <div>
   <CssBaseline />   
   <Header/>
   <Grid container spacing={3} style={{width:'100%'}}>
    <Grid item sx={12} md={4}>
      <List/>
    </Grid>
    <Grid item sx={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Map/>      
    </Grid>
   </Grid>
    </div>
  )
}

export default App
