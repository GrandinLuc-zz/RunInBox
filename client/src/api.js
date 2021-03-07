const apiRoutes = {
  loginUrl: '/api/v1/auth/token'

}

const jsonClient = (url, options) => fetch(
  url,
  {
    ...options,
    headers: {
      ...options.headers,
      'content-type': 'application/json'
    },
    body: JSON.stringify(options.body)
  })
  .then(res => res.json())

const api = {
  login (credentials) {
    return jsonClient(
      apiRoutes.loginUrl,
      {
        method: 'post',
        body: credentials
      }
    )
      .then(data => data.user)
  },
  checkToken (token) {
    return jsonClient(apiRoutes.checkTokenUrl, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(data => data.user)
  }
}
