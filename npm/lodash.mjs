import lodash from 'lodash'

console.log(lodash.VERSION);

const customers = [
    { name: 'susu', age: 23 },
    { name: 'mumu', age: 60 },
    { name: 'yoyo', age: 40 },
];

// find
const findCustomer = lodash.find(customers, { age: 23 });
console.log(findCustomer);

// cloneDeep
const newCustomers = lodash.cloneDeep(customers);
newCustomers[0].name = "koko"
console.log(newCustomers);
console.log(customers);

// merge
const allCustomers = lodash.merge(customers, findCustomer);
console.log(allCustomers);

// basic tasks
console.log(lodash.add(4, 5));
console.log(lodash.reverse([1, 2, 3, 4, 5, 6]));

// chunk
const numbers = [10, 20, 30, 50, 9, 94, 0, 1];
console.log(lodash.chunk(numbers, 3));

// debounce 
const testDebounce = lodash.debounce((value) => {
    console.log(`debonnce : ${value}`);
}, 3000)
testDebounce('hello');

// get and set
const name = lodash.get(findCustomer, 'name', 'unknow');
console.log(name);
lodash.set(findCustomer, 'gender', 'male');
console.log(findCustomer);

// groupBy
const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 40 },
    { name: 'Charlie', age: 30 }
];
const grouped = lodash.groupBy(people, 'age');
console.log(grouped);

// sortBy
console.log(lodash.sortBy(people, ['age']));







