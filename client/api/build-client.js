import axios from 'axios';
export default ({ req }) => {
  if (typeof window === 'undefined') {
    // on server

    return axios.create({
      baseURL: 'http://ingress-nginx.ingress-nginx.svc.cluster.local',
      headers: req.headers
    })
  } else {
    // on browser
    return axios.create({
      baseURL: '/'
    })
  }
}