import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Food.css';


const Food = (props) => {
    const { strMeal, strMealThumb, strInstructions, strYoutube, idMeal } = props.meal || {};

    const url = `/foods/${idMeal}`;
    return (
        <Col>
            <Card className='card' >
                <Card.Img
                    className="p-3 card-img"

                    variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions?.slice(0, 80)}
                    </Card.Text>
                    <Link className='btn btn-success' to={url}>Show Details</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Food;
