function get(url) {
    return axios
        .get(url)
        .then(response => response)
        .catch(error => {
            throw error;
        });
}

function del(url) {
    return axios
        .delete(url)
        .then(response => response)
        .catch(error => {
            throw error;
        });
}

function post(url, body) {
    return axios    
        .post(url, body)
        .then(response => response)
        .catch(error => {
            throw error;
        });
}

function put(url, body) {
    return axios 
        .put(url, body)
        .then(response => response)
        .catch(error => {
            throw error;
        });
}

export {
    del,
    get,
    post,
    put,
}