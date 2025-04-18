import { Lodash } from '../utils/serviceProvider.mjs'
import { all } from '../controllers/testController.mjs'

const allCustomers = Lodash.deepClone(all());
const result = Lodash.find(allCustomers, { name: 'koko' });
console.log(result);





