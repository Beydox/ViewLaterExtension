import React from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import WindowIcon from '@mui/icons-material/Window';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { Link } from "react-router-dom";


const PopupMenu = () => {
    return (
        <Box sx={{display: 'flex',flexDirection: 'row', py: 1, bgcolor: "FireBrick" }}>      
            <Link to="/">
                <Tooltip title="Home">
                    <Typography sx={{ color: 'white', fontSize: 14, px: 2 }}>< WindowIcon/>
                    </Typography>
                </Tooltip>
            </Link>  
            <Link to="/add">
                <Tooltip title="Add new">
                    <Typography sx={{ color: 'white', fontSize: 14, px: 2 }}>
                        <AddToPhotosIcon />
                    </Typography>
                </Tooltip>
            </Link>
            <Link to="/about">
                <Tooltip title="About">
                    <Typography sx={{ 
                        color: 'white', 
                        fontSize: 14, 
                        position: 'absolute', 
                        right: 0, px: 3 }} 
                    >
                        <LiveHelpIcon />
                    </Typography>
                </Tooltip>
            </Link>            
        </Box>
    )
}


export default PopupMenu