import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecoundryButton = (props) => {
  const { children, onClick } = props;
  return <Sbutton onClick={onClick}>{children}</Sbutton>;
};

const Sbutton = styled(BaseButton)`
  background-color: #30997e;
`;
