

const mongoose = require('mongoose')
const _ = require('lodash')

const { FoundResponse } = rootRequire('./src/models')

module.exports = {
  params: {
    page: { type: 'number', optional: true },
    numberPerpage: { type: 'number', optional: true },
  },
  async handler(ctx) {
    let { page, numberPerPage } = ctx.params

    if (!page) page = 0
    if (!numberPerPage) numberPerPage = 20

    const InstagramAccount = mongoose.model('InstagramAccount')

    const igAccount = await InstagramAccount
      .find()
      .limit(numberPerPage)
      .skip(page * numberPerPage)
      .sort({ _id: 1 })
      .exec()

    return new FoundResponse('igAccounts', { igAccounts: igAccount })
  },
}

