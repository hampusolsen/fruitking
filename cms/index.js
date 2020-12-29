import { STRAPI_URL } from '../lib/constants'
import Fetch from '../lib/Fetch'

class CMSClient {
  constructor () {
    Fetch.rootUrl = STRAPI_URL
  }

  // Utility functions
  setJWT (jwt) {
    Fetch.token = jwt
  }

  // User methods
  async login (credentials) {
    return await Fetch.post('/auth/local', credentials)
  }

  async register (details) {
    return await Fetch.post('/auth/local/register', details)
  }

  // Article methods
  async articles () {
    return await Fetch.get('/articles')
  }

  // Category methods
  async categories () {
    return await Fetch.get('/categories')
  }

  async category (id) {
    return await Fetch.get('/categories/' + id)
  }

  // Products methods
  async products (query = '') {
    return await Fetch.get('/products' + query)
  }

  async productCount () {
    return await Fetch.get('/products/count')
  }
}

const CMS = new CMSClient()

export default CMS
