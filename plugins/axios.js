import Vue from 'vue'
import axios from 'axios'

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: 'https://api.wepipe.dev/',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    Vue.prototype.$http.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsdW1lbi1qd3QiLCJzdWIiOjEsImlhdCI6MTY1NjU2MTg0NywiZXhwIjoxNjg4MDk3ODQ3fQ.Ix1CmYRGjYZIzycW73GjYhtkaS-lomkR0LxQqYMbUHs`
        return config
      },
      (error) => Promise.reject(error)
    )
  },
})
