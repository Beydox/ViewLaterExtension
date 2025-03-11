import React from "react"
import { useState, useEffect } from "react";
import { Card, CardContent, CardActions, Button, TextField } from "@mui/material";
import PopupMenu from "./PopupMenu";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getItemById } from "./db";


const Edit = () => {
    const [urlPath, setUrlPath] = useState('')
    const [note, setNote] = useState('')    
    const { id } = useParams();    
    const navigate = useNavigate();
    
    //get item from db with item id
    const handleFetchItem = async (id: string) => {
        const fetchedItem = await getItemById(Number(id));
        if (fetchedItem) {
            setNote(fetchedItem.value)
            setUrlPath(fetchedItem.name)
        }        
    };

    useEffect(() => {
        if (id) handleFetchItem(id)     
    }, []);
    
    const handleUrlInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrlPath(e.target.value)
    }
    
    const handleNoteInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNote(e.target.value)
    }
    
    const handleSaveButton = (e: React.MouseEvent<HTMLElement>) => {
          //TODO: save variables value to database
        console.log(`${urlPath} and content is ${note}`)
        navigate("/")
    }

    return (
        <>
        <PopupMenu />
            <h2>Element's id is {id}</h2>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                <TextField 
                    id="outlined-basic" 
                    label="Outlined" 
                    variant="outlined" 
                    value={urlPath}
                    onChange={handleUrlInputChange} 
                    sx={{ mt: 2, width: 250 }} 
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    sx={{ mt: 2, width: 250 }}
                    value={note}
                    onChange={handleNoteInputChange} 
                />
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handleSaveButton}>Save</Button>
                </CardActions>
            </Card>
        </>
    )
}


export default Edit