import React, { useEffect, useState } from 'react'
import { Form, FormControl, Row } from 'react-bootstrap'
import Food from '../Food/Food'

const Showcase = () => {
    const [meals, setMeals] = useState([])

    const [searchText, setSearchText] = useState('');
    const handleSearch = (e) => {
        const newSearch = e.target.value;
        setSearchText(newSearch);
    }
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])

    return (
        <>
            <Form className="d-flex justify-content-center align-items-center w-50 mx-auto my-4 ">
                <FormControl
                    onChange={(event) => handleSearch(event)}
                    type="search"
                    placeholder="Search meals"
                    className="me-2"
                    aria-label="Search"
                />

            </Form>
            <Row xs={1} md={3} className='my-2'>
                {
                    meals?.map(meal => <Food
                        key={meal.strMeal}
                        meal={meal}
                    ></Food>)
                }
            </Row>
        </>
    )
}

export default Showcase;

