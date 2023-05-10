import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import plusIcon from "../img/icons8-plus.gif";

export const MainHeader = () => {
  const navigate = useNavigate();

  const OpenFormButtonPressed = (event) => {
    event.preventDefault();

    navigate("/form-page");
  };

  return (
    <HeaderSection>
      <HeaderTitle> Your cards </HeaderTitle>
      <HeaderButton onClick={OpenFormButtonPressed}>
        <HeaderImage src={plusIcon} alt="Plus Icon" />
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
