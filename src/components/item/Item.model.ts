import {ItemProps} from "./Item";

export interface ItemModel extends ItemProps {
    relations: Set<number>;
}