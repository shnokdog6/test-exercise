import styled from "styled-components";
import pencil from "../../assets/images/pencil.png";

export const StyledButton = styled.button`
    outline: none;
    border: none;
    background: url(${pencil}) center center no-repeat;
    background-size: cover;
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-left: 5px;
`;