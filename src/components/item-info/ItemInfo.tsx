import React, {ChangeEvent, FC, memo, useEffect} from 'react';
import {Item, ItemModel} from "../item";
import {StyledButton, StyledInput, StyledWidget} from "./ItemInfo.module";
import {useUniqueKeys} from "../../hooks";
import {Flex} from "../flex";

export interface ItemInfoProps {
    selected: ItemModel;
    items: ItemModel[];
    onDeleteRelation?: (relation: number) => void;
    onAddRelation?: (relation: number) => void;
    onSave?: (name: string) => void;
}

export const ItemInfo: FC<ItemInfoProps> = memo(({selected, items, onAddRelation, onDeleteRelation, onSave}) => {
    const [name, setName] = React.useState<string>(selected.label || "");
    const keys = useUniqueKeys(ItemInfo.name, items.length);

    function onChange(event: ChangeEvent<HTMLInputElement>, relation: number) {
        event.currentTarget.checked ? onAddRelation?.(relation) : onDeleteRelation?.(relation);
    }

    useEffect(() => {
        setName(selected.label || "");
    }, [selected])

    return (
        <StyledWidget>
            <StyledInput placeholder="Название" value={name} onChange={(e) => setName(e.target.value)}/>
            <Flex $gap={18} $vertical>{items?.map((relation, index) =>
                relation !== selected &&
                <Item
                    key={keys[index]}
                    label={relation.label}
                    checked={selected.relations.has(index)}
                    onChange={(e) => onChange(e, index)}
                />
            )}
            </Flex>
            <StyledButton onClick={() => onSave?.(name)}>Сохранить</StyledButton>
        </StyledWidget>
    );
});