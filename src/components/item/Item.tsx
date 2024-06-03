import React, {ChangeEvent, FC, memo} from 'react';
import {StyledDiv} from "./Item.module";

export interface ItemProps {
    label?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    checked?: boolean;
}

export const Item: FC<ItemProps> = memo(({label, checked, onChange}) => {
    return (
        <StyledDiv>
            <input type="checkbox" checked={checked || false} onChange={onChange}/>
            <label>{label}</label>
        </StyledDiv>
    );
});