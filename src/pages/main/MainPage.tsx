import React, {useState} from 'react';
import {Sidebar} from "../../components/sidebar";
import {ItemProps} from "../../components/item";
import {ItemInfo} from "../../components/item-info";
import {StyledDiv, StyledWrapper} from "./MainPage.module";

export interface ItemModel extends ItemProps {
    relations: Set<number>;
}

const initialState: ItemModel[] = new Array(4)
    .fill(null)
    .map((_, index) => ({
        label: `Item ${index + 1}`,
        relations: new Set()
    } as ItemModel));

export const MainPage = () => {
    const [items, setItems] = useState(initialState);
    const [selectedItem, setSelectedItem] = useState<ItemModel>();

    function onItemButtonClick(index: number) {
        setSelectedItem(items[index]);
    }

    function onItemCheckedChange(index: number) {
        items[index].checked = !items[index].checked;
        setItems(items.map((item, itemIndex) => {
            if (!items[index].relations.has(itemIndex)) return item;
            item.checked = !item.checked;
            return item;
        }));
    }

    function deleteRelation(relation: number) {
        setItems(items.map((item: ItemModel) => {
            if (selectedItem !== item) return item;
            item.relations.delete(relation);
            return item;
        }));
    }

    function addRelation(relation: number) {
        setItems(items.map((item: ItemModel) => {
            if (selectedItem !== item) return item;
            item.relations.add(relation)
            return item;
        }));
    }

    function save(name: string) {
        setItems(items.map((item: ItemModel) => {
            if (selectedItem !== item) return item;
            item.label = name;
            return item;
        }));
    }

    return (
        <StyledWrapper>
            <StyledDiv>
                <Sidebar
                    items={items}
                    onItemButtonClick={onItemButtonClick}
                    onItemCheckedChange={onItemCheckedChange}
                />
                {selectedItem &&
                    <ItemInfo
                        selected={selectedItem}
                        items={items}
                        onDeleteRelation={deleteRelation}
                        onAddRelation={addRelation}
                        onSave={save}
                    />}
            </StyledDiv>
        </StyledWrapper>
    );
};
