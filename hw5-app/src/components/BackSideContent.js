import styled from "styled-components";

import { formatDateToMonthYear } from "../helpers/formatDate";


export const BackSideContent = ({date, cvv}) => {

    return(
        <BackSideWrapper>
            <CardFooter>
                <CardDate>{formatDateToMonthYear(date)}</CardDate>
                <CardCVV>{cvv}</CardCVV>
            </CardFooter>
        </BackSideWrapper>
    )
};


const BackSideWrapper = styled.div`
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
`;

const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 100px 53px 0 56px;
`;

const CardDate = styled.p`
    color: white;
    font-size: 30px;
`;

const CardCVV = styled.p`
    color: white;
    font-size: 30px;
`;