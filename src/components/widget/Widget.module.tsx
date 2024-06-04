import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 30px;
    gap: 12px;
    
   

    @media (max-width: 576px) {
        padding: 20px;
    }
`;