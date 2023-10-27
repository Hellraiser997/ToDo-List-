import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function EditarTarefaCaixa({abrirCaixa, handleFechar, tarefa, editarTarefa}) {
  const [textoEditado, setTextoEditado] = useState(tarefa.texto)
  const textHandler = () => {
    editarTarefa(tarefa.id, textoEditado)
    handleFechar();
  }

  return (
      <Dialog 
      open={abrirCaixa}
      onClose={handleFechar}>
        <DialogTitle>{"Editar tarefa"}</DialogTitle>
        <DialogContent>
          <TextField
            defaultValue={textoEditado}
            onChange={ (e) => setTextoEditado(e.target.value)}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFechar}>Cancelar</Button>
          <Button onClick={textHandler}>Editar</Button>
        </DialogActions>
      </Dialog>
  );
}
