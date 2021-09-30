import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import './FoodDetails.css';

const FoodDetails = () => {


    // state for setting selected food
    const [food, setFood] = useState([]);
    const { strMealThumb, strMeal, strInstructions } = food[0] || {};

    // Ust history api by router
    let history = useHistory();
    // useParams is react-router hook not react's mind  it 
    const { foodId } = useParams();
    // api dia call korar poreo  page reload na kore date show kore kamna?
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
            .then(res => res.json())
            .then(data => setFood(data.meals))
    }, [])



    // Add event handler for routing by button
    const handleFoodClick = () => {
        history.push('/foods');
    }



    return (
        <Card className='my-4 text-align-center card-container'>
            <Card.Img className="img-fluid" style={{ height: '270px' }} variant="top" src={strMealThumb} />
            <Card.Body>
                <Card.Title>{strMeal}</Card.Title>
                <Card.Text>
                    {strInstructions?.slice(0, 240)}
                </Card.Text>
            </Card.Body>
            <button className='btn btn-outline-secondary' onClick={handleFoodClick}>Go Home        </button>
        </Card>
    )
}

export default FoodDetails;
