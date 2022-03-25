import React, { useEffect, useState } from 'react';
import Food from '../../Food/Food';
import './Foods.css'
const Foods = () => {
    const [amrfoods, setAmrfoods] = useState([])
    const [items, setItems] = useState([])
    //  console.log(items);
    useEffect( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setAmrfoods(data.meals))
    },[])
    const addToCart = (thefood) =>{
        const newItem = [...items , thefood]
        setItems(newItem)
    }
    return (
        
        <div className='foods-container'>
            <div className='food-container'>
                {
                    amrfoods.map( (thefood) => <Food key={thefood.idMeal}
                    singlefood={thefood}
                    addToCart={addToCart}
                    ></Food>)
                }
            </div>
            <div className='food-detail'>
                <h1>food details</h1>
                <h3>Select Items:{items.length}</h3>
            </div>
        </div>
    );
};

export default Foods;