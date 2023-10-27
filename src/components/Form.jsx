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
        document.getElementById("filled-basic").value = null
    }
  return (
    <Paper>
    <div>
        <TextField 
        onChange={(e) => setTexto(e.target.value)}
        id="filled-basic" 
        label="Filtrar tarefa..." 
        variant="filled" />
        <Button 
        variant="outlined" 
        onClick={() => criarTarefa(texto)}>Adicionar</Button>
        {/* <TextField 
        id="filled-basic" 
        label="Pesquisar Tarefa" 
        variant="filled" />
         <Button 
        variant="outlined" 
        onClick={() => criarTarefa(texto)}>Pesquisar</Button> */}
     </div>    
    </Paper>
  )
}


