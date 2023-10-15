import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function Form() {
  return (
    <div>
        <TextField 
        id="filled-basic" 
        label="Filled" 
        variant="filled" />
        <Button variant="outlined">Outlined</Button>
     </div>    
  )
}


