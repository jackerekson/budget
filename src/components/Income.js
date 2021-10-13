import React from 'react'

const Income = ({handleChange, income}) => {

    return (
        <div>
            Monthly Income
            <br />
            $<input type='text' onChange={handleChange} placeholder={income} />
        </div>
    )
}

export default Income
