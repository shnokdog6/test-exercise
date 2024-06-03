import styled from "styled-components";

export const StyledWrapper = styled.div`
    min-height: 100vh;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledDiv = styled.div`
    display: flex;
    box-shadow: 0 0 2px 0 #000;
    border-radius: 5px;
    overflow: hidden;
    
    @media (max-width: 576px) {
        flex-direction: column;
    }
`;
