import styled from "styled-components";
import { colors } from "../Global.styled";

export const PrimaryButton = styled.button`
  background-color: ${(props) =>
    props.bgcolor ? "#D3D3D3"  : colors.buttonBgForRed};
  color: ${(props) => (props.bgcolor ? "#fff" : "#000")};
  width: ${(props) => (props.width ? props.width : "104px")};

  border-radius: 25px;
  border: 2px solid ${(props) => (props.bgcolor ? "#fff" : "#000")};
  font-size: 16px;
  padding: 7px 0px;
  margin:10px;
  text-align:center;
  cursor: pointer;
  display: 'flex',
  flexDirection: 'row',
  
`;