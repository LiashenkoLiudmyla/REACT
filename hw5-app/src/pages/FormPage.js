import styled from "styled-components";
import { useState } from 'react';

import { FormPageHeader } from '../components/FormPageHeader';
import { Form } from '../components/Form';
import Card from "../components/Card";



export const FormPage = () => {

    const [cardData, setCardData] = useState({
        cardNumber: '',
        cvv: '',
        name: '',
        cardType: '',
    });

    return(
        <FormPageContainer>
            <FormPageHeader />
            <Card 
                cardNumber={cardData.cardNumber}
                cardType={cardData.cardType}
                date={'3/27/2026'}
                cvv={cardData.cvv}
                cardOwner={cardData.name}
                statistic={[]}
                disableClick={true}
                disableMasking={true}
            />
            <Form setCardData={setCardData} />
        </FormPageContainer>
    )
};

const FormPageContainer = styled.div`
    margin: 0 auto;
    max-width: 1140px;
`;