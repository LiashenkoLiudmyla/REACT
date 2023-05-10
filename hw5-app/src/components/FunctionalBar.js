import styled from "styled-components";

import showIcon from '../img/ShowButton.svg';
import statisticIcon from '../img/StatisticButton.svg';
import flipIcon from '../img/FlipButton.svg';


export const FunctionalBar = ({flip, toggleMask, toggleStatistic, barIsShown, isNumberMasked, statisticIsShown}) => {
    return(
        <BarContainer barIsShown={barIsShown} >
            <BarSection>
                <ShowNumberButton
                    onClick={toggleMask}
                    isNumberMasked={isNumberMasked}
                >
                    <ShowNumberIcon
                        src={showIcon}
                        alt='Show Icon'
                    />
                </ShowNumberButton>
                <ShowStatisticButton
                    onClick={toggleStatistic}
                    statisticIsShown={statisticIsShown}
                >
                    <ShowStatisticIcon
                        src={statisticIcon}
                        alt='Statistic Icon'
                    />
                </ShowStatisticButton>
                <FlipButton onClick={flip}>
                    <FlipIcon
                        src={flipIcon}
                        alt='Flip Icon'
                    />
                </FlipButton>
            </BarSection>
        </BarContainer>
    )
};


const BarContainer = styled.div`
    position: absolute;
    bottom: 0px;
    display: inline-block;
    width: 500px;
    height: 150px;
    background-color: #FBFBFF;
    border-radius: 50px;
    left: 17px;
    border-bottom: 3px solid gray;
    transition-duration: 1s;
    transform: ${props => props.barIsShown ? 'translate(0px, 80px)' : ''};
`;

const BarSection = styled.section`
    display: flex;
    justify-content: center;
    margin: 80px 0 0
`

const Button = styled.button`
    background: transparent;
    border: none;
    width: 150px;

    &: hover {
        cursor: pointer;
    }
`;

const Image = styled.img`
    width: 50px;
    height: 50px;
`;

const ShowNumberButton = styled(Button)`   
    position: relative;

    &:before{
        content: '';
        width: 60px;
        border-bottom: solid 4px black;
        position: absolute;
        left: 45px;
        top: 25px;
        z-index: 1;
        transform: rotate(-45deg) ;
        opacity: ${props => props.isNumberMasked ? '0' : '1'};
        transition: 0.5s;
    }
`;

const ShowStatisticButton = styled(Button)`
    border-left: 3px solid black;
    border-right: 3px solid black;
    position: relative;

    &:before{
        content: '';
        width: 65px;
        border-bottom: solid 4px black;
        position: absolute;
        left: 40px;
        top: 25px;
        z-index: 1;
        transform: rotate(-45deg) ;
        opacity: ${props => props.statisticIsShown ? '1' : '0'};
        transition: 0.5s;
    }
`;

const FlipButton = styled(Button)`
`;

const ShowNumberIcon = styled(Image)`
`;

const ShowStatisticIcon = styled(Image)`
`;

const FlipIcon = styled(Image)`
`;