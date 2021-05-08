import React, { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom';

import {
    Container,
    ProductImage,
    ProductInfo,
    Info,
} from './styles'

import { AiOutlineClockCircle } from 'react-icons/ai'

import foodData from '../../assets/data/foods'

interface Params {
    id: string; 
}

interface Data {
    id: number;
    title: string;
    image: string;
    description: string;
    time_preparation: string;
}

const Detail:React.FC = () => {

    const { id } = useParams<Params>();
    const [food, setFood] = useState<Data>();

    useMemo(() => {
        const foodFind = foodData.find((item) => item.id === Number(id));
        setFood(foodFind)
    }, [id])

    return (
        <Container>
            <ProductImage>
                <img src={food?.image} alt=""/>
            </ProductImage>

            <ProductInfo>
                <Info>
                    <h1>{food?.title}</h1>

                    <h3>
                        {food?.description}.
                    </h3>

                    <h3>
                        {food?.description}.
                    </h3>

                    <p>
                        <AiOutlineClockCircle />
                        {food?.time_preparation} min preparation
                    </p>
                </Info>
            </ProductInfo>
        </Container>
    )
}

export default Detail