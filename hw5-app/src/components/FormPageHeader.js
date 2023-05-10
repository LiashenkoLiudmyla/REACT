import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import goBackIcon from "../img/icons8-go-back.gif";

export const FormPageHeader = () => {
  const navigate = useNavigate();

  const goBackButtonPressed = (event) => {
    event.preventDefault();

    navigate(-1);
  };

  return (
    <HeaderSection>
      <HeaderTitle> Create a new card </HeaderTitle>
      <HeaderButton onClick={goBackButtonPressed}>
        <HeaderImage src={goBackIcon} alt="Go Back Icon" />
      </HeaderButton>
    </HeaderSection>
  );
};

const HeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  margin-bottom: 30px;
`;

const HeaderTitle = styled.p`
font-size: 35px;
font-weight: 400;
  line-height: 61px;
  letter-spacing: 4.17391px;
`;

const HeaderButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: none;
  padding: 0;

  &:hover {
    cursor: pointer;
  }
`;

const HeaderImage = styled.img`
  width: 40px;
  height: 40px;
  margin: 1px 0;
`;
