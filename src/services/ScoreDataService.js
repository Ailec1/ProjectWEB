import http from '../http-common'
class ScoreDataService {
getAll () {
return http.get('/score')
}
get (id) {
return http.get(`/score/${id}`)
}
create (data) {
return http.post('/score', data)
}
update (id, data) {
return http.put(`/score/${id}`, data)
}
delete (id) {
return http.delete(`/score/${id}`)
}
deleteAll () {
return http.delete('/score')
}
}
export default new ScoreDataService()