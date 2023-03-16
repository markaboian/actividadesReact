import React, { useState } from 'react'
import { useEffect } from 'react'

const Pizza = (props) => {

    const [order, setOrder] = useState(null)

    useEffect(() => {
        const timerOrder = setTimeout(() => {
            setOrder(props.type)
        }, 2000)

        return () => clearTimeout(timerOrder)

    }),[props.type]

    const cancelOrderButton = () => {
        alert("The order was cancelled")
        console.log("Dismounted");
    }


    return (

        <div>
            <h1>Your order:</h1>
            {
                order ? 
                    <div>
                        <p>Pizza {order}</p> <button onClick={cancelOrderButton}>Cancel order</button>
                    </div> 
                    : <p>Loading order...</p>
            }
            
        </div>

    )
}

export default Pizza