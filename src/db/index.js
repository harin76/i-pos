import Dexie from 'dexie'

const DB_NAME = 'i-pos'
let db = new Dexie(DB_NAME)

const createItems = () => {
  Dexie.spawn(function *() {
    db.locations.add({ name: 'default' })
    db.categories.add({ name: 'chinese' })

    db.items.add({
      name: 'Singapore Noodles',
      category: 'chinese',
      variants: [
        { name: 'small', sku: 'CN0001', price: 45.00, url: '' },
        { name: 'medium', sku: 'CN0002', price: 50.00, url: '' },
        { name: 'large', sku: 'CN0003', price: 55.00, url: '' }
      ]
    })
  })
}

const createAndSeedDB = function () {
  db.version(1).stores({
    users: '++id, firstName, lastName, password, email, phone, role',
    locations: '++id, name',
    customers: '++id, firstName, lastName, &email, phone, address.street, address.building, address.city, address.state, address.postCode',
    items: '++id, &name, category, *variants, *taxes, *modifiers, *locations ',
    categories: '++id, name, *locations',
    modifiers: '++id, name, isMultiSelect, *options, *locations',
    discounts: '++id, name, amount, *locations',
    taxes: '++id, name, *locations, value, formula, startDate, validUntil',
    inventories: '++id, item, variant, location, level',
    purchases: '++id, ref, date, *items, soldBy', // item contains [variant, quantity, amount, tax]
    returns: '++id, ref, date, *items, remarks' // item contains [variant, quantity, amount, tax]
  })

  // setup default user
  Dexie.spawn(function *() {
    var users = yield db.users
          .where('firstName')
          .equals('admin')

    var count = yield users.count()

    if (count === 0) {
      db.users.add({
        firstName: 'admin',
        lastname: 'admin',
        password: 'pass',
        email: 'admin@ipos.com',
        role: '*'
      })
    } else {
      console.log('admin user already present')
    }

    const itemCount = yield db.items.count()

    if (itemCount <= 0) {
      createItems()
    }
  })
  .catch(function (err) {
    console.log(err)
  })
}

createAndSeedDB()

export default db
