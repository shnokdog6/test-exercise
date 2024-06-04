import styled from "styled-components";
import {Widget} from "../widget";

export const StyledWidget = styled(Widget)`
    border-left: 1px solid rgba(0, 0, 0, 0.32);
    align-items: center;
    gap: 20px;
    
    @media (max-width: 576px) {
        border-top: 1px solid rgba(0, 0, 0, 0.32);
        border-left: none;
    }
`;

export const StyledInput = styled.input`
    font-size: 18px;
    outline: none;
    border: none;
    border-radius: 5px; 
    box-shadow: 0 0 2px 0 #000;
    padding: 5px;
`;

export const StyledButton = styled.button`
    outline: none;
    border: none;
    background: white;
    border-radius: 5px;
    padding: 5px;
    box-shadow: 0 0 2px 0 #000;
    font-size: 18px;

    &:hover {
        background: #ececec;
    }
`;