//import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy; 2021 test-Taro</SFooter>;
};

const SFooter = styled.footer`
  background-color: #24699e;
  color: #ffff;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
