import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function EditarTarefa({abrirCaixa, handleFechar, tarefa}) {


  return (
      <Dialog open={abrirCaixa}
      onClose={handleFechar}>
        <DialogTitle>Editar tarefa</DialogTitle>
        <DialogContent>
          <DialogContentText>
           
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            defaultValue={tarefa}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button >Cancelar</Button>
          <Button >Editar</Button>
        </DialogActions>
      </Dialog>
  );
}
