import React, {FC, PropsWithChildren} from 'react';
import {StyledDiv} from "./Widget.module";

export interface WidgetProps extends PropsWithChildren {
}

export const Widget: FC<WidgetProps> = (props) => {
    return (
        <StyledDiv {...props}/>
    );
};
