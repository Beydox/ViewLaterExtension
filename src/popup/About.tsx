import React from 'react'
import PopupMenu from "./PopupMenu";
import { Box, Card, CardActions, CardContent, Typography } from '@mui/material';


const About = () => {
  return (
    <>
      <PopupMenu />
      <Card sx={{ minWidth: 320, minHeight: 300 }}>
          <CardContent>
          <Box
  component="img"
  sx={{
    height: 64,
    width: 64,
    maxHeight: { xs: 64, md: 64 },
    maxWidth: { xs: 64, md: 64 },
  }}
  alt="The house from the offer."
  src="./icon.png"
/>
           <Typography variant='h6'>ViewLater+ version 1.0.0</Typography>
          </CardContent>
          <CardActions>
            
          </CardActions>
      </Card>
    </>
  )
}

export default About
