import React from "react";
import { Card, CardContent, CardActions } from "@mui/material";
import PopupMenu from "./PopupMenu";
import CollapsibleTable from './ItemsTable'


const Home = () => {   
    return (
        <>  
        <PopupMenu />
        <Card variant="outlined" sx={{overflow: "hidden", minHeight: "300px"}}>
            <CardContent>            
            <CollapsibleTable/>
            </CardContent>
            <CardActions>             
            </CardActions>
        </Card>
        </>
    );
}


export default Home;