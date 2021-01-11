import axios from 'axios'

class ApiCallsFactory {
  private url: string
  private token: string
  private body: object | undefined
  private baseURL = process.env.REACT_APP_HOST

  constructor(
    url: string,
    token?: string | any,
    body?: object
  ) {
    this.url = `${this.baseURL}/${url}`
    this.token = token
    this.body = body
  }

  public async getData(): Promise<object> {
    try {
      const response = await axios.get(this.url)
      return response.data
    } catch (error) {
      console.error(error)
      return []
    }
  }

  public async postData(): Promise<object> {
    try {
      const response = await axios.post(this.url, this.body, {
        headers: {
          'x-access-token': this.token
        }
      })
      return response.data
    } catch (error) {
      throw new Error(error)
    }
  }

  public async deleteData(cancelReason?: string, userId?: number | string): Promise<object> {
    try {
      const response = await axios.delete(this.url, {
        headers: {
          'x-access-token': this.token
        },
        data: {
          cancelReason,
          userId
        }
      })
      return response.data
    } catch (error) {
      throw new Error(error)
    }
  }
}

export {
  ApiCallsFactory
}
