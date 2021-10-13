import React from 'react'

const Unbudgeted = ({ unbudgeted, income }) => {

    

    return (
        <div>
            <p>Unbudgeted <br /> ${income-unbudgeted}</p>
        </div>
    )
}

export default Unbudgeted
