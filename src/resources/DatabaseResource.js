import Resource from './Resource'

export default class DatabaseResource extends Resource {
    async list() {
        return await this.getResource('databases')
    }

    async retrieve(id) {
        return await this.getResource('databases', id)
    }

    async query(id, params) {
        return await this.getResource('databases', id, params)
    }
}