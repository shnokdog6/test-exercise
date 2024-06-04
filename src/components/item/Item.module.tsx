import styled from "styled-components";

export const StyledDiv = styled.div`
    position: relative;
    display: flex;
    gap: 10px;
    font-size: 22px;
    min-width: 90px;
    width: 100%;
    
    input[type=checkbox] {
        transform: scale(2);
        margin-right: 5px;
    }
`;

export const StyledLabel = styled.label`
    position: absolute;
    left: 30px;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    height: fit-content;
    line-height: 100%;
    margin: auto;
    text-overflow: ellipsis;
    overflow: hidden;
    text-wrap: nowrap;
`;
