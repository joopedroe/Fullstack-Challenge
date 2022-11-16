import $http from '@Config/axios';
// import $store from '@Store';

const prefix = 'articles';

export default {
  index(filter) {
    return new Promise((resolve, reject) => {
      $http.get(`${prefix}/${filter}`)
        .then(response => resolve(response))
        .catch(response => reject(response));
    });
  },
  show(id) {
    return new Promise((resolve, reject) => {
      $http.get(`${prefix}/${id}`)
        .then(response => resolve(response))
        .catch(response => reject(response));
    });
  },
  store(params) {
    return new Promise((resolve, reject) => {
      $http.post(prefix, params)
        .then(response => {
          resolve(response);
        })
        .catch(response => reject(response));
    });
  },
  update(params) {
    return new Promise((resolve, reject) => {
      $http.put(`${prefix}/${params.id}`, params)
        .then(response => {
          resolve(response);
        })
        .catch(response => reject(response));
    });
  },
  destroy(id) {
    return new Promise((resolve, reject) => {
      $http.delete(`${prefix}/${id}`)
        .then(response => {
          resolve(response);
        })
        .catch(response => reject(response));
    });
  },
  restore(id) {
    return new Promise((resolve, reject) => {
      $http.patch(`${prefix}/${id}`)
        .then(response => {
          resolve(response);
        })
        .catch(response => reject(response));
    });
  }
};
