import lodash from 'lodash'

const Lodash = {
    find: (collection, index) => lodash.find(collection, index),
    deepClone: (payload) => lodash.cloneDeep(payload),
}

export { Lodash }