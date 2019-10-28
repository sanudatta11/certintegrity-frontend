/**
 * Authorization Roles
 */
const authRoles = {
    admin    : ['admin'],
    staff    : ['admin', 'staff'],
    user     : ['admin', 'staff', 'user'],
    onlyGuest: ['guest'],
    superAdmin:['superAdmin'],
    creator   :['creator'],
    candidate:['candidate']

};

export default authRoles;
