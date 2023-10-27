import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Paper } from '@mui/material';
import { Container } from './Form.styled';

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
    <Container>
        <TextField
        onChange={(e) => setTexto(e.target.value)}
        id="filled-basic" 
        label="Tarefa" 
        variant="filled" />
        <Button 
        variant="outlined" 
        onClick={() => criarTarefa(texto)}>Adicionar</Button>
     </Container>    
    </Paper>
  )
}


