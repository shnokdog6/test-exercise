import React, {FC, memo} from 'react';
import {Item, ItemModel} from "../item";
import {Widget} from "../widget";
import {StyledButton, StyledFlex} from "./Sidebar.module";
import {useUniqueKeys} from "../../hooks";

export interface SidebarProps {
    items: Array<ItemModel>;
    onItemButtonClick?: (index: number) => void;
    onItemCheckedChange?: (index: number) => void;
}

export const Sidebar: FC<SidebarProps> = memo(({items, onItemButtonClick, onItemCheckedChange}) => {
    const keys = useUniqueKeys(Sidebar.name, items.length);

    return (
        <Widget>
            {items.map((item, index) =>
                <StyledFlex key={keys[index]} $gap={25}>
                    <Item
                        label={item.label}
                        checked={item.checked}
                        onChange={() => onItemCheckedChange?.(index)}
                    />
                    <StyledButton onClick={() => onItemButtonClick?.(index)}/>
                </StyledFlex>
            )}
        </Widget>
    );
});
