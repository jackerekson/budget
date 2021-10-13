import React, { useState } from 'react'
// import Cards from './Cards'

const Input = () => {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [nameArr, setNameArr] = useState([])
    const [amountArr, setAmountArr] = useState([])

    const updateAmount = (e) => {
        setAmount(e.target.value)
    }

    const updateName = (e) => {
        setName(e.target.value)
    }

    const addCard = () => {
        console.log(nameArr, amountArr)
        console.log('hit')
        nameArr.map((e,i) => {
            return(
                <div>
                    <div>{e}</div>
                    <div>{amountArr[i]}</div>
                </div>
            )
        })
    }   

    const addArr = (e) => {
        e.preventDefault()
        setNameArr([...nameArr, name])
        setAmountArr([...amountArr, amount])
        addCard()
    }



    return (
        <div>
            <form type='submit' >
                <input onChange={updateName} placeholder='Name'/>
                <br />
                $<input onChange={updateAmount} placeholder='Amount' />
                <button onClick={addArr} className='add' type='submit'>+Add</button>
            </form>
            <div>
                {addCard}
            </div>
        </div>
    )
}

export default Input
