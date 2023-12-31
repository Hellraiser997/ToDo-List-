import React, { useState } from 'react'
import Form from '../components/Form'
import ListaItem from '../components/ListaItem'
import { List, Paper, TextField } from '@mui/material';


export default function Home() {
    const [tarefas, setTarefas] = useState([]);
    const [buscar, setBuscar] = useState('')

    const tarefasFiltradas = tarefas.filter((task) => task.texto.includes(buscar));

    const listaTarefas = tarefasFiltradas.length > 0 ? tarefasFiltradas : tarefas;


    const adicionarTarefa = (tarefa) => {
        setTarefas([...tarefas, tarefa])
    }

    const editarTarefa = (id, textoEditado) => {
        var tarefasArray = [...tarefas];

        for (var i in tarefasArray) {
            if (tarefasArray.hasOwnProperty(i)) {
                if (tarefasArray[i].id === id) {
                    tarefasArray[i].texto = textoEditado;
                }
            }
        }
        setTarefas(tarefasArray)
    }

  return (
    <div>
        <Form adicionarTarefa={adicionarTarefa} />
        <List>
            {listaTarefas.map((tarefa) => (
                <div key={tarefa.id}>
                    <ListaItem editarTarefa={editarTarefa} tarefa={tarefa} />
                </div>
            ))}
        </List>
        <Paper> 
        <TextField 
        onChange={(e) => setBuscar(e.target.value)}
        id="filled-basic" 
        label="Filtrar tarefa"
        variant="filled"
        />
        </Paper>

        {/* <input
        type='text'
        placeholder='Filtrar tarefas'
        value={buscar}
        /> */}
    </div>
  )
}
