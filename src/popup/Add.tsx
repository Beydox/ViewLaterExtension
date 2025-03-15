import React from "react";
import { useState } from "react";
import { Card, CardContent, CardActions, Button, TextField } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import PopupMenu from "./PopupMenu";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { addItem } from "./db";


//форма для создания и сохранения в базе данных елементов. Состоит из формы и кнопки сохранить
const Add = ()=> {
  const [urlPath, setUrlPath] = useState('')
  const [note, setNote] = useState('')
    const { id } = useParams();

    const navigate = useNavigate();
   

    const handleUrlInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUrlPath(e.target.value)
    }

    const handleNoteInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNote(e.target.value)
    }

    const handleSaveButton = async (e: React.MouseEvent<HTMLElement>) => {
      //TODO: save variables value to database
      console.log(`${urlPath} and content is ${note}`)
      if (urlPath && note) {
              await addItem({ name: urlPath, value: note });
              setUrlPath("");
              setNote("");
      }
      navigate("/")
    }

    return (
      <>

      <PopupMenu />
        <Card sx={{ minWidth: 320 }}>
          <CardContent>
            <TextField 
              id="outlined-basic" 
              label="Outlined" variant="outlined" 
              value={urlPath}
              onChange={handleUrlInputChange} 
              sx={{ mt: 2, width: 320 }} />
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
              onClick={handleSaveButton} 
              sx={{ mt: -1, bgcolor: "firebrick", ml: 1, mb: 1 }}
              variant="contained" endIcon={<SaveIcon />}
              >
                Save
              </Button>
          </CardActions>
        </Card>
        </>
    )
}


export default Add