import styled from "styled-components";
import visaLogo from '../img/Visa.png';
import masterCardLogo from '../img/Mastercard.png';
import chip from '../img/Chip.svg';

import { getProperCardLogo } from "../helpers/getProperLogo";


export const FrontSideContent = ({cardNumber, cardType, cardOwner, statisticIsShown}) => {

    return (
        <FrontSideWrapper>
            {!statisticIsShown && <Chip
                src={chip}
                alt='Chip'
            />}
            <CardNumber>{cardNumber}</CardNumber>
            <CardFooter>
                <CardOwner>{cardOwner}</CardOwner>
                <CardLogo
                    src={getProperCardLogo(cardType, visaLogo, masterCardLogo)}
                    alt='Card Logo'
                />
            </CardFooter>
        </FrontSideWrapper>
    )
};


const FrontSideWrapper = styled.div`
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
`;

const Chip = styled.img`
    border-radius: 20%;
    margin: 86px 0 0 56px;
`;

const CardNumber = styled.p`
    margin: 38px 0 0 56px;
    color: white;
    font-size: 30px;
`;

const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 53px 0 56px;
`;

const CardOwner = styled.p`
    color: white;
    font-size: 24px;
`;

const CardLogo = styled.img`
    height: 60px;
    width: 120px;
`;