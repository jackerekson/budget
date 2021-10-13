import React, { useState } from 'react'
import Income from './Income'
import Unbudgeted from './Unbudgeted'
import Input from './Input'

const App = () => {
    const [income, setIncome] = useState(0)
    const [unbudgeted] = useState(0)

    const handleChange = (e) => {
        setIncome(e.target.value)
    }

    return (
        <>
            <header>Time to Budget</header>
            <div>
                <section className='top'>
                    <Income handleChange={handleChange} income={income} />
                </section>
                <section className='bottom'>
                    <Unbudgeted unbudgeted={unbudgeted} income={income} />
                </section>
            </div>

            <section>
                <Input />
            </section>
        </>
    )
}

export default App
