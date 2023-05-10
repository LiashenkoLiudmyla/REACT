import styled from "styled-components";
import { useState } from "react";

import { FrontSideContent } from "./FrontSideContent";
import { BackSideContent } from "./BackSideContent";
import { FunctionalBar } from "./FunctionalBar";
import { Statistic } from "./Statistic";

import visaFront from "../img/visa_front.png";
import visaBack from "../img/visa_back.png";
import visaBackground from "../img/VisaBackground.png";
import masterCardFront from "../img/mastercard_front.png";
import masterCardBack from "../img/mastercard_back.png";
import masterCardBackground from "../img/MasterCardBackground.png";

const Card = ({
  cardNumber,
  cardType,
  date,
  cardOwner,
  statistic,
  cvv,
  disableClick,
  disableMasking,
}) => {
  const [isNumberMasked, setNumberMask] = useState(true);
  const [isFront, setIsFront] = useState(true);
  const [barIsShown, setBarVisibility] = useState(false);
  const [statisticIsShown, setStatisticVisibility] = useState(false);

  const flip = () => {
    setIsFront((prev) => !prev);
  };

  const toggleNumberMask = () => {
    setNumberMask((prev) => !prev);
  };

  const toggleFuncBar = () => {
    setBarVisibility((prev) => !prev);
  };

  const toggleStatistic = () => {
    setStatisticVisibility((prev) => !prev);
  };

  const getProperBackground = (cardType) => {
    if (cardType === "visa") {
      return {
        front: visaFront,
        back: visaBack,
        background: visaBackground,
      };
    } else {
      return {
        front: masterCardFront,
        back: masterCardBack,
        background: masterCardBackground,
      };
    }
  };

  const formatCardNumber = (cardNumber) => {
    const formattedNumber = [];

    for (let i = 0; i < cardNumber.length; i = i + 4) {
      const numberPart = cardNumber.slice(i, i + 4);
      formattedNumber.push(numberPart);
    }

    return formattedNumber.join(" ");
  };

  const maskCardNumber = (cardNumber) => {
    let maskedNumber = [];

    for (let i = 0; i < cardNumber.length; i++) {
      if (i < cardNumber.length - 4) {
        maskedNumber.push("*");
      } else {
        maskedNumber.push(cardNumber[i]);
      }
    }

    return maskedNumber.join("");
  };

  let formattedCardNumber = null;

  if (disableMasking) {
    formattedCardNumber = formatCardNumber(cardNumber);
  } else {
    formattedCardNumber = formatCardNumber(
      isNumberMasked ? maskCardNumber(cardNumber) : cardNumber
    );
  }

  return (
    <CardAreaContainer
      barIsShown={barIsShown}
      statisticIsShown={statisticIsShown}
    >
      <CardContainer
        isFrontShown={isFront}
        onClick={disableClick ? null : toggleFuncBar}
        statisticIsShown={statisticIsShown}
      >
        <Front
          background={getProperBackground(cardType)}
          statisticIsShown={statisticIsShown}
        >
          <FrontSideContent
            cardNumber={formattedCardNumber}
            cardOwner={cardOwner}
            cardType={cardType}
            statisticIsShown={statisticIsShown}
          />
        </Front>
        <Back background={getProperBackground(cardType).back}>
          <BackSideContent date={date} cvv={cvv} />
        </Back>
      </CardContainer>
      <FunctionalBar
        barIsShown={barIsShown}
        isNumberMasked={isNumberMasked}
        statisticIsShown={statisticIsShown}
        flip={flip}
        toggleMask={toggleNumberMask}
        toggleStatistic={toggleStatistic}
      />
      <Statistic
        statisticIsShown={statisticIsShown}
        cardNumber={
          disableMasking
            ? cardNumber
            : formatCardNumber(maskCardNumber(cardNumber))
        }
        cardOwner={cardOwner}
        cardType={cardType}
        statistic={statistic}
      />
    </CardAreaContainer>
  );
};

export default Card;

const CardAreaContainer = styled.div`
  margin: 0 auto;
  position: relative;
  margin-bottom: ${(props) => (props.barIsShown ? "120px" : "50px")};
  transition: 1s;
  height: fit-content;
  background-color: white;
  max-width: 534px;

  margin-top: 25px;
  border-radius: 50px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

  &:last-child {
    margin-bottom: ${(props) => (props.barIsShown ? "100px" : "30px")};
  }
`;

const Sides = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s;
  backface-visibility: hidden;
  border-radius: 50px;
  z-index: 2;
`;
const Front = styled(Sides)`
  background-image: ${(props) =>
    props.statisticIsShown
      ? `url(${props.background.background})`
      : `url(${props.background.front})`}};
  background-size: cover;
`;
const Back = styled(Sides)`
  background-image: ${(props) => `url(${props.background})`}};
  background-size: cover;
`;
const CardContainer = styled.div`
  width: 534px;
  height: ${(props) => (props.statisticIsShown ? "200px" : "334px")};
  position: relative;
  perspective: 1000px;
  z-index: 1;
  transition: 1s;

  &:hover {
    cursor: pointer;
  }

  & > ${Front} {
    ${(props) => (props.isFrontShown ? "" : "transform: rotateY(180deg)")}
  }

  & > ${Back} {
    ${(props) => (props.isFrontShown ? "transform: rotateY(-180deg)" : "")}
  }
`;
