import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Paper } from '@mui/material';
import EditarTarefa from './EditarTarefa';

export default function ListaItem({tarefa, editarTarefa}) {

    const [abrirCaixa, setAbrirCaixa] = useState(false);

    const handleFechar = () => {
        setAbrirCaixa(!abrirCaixa);
    }

        return (
            <div>
            <EditarTarefa 
            abrirCaixa={abrirCaixa}
            handleFechar={handleFechar}
            editarTarefa={editarTarefa}
            tarefa={tarefa}
            />
            <Paper>
          <ListItem
           
            secondaryAction={
              <IconButton 
              edge="end" 
              aria-label="comments">
                <EditNoteIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  tabIndex={-1}
                  disableRipple
                  
                />
              </ListItemIcon>
              <ListItemText 
              primary={tarefa.texto} 
              onClick={() => setAbrirCaixa(true)}/>
            </ListItemButton>
          </ListItem>
            </Paper>
            </div>
        );
}

