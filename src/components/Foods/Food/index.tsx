import React from 'react'

import {
    Container,
    ImageContent,
    InfoContent,
    FoodInfo,
    FoodReviewTime,
    FoodReviews,
    FoodTime,
} from './styles'

import { MdShoppingBasket } from 'react-icons/md'
import { AiFillStar, AiOutlineClockCircle } from 'react-icons/ai'

interface FoodProps{
    title: string;
    image: string;
    price: number;
    reviews_qtd: number;
    time_preparation: string;
}

const Food:React.FC<FoodProps> = ({ title, image, price, reviews_qtd, time_preparation }) => {
    return (
        <Container>
            <ImageContent>
                <img src={image} alt="food"/>
                <button>
                    <MdShoppingBasket />
                    Saiba mais
                </button>
            </ImageContent>

            <InfoContent>
                <FoodInfo>
                    <h1>{title}</h1>
                    <span>{price} $</span>
                </FoodInfo>

                <FoodReviewTime>
                    <FoodReviews>
                        <AiFillStar color="#348850"/>
                        <AiFillStar color="#348850"/>
                        <AiFillStar color="#348850"/>
                        <AiFillStar color="#348850"/>
                        <AiFillStar color="#86daa2"/>
                        <span>{reviews_qtd} Reviews</span>
                    </FoodReviews>

                    <FoodTime>
                        <AiOutlineClockCircle color="#348850"/>
                        <span>{time_preparation}</span>   
                    </FoodTime>
                </FoodReviewTime>
            </InfoContent>
        </Container>
    )
}

export default Food