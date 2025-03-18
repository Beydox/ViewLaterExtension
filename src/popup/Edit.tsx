import React from "react"
import { useState, useEffect } from "react";
import { Card, CardContent, CardActions, Button, TextField, Alert } from "@mui/material";
import PopupMenu from "./PopupMenu";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getItemById, updateItem } from "./db";
import SaveIcon from '@mui/icons-material/Save';



const Edit = () => {
    const [urlPath, setUrlPath] = useState('')
    const [note, setNote] = useState('')    
    const { id } = useParams();    
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    
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
    
    const handleUpdate = async () => {
        if (!id) {
          return;
        }
    
        try {
          await updateItem(Number(id), { name: urlPath, value: note });
          setMessage(`Запись с ID ${id} обновлена!`);
        } catch (error) {
          setMessage((error as Error).message);
        }
      };
    

    return (
        <>
        <PopupMenu />
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                <TextField 
                    id="outlined-basic" 
                    label="Outlined" 
                    variant="outlined" 
                    value={urlPath}
                    onChange={handleUrlInputChange} 
                    sx={{ mt: 2, width: 320 }}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    sx={{ mt: 2, width: 320 }}
                    value={note}
                    onChange={handleNoteInputChange} 
                />
                </CardContent>
                <CardActions>
                    <Button size="medium" 
              sx={{ mt: -1, bgcolor: "firebrick", ml: 1, mb: 1 }}
              variant="contained" endIcon={<SaveIcon />} 
                    onClick={handleUpdate}>Update</Button>
                    <Alert severity="success" color="warning" sx={{
                        height: "33px", ml: 4, 
                        width: "160px",
                        lineHeight: "1",
                        mb:2,
                        pb: 0.5,
                        pt: 0.5,
                        display: "flex",
                        overflow: "hidden",
                        justifyContent: "center"
                    }}>
                        Updates are saved!
                    </Alert>
                </CardActions>
            </Card>
            <p>{message}</p>
        </>
    )
}


export default Edit