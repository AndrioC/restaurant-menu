import React, { useMemo, useState } from 'react'

import {
    Container,
    Content
} from './styles'

import foodsData from '../../assets/data/foods'
import Food from './Food'

interface FoodData{
    id: number;
    title: string;
    image: string;
    price: number;
    reviews_qtd: number;
    time_preparation: string;
}

const Foods:React.FC = () => {

    const [foods, setFoods] = useState<FoodData[]>([])

    useMemo(() => {
        setFoods(foodsData)
    }, [])

    function renderFoods(){
        return (
            foods.map((item) => (
                <Food
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    reviews_qtd={item.reviews_qtd}
                    time_preparation={item.time_preparation}
                    key={item.id}
                />
            ))
        )
    }

    return (
        <Container>
            <Content>
                {renderFoods()}
            </Content>
        </Container>
    )
}

export default Foods