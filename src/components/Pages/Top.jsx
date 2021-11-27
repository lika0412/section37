import React from "react";
import styled from "styled-components";
import { SecoundryButton } from "../atoms/button/SecoundryButton";
import { useHistory } from "react-router-dom";
//import { UserContext } from "../../providers/UserProvider";

export const Top = () => {
  const history = useHistory();
  //  const { setUserInfo } = useContext(UserContext);

  const onClickAdmin = () => {
    //    setUserInfo({ isAdmin: true });
    history.push({ pathname: "/users", state: { isAdmin: true } });
  };
  const onClickGeneral = () => {
    //    setUserInfo({ isAdmin: false });
    history.push({ pathname: "/users", state: { isAdmin: false } });
  };
  return (
    <SContainer>
      <h2>TOP Page here</h2>
      <SecoundryButton onClick={onClickAdmin}>manarger</SecoundryButton>
      <br />
      <br />
      <SecoundryButton onClick={onClickGeneral}>user</SecoundryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
