import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import { Paper } from '@mui/material';

export default function ListaItem({tarefa}) {

        return (
            <Paper>
          <ListItem
           
            secondaryAction={
              <IconButton 
              edge="end" 
              aria-label="comments">
                <ClearIcon />
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
              <ListItemText primary={tarefa.texto} />
            </ListItemButton>
          </ListItem>
            </Paper>
        );
}

