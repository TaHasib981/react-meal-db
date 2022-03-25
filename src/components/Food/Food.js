import './Food.css'
const Food = ( props)  => {
    // console.log(props);

    const {strMeal, strMealThumb,} = props.singlefood
    // console.log(addToCart);
    return (
        <div className='food-details'>
              <img src={strMealThumb} alt="" />
            <h4>Food Name:{strMeal} </h4>
            <button onClick={() => props.addToCart(props.singlefood)}>Add to Buy</button>
        </div>
    );
};

export default Food;