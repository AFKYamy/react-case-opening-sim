export const getRandomItem = <Item>(items: Item[]) => items[Math.floor(Math.random() * items.length)];
