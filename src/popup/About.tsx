import React from 'react'
import PopupMenu from "./PopupMenu";
import { Card, CardActions, CardContent, Typography } from '@mui/material';


const About = () => {
  return (
    <>
      <PopupMenu />
      <Card sx={{ minWidth: 320, minHeight: 300 }}>
          <CardContent>
           <Typography variant='h6'>About Extension</Typography>
          </CardContent>
          <CardActions>
            
          </CardActions>
      </Card>
    </>
  )
}

export default About
