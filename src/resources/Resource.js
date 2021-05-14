const fetch = require("node-fetch")

export default class Resource {
  NOTION_API_BASE_URI = "https://api.notion.com";

  constructor(token) {
    this.token = token;
  }

  async fetchResource(url, method = 'get', params = null) {
    const URL = `${this.NOTION_API_BASE_URI}/v1/${url}`
    return await fetch(URL, {
      method,
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
      body: params ? JSON.stringify(params): null
    }).then(response => response.json())
  }

  async getResource(resourceType, resourceId) {
    const url = resourceId ? `${resourceType}/${resourceId}` : resourceType
    return await this.fetchResource(url)
  }

  async createResource(resourceType, params) {
    return await this.fetchResource(resourceType, 'post', params)
  }

  async updateResource(resourceType, resourceId, params) {
    return await this.fetchResource(`${resourceType}/${resourceId}`, 'patch', params)
  }

  async queryResource(resourceType, resourceId, params) {
    const url = `${resourceType}/${resourceId}/query`
    return await this.fetchResource(url, 'post', params)
  }
}
