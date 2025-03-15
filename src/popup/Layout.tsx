import React from 'react'
import { Box } from '@mui/material'



const Layout = ({children}: any) => {
    return (
        <Box sx={{
            backgroundColor: "lavender",
            color: "primary.contrastText",
            pb: 0.5
            
          }}>
                        
            {children}
        </Box>
  )
}

export default Layout
