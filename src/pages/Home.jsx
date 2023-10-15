import React, { useState } from 'react'
import Form from '../components/Form'
import ListaItem from '../components/ListaItem'
import { List } from '@mui/material';


export default function Home() {
    const [tarefas, setTarefas] = useState([]);

    const adicionarTarefa = (tarefa) => {
        console.log(tarefa)
        setTarefas([...tarefas, tarefa])
    }

  return (
    <div>
        <Form adicionarTarefa={adicionarTarefa} />
        <List>
            {tarefas.map((tarefa) => (
                <div key={tarefa.id}>
                    <ListaItem tarefa={tarefa} />
                </div>
            ))}
        </List>
    </div>
  )
}
