function objectToFormData(obj) {
  const formData = new FormData();

  Object.entries(obj).forEach(([key, value]) => {
    formData.append(key, value);
  });

  return formData;
}

class CMSClient {
  CMS_ROOT = 'http://localhost:1337';

  async get(url = '') {
    const response = await fetch(this.CMS_ROOT + url);
    return await response.json();
  }

  async post(url = '', body = {}) {
    const response = await fetch(this.CMS_ROOT + url, {
      method: 'post',
      body: objectToFormData(body),
    });

    return await response.json();
  }

  async login(credentials) {
    const response = await this.post('/auth/local', credentials);
    console.log(response);
  }

  async categories() {
    const response = await this.get('/categories');
    const data = await response.data.json()
    return data;
  }
}

const CMS = new CMSClient();

export default CMS;