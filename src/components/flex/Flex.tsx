import React, {FC, PropsWithChildren} from 'react';
import {StyledDiv} from "./Flex.module";

export interface FlexProps extends PropsWithChildren {
    $vertical?: boolean;
    $gap?: number;
}

export const Flex: FC<FlexProps> =({children, ...props}) => {
    return (
        <StyledDiv {...props}>
            {children}
        </StyledDiv>
    );
};