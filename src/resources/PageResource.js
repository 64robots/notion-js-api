import Resource from "./Resource";

export default class PageResource extends Resource {
  async create(page) {
      return await this.createResource("pages", page)
  }

  async retrieve(id) {
      return await this.getResource("pages", id)
  }

  async update(id, properties) {
      return await this.updateResource("pages", id, properties)
  }
}
