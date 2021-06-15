import './Menu.css'
import React from "react"

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/conteudo01/123">Conteudo 01</a>
                </li>
                <li>
                    <a href="/conteudo02">Conteudo 02</a>
                </li>
                <li>
                    <a href="/conteudo03">Conteudo 03</a>
                </li>
                <li>
                    <a href="/conteudo04">Conteudo 04</a>
                </li>
            </ul>
        </nav>
    </aside>
)
export default Menu