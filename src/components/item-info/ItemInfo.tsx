import React, {ChangeEvent, FC, memo, useEffect} from 'react';
import {ItemModel} from "../../pages/main/MainPage";
import {Item} from "../item";
import {StyledButton, StyledWidget} from "./ItemInfo.module";

export interface ItemInfoProps {
    selected: ItemModel;
    items: ItemModel[];
    onDeleteRelation?: (relation: number) => void;
    onAddRelation?: (relation: number) => void;
    onSave?: (name: string) => void;
}

export const ItemInfo: FC<ItemInfoProps> = memo(({selected, items, onAddRelation, onDeleteRelation, onSave}) => {
    const [name, setName] = React.useState<string>(selected.label || "");

    function onChange(event: ChangeEvent<HTMLInputElement>, relation: number) {
        event.currentTarget.checked ? onAddRelation?.(relation) : onDeleteRelation?.(relation);
    }

    useEffect(() => {
        setName(selected.label || "");
    }, [selected])

    return (
        <StyledWidget>
            <input placeholder="Название" value={name} onChange={(e) => setName(e.target.value)} />
            <div>{items?.map((relation, index) =>
                relation !== selected &&
                <Item
                    key={relation.label}
                    label={relation.label}
                    checked={selected.relations.has(index)}
                    onChange={(e) => onChange(e, index)}
                />
            )}
            </div>
            <StyledButton onClick={() => onSave?.(name)}>Сохранить</StyledButton>
        </StyledWidget>
    );
});