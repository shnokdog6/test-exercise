import React, {FC, memo} from 'react';
import {Item} from "../item";
import {ItemModel} from "../../pages/main/MainPage";
import {Flex} from "../flex";
import {Widget} from "../widget";
import {StyledButton} from "./Sidebar.module";

export interface SidebarProps {
    items: Array<ItemModel>;
    onItemButtonClick?: (index: number) => void;
    onItemCheckedChange?: (index: number) => void;
}

export const Sidebar: FC<SidebarProps> = memo(({items, onItemButtonClick, onItemCheckedChange}) => {
    return (
        <Widget>
            {items.map((item, index) =>
                <Flex key={index}>
                    <Item
                        label={item.label}
                        checked={item.checked}
                        onChange={() => onItemCheckedChange?.(index)}
                    />
                    <StyledButton onClick={() => onItemButtonClick?.(index)}/>
                </Flex>
            )}
        </Widget>
    );
});
