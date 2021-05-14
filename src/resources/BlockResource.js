import Resource from './Resource'

export default class BlockResource extends Resource {
    async children(id, params) {
        const url = `blocks/${id}/children`
        return await this.fetchResource(url, 'get', params)
    }

    async append(id, children) {
        const url = `blocks/${id}/children`
        return await this.fetchResource(url, 'patch', { children })
    }
}