import BlockResource from './resources/BlockReource'
import DatabaseResource from './resources/DatabaseResource'
import PageResource from './resources/PageResource'

export default class Notion {
    constructor(token) {
      this.databases = new DatabaseResource(token)
      this.pages = new PageResource(token)
      this.blocks = new BlockResource(token)
    }
}
