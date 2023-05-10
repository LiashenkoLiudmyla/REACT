import { useContext } from 'react';
import styled from "styled-components";

import Card from '../components/Card';
import { MainHeader } from '../components/MainHeader';

import { CardContext } from "../context/CardContext";


export const Main = () => {

    const { cardData }  = useContext(CardContext);

    return(
        <MainContainer>
            <MainHeader />
            {cardData.map((item) => {
                return item.data.map((cardArray) => {
                return <Card
                    key={cardArray.id}
                    cardNumber={cardArray.card.numbers}
                    cardType={cardArray.card.type}
                    date={cardArray.card.expiry_date}
                    cvv={cardArray.card.cvv}
                    cardOwner={item.user_name}
                    statistic={cardArray.statistic}
                />
            })})}
        </MainContainer>
    )
};

const MainContainer = styled.div`
    margin: 0 auto;
    max-width: 1140px;
`;