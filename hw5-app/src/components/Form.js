import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { CardContext } from "../context/CardContext";

export const Form = ({ setCardData }) => {
  const { addCard } = useContext(CardContext);
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCVV] = useState("");
  const [name, setName] = useState("");
  const [cardType, setCardType] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [cvvError, setCVVError] = useState("");
  const [nameError, setNameError] = useState("");
  const [cardTypeError, setCardTypeError] = useState("");

  useEffect(() => {
    setCardData({
      cardNumber,
      cvv,
      name,
      cardType,
    });
  }, [cardNumber, cvv, name, cardType]);

  const validateCardNumber = (cardNumber) => {
    let properLength = false;
    if (cardNumber.length === 16 || cardNumber.length === 13) {
      properLength = true;
    }

    if (properLength && Number(cardNumber) == cardNumber) {
      setCardNumberError("");
      return cardNumber;
    } else {
      setCardNumberError("Card number is invalid");
      return;
    }
  };

  const validateCVV = (cvv) => {
    if (cvv.length === 3 && Number(cvv) == cvv) {
      setCVVError("");
      return cvv;
    } else {
      setCVVError("CVV is invalid");
      return;
    }
  };

  const validateName = (name) => {
    const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

    if (regName.test(name)) {
      setNameError("");
      return name;
    } else {
      setNameError("Fullname is invalid");
      return;
    }
  };

  const validateCardType = (cardType) => {
    if (cardType === "visa" || cardType === "mastercard") {
      setCardTypeError("");
      return cardType;
    } else {
      setCardTypeError("Please choose card type");
      return;
    }
  };

  const validateInputData = (cardNumber, cvv, name, cardType) => {
    const validatedCardNumber = validateCardNumber(cardNumber);
    const validatedCVV = validateCVV(cvv);
    const validatedName = validateName(name);
    const validatedCardType = validateCardType(cardType);

    return validatedCardNumber &&
      validatedCVV &&
      validatedName &&
      validatedCardType
      ? true
      : false;
  };

  const formSubmit = (event) => {
    event.preventDefault();

    const isDataValidated = validateInputData(cardNumber, cvv, name, cardType);

    if (isDataValidated) {
      const newCardData = {
        user_name: name,
        data: [
          {
            id: 1,
            card: {
              numbers: cardNumber,
              type: cardType,
              expiry_date: "3/27/2026",
              cvv: cvv,
            },
            statistic: [],
          },
        ],
      };

      addCard(newCardData);
      navigate("/");
    }
  };

  return (
    <form onSubmit={formSubmit}>
      <Label htmlFor="cardNumber">Card number</Label>
      <Input
        id="cardNumber"
        type="text"
        placeholder="0888008800005569"
        onChange={(event) => {
          setCardNumber(event.target.value);
        }}
      />
      <ErrorMessage>{cardNumberError}</ErrorMessage>
      <Label htmlFor="cvv">CVV</Label>
      <br/>
      <Input
        id="cvv"
        type="text"
        placeholder="123"
        onChange={(event) => {
          setCVV(event.target.value);
        }}
      />
      <ErrorMessage>{cvvError}</ErrorMessage>
      <Label htmlFor="name">Your fullname</Label>
      <Input
        id="name"
        type="text"
        placeholder="Jonh Snow"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <ErrorMessage>{nameError}</ErrorMessage>
      <Label htmlFor="cardType">VISA or MASTERCARD</Label>
      <Select
        id="cardType"
        value={cardType}
        onChange={(event) => {
          setCardType(event.target.value);
        }}
      >
        <Option value="">--Please choose an option--</Option>
        <Option value="visa">VISA</Option>
        <Option value="mastercard">MASTERCARD</Option>
      </Select>
      <ErrorMessage>{cardTypeError}</ErrorMessage>
      <Button type="submit">Add card</Button>
    </form>
  );
};

const Label = styled.label`
  display: inline-block;
  font-size: 25px;
  line-height: 38px;
  letter-spacing: 4.17391px;
  margin: 15px 0 10px 10px;
  color: rgba(100, 10, 45, 0.8);
`;

const Input = styled.input`
  display: inline-block;
  width: 350px;
  height: 50px;
  background-color: rgb(83, 82, 83, 0.06);
  border-radius: 25px;
  padding-left: 20px;
  font-size: 30px;
  line-height: 38px;
  letter-spacing: 4.17391px;
  border: none;

  &::placeholder {
    font-size: 25px;
    line-height: 38px;
    letter-spacing: 4.17391px;
    color: rgba(100, 10, 45, 0.8);
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 20px;
  margin: 5px 0 20px 20px;
`;

const Select = styled.select`
  width: 350px;
  height: 50px;
  background: rgb(83, 82, 83, 0.06);
  border-radius: 25px;
  font-size: 25px;
  line-height: 38px;
  border: none;
  padding-left: 20px;
  color: rgba(83, 82, 83, 1);
`;

const Option = styled.option`
  font-size: 20px;
  line-height: 38px;
  letter-spacing: 4.17391px;
  color: rgba(83, 82, 83, 1);
  padding-left: 20px;
`;

const Button = styled.button`
  width: 350px;
  height: 50px;
  background: rgb(83, 82, 83);
  border-radius: 25px;
  font-size: 20px;
  line-height: 38px;
  letter-spacing: 4.17391px;
  color: #ffffff;
  margin-top: 25px;

  &:hover {
    cursor: pointer;
  }
`;
