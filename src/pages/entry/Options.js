import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import ScoopOption from './ScoopOption'
import ToppingOption from './ToppingOption'

function Options({optionType}){
    //optionType is 'scopps' or 'toppings' depending on what is passed in

    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3030/${optionType}`)
        .then(response => setItems(response.data))
        .catch(error => {
            //do this later
        })
    }, [optionType])

    const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption 
    
    const optionItems = items.map(item => <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath}/>)

    return (
        <Row>
            {optionItems}
        </Row>
    )
}

export default Options