import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    gap: 10px;
    font-size: 22px;
    min-width: 100px;
    margin-bottom: 10px;
    
    input[type=checkbox] {
        transform: scale(2);
        margin-right: 5px;
    }
`;

export const StyledLabel = styled.label`
    max-width: 70px;
    text-overflow: ellipsis;
    overflow: hidden;
    text-wrap: nowrap;
`;
