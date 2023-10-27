import React, { useState } from 'react'
import Form from '../components/Form'
import ListaItem from '../components/ListaItem'
import { List } from '@mui/material';


export default function Home() {
    const [tarefas, setTarefas] = useState([]);
    const [buscar, setBuscar] = useState('')

    console.log(tarefas)
    const tarefasFiltradas = tarefas.filter((task) => task.texto.includes(buscar));
    console.log(tarefasFiltradas)

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
        <input
        type='text'
        placeholder='Filtrar tarefas'
        value={buscar}
        onChange={(e) => setBuscar(e.target.value)}
        />
    </div>
  )
}
