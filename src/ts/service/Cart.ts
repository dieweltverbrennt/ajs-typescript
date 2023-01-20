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
        let total: number = this._items.reduce((acc, item) => acc += item.price, 0);
        return total;
    }

    totalCostWithDiscount(discount?: number): number {
        let total: number = this.totalCost();
        if(discount) {
            return total = total - ((total / 100) * discount);
        }
        return total;
    }

    deleteFromCart(id: number) : void {
        this._items.filter(item => item.id !== id);
    }
}