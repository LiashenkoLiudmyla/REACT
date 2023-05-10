import styled from "styled-components";

import { formatDateToDayMonth } from "../helpers/formatDate";


export const Statistic = ({statistic, statisticIsShown}) => {

    if(statistic.length !== 0){
        return(
            <StatisticContainer statisticIsShown={statisticIsShown} >
                <StatisticMain>
                    <StatisticMainTitle>Card Stats</StatisticMainTitle>
                    {statistic.map((expense) => {
                        return (<StatisticInfoContainer key={expense.id}>
                            <StatisticMainInfoContainer>
                                <StatisticDate>{formatDateToDayMonth(expense.date)}</StatisticDate>
                                <StatisticExpenseItem>{expense.place}</StatisticExpenseItem>
                            </StatisticMainInfoContainer>
                            <StatisticSum>{expense.expense} {expense.currency}</StatisticSum>
                        </StatisticInfoContainer>
                    )})}
                </StatisticMain>
            </StatisticContainer>
        )
    } else {
        return(
            <StatisticContainer statisticIsShown={statisticIsShown} >
                <StatisticMain>
                    <StatisticExpenseItem>{'The statistic about that card is unavailable'}</StatisticExpenseItem>
                </StatisticMain>
            </StatisticContainer>
        )
    }
};


const StatisticContainer = styled.div`
    display: ${props => props.statisticIsShown ? 'inline-block' : 'none'};
    width: 534px;
    position: relative;
    background-color: white;
    border-radius: 50px;
    transition: 1s;
    z-index:2;

`;

const StatisticMain = styled.div`
    padding: 30px 20px
`;

const StatisticMainTitle = styled.p`
    font-size: 48px;
    line-height: 48px;
    margin: 0 0 30px;
    letter-spacing: 2.4px
`;

const StatisticInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StatisticMainInfoContainer = styled.div`
    display: flex;
`;

const StatisticDate = styled.p`
    font-size: 24px;
    line-height: 31px;
    letter-spacing: 2.4px;
    margin-right: 15px
`;

const StatisticExpenseItem = styled.p`
    font-size: 24px;
    line-height: 31px;
    letter-spacing: 2.4px;
`;

const StatisticSum = styled.p`
    font-size: 24px;
    line-height: 31px;
    letter-spacing: 2.4px;
`;