import React from "react";
import { Card, CardContent, CardActions } from "@mui/material";
import PopupMenu from "./PopupMenu";
import CollapsibleTable from './ItemsTable'


const Home = () => {   
    return (
        <>  
        <PopupMenu />
        <Card>
            <CardContent sx={{overflow: "hidden"}}>            
            <CollapsibleTable/>
            </CardContent>
            <CardActions>             
            </CardActions>
        </Card>
        </>
    );
}


export default Home;