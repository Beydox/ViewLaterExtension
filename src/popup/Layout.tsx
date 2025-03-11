import React from 'react'
import { Box } from '@mui/material'



const Layout = ({children}: any) => {
    return (
        <Box sx={{
            backgroundColor: "primary.main",
            color: "primary.contrastText",
            borderRadius: 1,
          }}>
                        
            {children}
        </Box>
  )
}

export default Layout
