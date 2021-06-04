import React from 'react'

import DisplayMessage from './components/DisplayMessage'
import Todos from './components/Todos'

export default function App() {
    return (
        <div>
            <DisplayMessage />
            <Todos />
        </div>
    )
}
