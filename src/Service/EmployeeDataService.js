import http from '../baseAPI'

class EmployeeDataService {
  getAll () {
    return http.get('/Employee')
  }

  create (data) {
    return http.post('/Employee', data)
  }

  get (id) {
    return http.get(`/Employee/ByID?id=${id}`)
  }

  update (id, data) {
    return http.put(`/Employee?id=${id}`, data)
  }

  delete (id) {
    return http.delete(`/Employee?id=${id}`)
  }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

export default new EmployeeDataService()
