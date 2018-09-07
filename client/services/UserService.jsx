import request from '../shared/request';
function get() {
    const path = "/users";
    return request({
        url: path,
        method: 'GET'
    })
}

function getUser(id) {
    const path = `/user/${id}`;
    return request({
        url: path,
        method: 'GET'
    })
}
const UserService = { get, getUser }
export default UserService;
