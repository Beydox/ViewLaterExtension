import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import { getItems, deleteItem } from "./db";
import { useEffect, useState } from 'react';
import { Tooltip, Typography } from '@mui/material';


const style = {
    width: 99,
    maxWidth: 99,
    overflow: "hidden",
    textOverflow: "ellipsis",
    borderStyle: "border-box"
  };

interface rowProps {
    id: number,
    name: string,
    value: string,
}


function Row(props: { row: rowProps; onRowsUpdate: () => void })  {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    
    // edit button behavior
    const handleEdit =  (id: number) => {
        navigate(`/edit/${id}`)
    }

    //delete button behavior
    const handleDelete = async (id: number) => {
        await deleteItem(id);
        props.onRowsUpdate();
    };

    const handleLink = () => {
        window.open(row.name)
    }

    return (
    <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} >
            <TableCell>
                <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen(!open)}
                >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
            </TableCell>
            <TableCell component="th" scope="row"  style={style}>
            <Tooltip title={row.name}>
                <Typography variant='body1' onClick={handleLink} sx={{
                    "&:hover": {
                        cursor: 'pointer'
                    }
                }} >
                    {row.name}
                </Typography>
                </Tooltip>
            </TableCell>
            <TableCell align="right">
                <Tooltip title="Edit">
                    <IconButton onClick={() => handleEdit(row.id)}>
                        <EditIcon />
                    </IconButton>
                </Tooltip>
            </TableCell>
            <TableCell align="right">
                <Tooltip title="Delete">
                    <IconButton onClick={()=> handleDelete(row.id)}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell style={style} sx={{p: 0}} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>
                        <pre>
                            {row.value}
                        </pre>
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>
    </React.Fragment>
  );
}


export default function CollapsibleTable()
{
    const [rows, setRows] = useState<{ id: number; name: string; value: string }[]>([]);

    useEffect(() => {
            loadItems();
    }, []);
    
    const loadItems = async () => {
        const storedItems = await getItems();
        setRows(storedItems.reverse());
    };
        
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table" >
                <TableBody>
                    {rows.map((row) => (
                    <Row key={row.id} row={row} onRowsUpdate={loadItems} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}