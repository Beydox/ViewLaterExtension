import React from "react";
import { Box, Typography } from "@mui/material";
import WindowIcon from '@mui/icons-material/Window';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { Link } from "react-router-dom";


const PopupMenu = () => {
    return (
        <Box sx={{display: 'flex',flexDirection: 'row', py: 1, bgcolor: "FireBrick" }}>      
            <Link to="/">
                <Typography sx={{ color: 'white', fontSize: 14, px: 2 }}>< WindowIcon/>
                </Typography>
            </Link>  
            <Link to="/add">
                <Typography sx={{ color: 'white', fontSize: 14, px: 2 }}>
                <AddToPhotosIcon />
                </Typography>
            </Link>
            <Link to="/">
                <Typography sx={{ color: 'white', fontSize: 14, position: 'absolute', right: 0, px: 3 }} >
                <LiveHelpIcon />
                </Typography>
            </Link>            
        </Box>
    )
}


export default PopupMenu