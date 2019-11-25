'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ToolsSchema extends Schema {
  up () {
    this.create('tools', (table) => {
      table.increments()
      table.string('title', 50).notNullable()
      table.string('link', 100).notNullable()
      table.string('description', 500).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tools')
  }
}

module.exports = ToolsSchema
