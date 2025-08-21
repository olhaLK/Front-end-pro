//1.1
function ordersCount(arr) {
    const orders = arr.reduce((count, order) => {
        if (count[order.user] === undefined) {
            count[order.user] = 1;
        } else {
            count[order.user]++;
        }
        return count;
    }, {})
    return orders;
}

console.log(ordersCount(orders));


//1.2
function ordersCountMap(arr) {
    const orders = arr.reduce((map, order) => {
        if (map.has(order.user)) {
            map.set(order.user, map.get(order.user) + 1);
        } else {
            map.set(order.user, 1);
        }
        return map;
    }, new Map())
    return orders;
}

console.log(ordersCountMap(orders));


//2.1
function ordersSum(arr) {
    const prices = arr.reduce((sum, order) => {
        if (sum[order.user] === undefined) {
            sum[order.user] = 0;
        } 

        order.items.forEach(item => {
            sum[order.user] += item.price;
        });
        return sum;
    }, {})
    return prices;
}

console.log(ordersSum(orders));


//2.2
function ordersSumMap(arr) {
    const prices = arr.reduce((map, order) => {
        if (!map.has(order.user)) {
            map.set(order.user, 0);
        } 

        order.items.forEach(item => {
            map.set(order.user, map.get(order.user) + item.price);
        });
        return map;
    }, new Map())
    return prices;
}

console.log(ordersSumMap(orders));


//3
function findUniqueItems(arr) {
    return arr.reduce((set, order) => { 
        order.items.forEach(item => set.add(item.name));
        return set;
    }, new Set())
}

console.log(findUniqueItems(orders));


//4
function biggestPrice(arr) {
    return arr.reduce((acc, order) => {
        const orderSum = order.items.reduce((sum, item) => sum + item.price, 0);

        if (acc[order.user] === undefined) {
            acc[order.user] = 0; 
        }

        acc[order.user] = acc[order.user] + orderSum;

        if (acc[order.user] > acc.maxTotal) {
            acc.maxUser = order.user;
            acc.maxTotal = acc[order.user];
        }

        return acc;
    }, { maxUser: null, maxTotal: 0 });
}

let result = biggestPrice(orders);
console.log(`${result.maxUser} витратив більше за всіх: $${result.maxTotal}`);