import styled from "styled-components";
import pencil from "../../assets/images/pencil.png";
import {Flex} from "../flex";

export const StyledButton = styled.button`
    outline: none;
    border: none;
    background: url(${pencil}) center center no-repeat;
    background-size: cover;
    min-width: 20px;
    min-height: 20px;
    cursor: pointer;
    margin-left: 5px;
`;

export const StyledFlex = styled(Flex)`
    width: 100%;
    justify-content: space-between;
    gap: 25px;
`;