import db from '../db'
import Validr from 'validr'

const validateItemCreate = (item) => {
  const validator = new Validr(item, {
    isValidVariants: (variants) => {
      let isValid = true

      return isValid
    }
  })

  validator
    .validate('name', 'Name is required')
    .isLength(3)

  validator
    .validate('category', 'Category is required')
    .isLength(3)

  validator
    .validate('variants', {
      isLength: 'Must have a minimum of one variant',
      isValidVariants: 'All variants must be valid'
    }).isLength(1).isValidVariants()

  return validator.validationErrors()
}

const list = (query, offset, limit) => db.items
  .toCollection()
  .offset(0)
  .limit(10)
  .toArray()

const create = (item) => {
  return new Promise((resolve, reject) => {
    const errors = validateItemCreate(item)

    if (errors && errors.length > 0) {
      return reject(errors)
    }

    return db.items
      .add(item)
        .then((item) => resolve(item))
        .catch((error) => reject(error))
  })
}

export default {
  list,
  create
}
