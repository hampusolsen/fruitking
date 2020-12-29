class FetchAPI {
  constructor () {
    this.rootURL = ''
    this.jwt = ''
  }

  // Getters and Setters
  get rootUrl () {
    return this.rootURL
  }

  set rootUrl (url) {
    this.rootURL = url
  }

  get token () {
    return this.token
  }

  set token (token) {
    this.jwt = token
  }

  // Request Methods
  async post (url = '', body = {}) {
    const response = await fetch(this.rootURL + url, {
      method: 'post',
      body: this.createFormData(body)
    })

    if (response.status === 403) {
      throw new Error('Unauthorized')
    }

    const json = await response.json()

    if (!response.ok) {
      throw new Error(json.data[0].messages[0].message)
    }

    return json
  }

  async get (url = '', options = {}) {
    const response = await fetch(this.rootURL + url, options)

    if (response.status === 403) {
      throw new Error('Unauthorized')
    }

    const json = await response.json()

    if (!response.ok) {
      throw new Error(json.data[0].messages[0].message)
    }

    return json
  }

  // Utility Functions
  createFormData (dataObject) {
    const formData = new FormData()

    Object.entries(dataObject).forEach(([key, value]) => {
      formData.append(key, value)
    })

    return formData
  }
}

const Fetch = new FetchAPI()

export default Fetch
