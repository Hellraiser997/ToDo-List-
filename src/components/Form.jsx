import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Paper } from '@mui/material';

export default function Form({ adicionarTarefa }) {
    const [texto, setTexto] = useState(null);
    const [id, setId] = useState(0)
    
    const criarTarefa = (texto) => {
        const objetoTarefa = { texto: texto, id: id };
        setId(id + 1);
        adicionarTarefa(objetoTarefa);
    }
  return (
    <Paper>
    <div>
        <TextField 
        onChange={(e) => setTexto(e.target.value)}
        id="filled-basic" 
        label="Filled" 
        variant="filled" />
        <Button 
        variant="outlined" 
        onClick={() => criarTarefa(texto)}>Outlined</Button>
     </div>    
    </Paper>
  )
}


