import React, { useState } from 'react'
import Form from '../components/Form'
import ListaItem from '../components/ListaItem'
import { List } from '@mui/material';


export default function Home() {
    const [tarefas, setTarefas] = useState([]);

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

        // tarefas.splice(id, 1, {texto: textoEditado, id:id});
        setTarefas(tarefasArray)
    }
  return (
    <div>
        <Form adicionarTarefa={adicionarTarefa} />
        <List>
            {tarefas.map((tarefa) => (
                <div key={tarefa.id}>
                    <ListaItem editarTarefa={editarTarefa} tarefa={tarefa} />
                </div>
            ))}
        </List>
    </div>
  )
}
