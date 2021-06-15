import React from 'react'
import { useParams } from 'react-router-dom'

const Conteudo01 = props => {

    const  { usuario } = useParams()

    return (
        <div>
            <h1>Conteudo 01</h1>
            <h3>Usuario: { usuario }</h3>
        </div>
    )
}
export default Conteudo01