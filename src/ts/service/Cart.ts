import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    totalCost(): number {
        return this._items.reduce((acc, item) => acc += item.price, 0);
    }

    totalCostWithDiscount(discount?: number): number {
        let total: number = this.totalCost();
        if(discount) {
            return total = total - ((total / 100) * discount);
        }
        return total;
    }

    deleteFromCart(id: number) : void {
        const deleteId = this._items.findIndex((item) => item.id === id);
        this._items.splice(deleteId, 1);
    }
}