import axios from 'axios';
import jwtDecode from 'jwt-decode';
import FuseUtils from '@fuse/FuseUtils';

class jwtService extends FuseUtils.EventEmitter {

    init()
    {
        this.setInterceptors();
        this.handleAuthentication();
    }

    setInterceptors = () => {
        axios.interceptors.response.use(response => {
            return response;
        }, err => {
            return new Promise((resolve, reject) => {
                if ( err.response.status === 401 && err.config && !err.config.__isRetryRequest )
                {
                    // if you ever get an unauthorized response, logout the user
                    this.emit('onAutoLogout', 'Invalid access_token');
                    this.setSession(null);
                }
                throw err;
            });
        });
    };

    handleAuthentication = () => {

        let access_token = this.getAccessToken();

        if ( !access_token )
        {
            return;
        }

        if ( this.isAuthTokenValid(access_token) )
        {
            this.setSession(access_token);
            this.emit('onAutoLogin', true);
        }
        else
        {
            this.setSession(null);
            this.emit('onAutoLogout', 'access_token expired');
        }
    };

    createUserSuperAdmin = (data) => {
        console.log(data);
          return new Promise((resolve, reject) => {
            axios.post('/api/auth/registerSuper', data)
                .then(response => {
                    console.log(response);
                    if ( response.data.user )
                    {
                        console.log("in this first block");
                        this.setSession(response.data.access_token);
                        resolve(response.data.user);
                        console.log(response.data.user);
                    }
                    else
                    {
                        console.log("in this second block");
                        console.log(response.data);
                        reject(response.data.error);
                        
                    }
                });
        });
    };


    createUserCreator = (data) => {
        console.log(data);
          return new Promise((resolve, reject) => {
            axios.post('/api/auth/registerCreator', data)
                .then(response => {
                    console.log(response);
                    if ( response.data.user )
                    {
                        console.log("in this first block of register creator");
                        this.setSession(response.data.access_token);
                        resolve(response.data.user);
                        console.log(response.data.user);
                    }
                    else
                    {
                        console.log("in this second block of register creator");
                        console.log(response.data);
                        reject(response.data.error);
                        
                    }
                });
        });
    };
    createUserCandidate = (data) => {
        console.log(data);
          return new Promise((resolve, reject) => {
            axios.post('/api/auth/registerCandidate', data)
                .then(response => {
                    console.log(response);
                    if ( response.data.user )
                    {
                        console.log("in this first block of register candidate");
                        this.setSession(response.data.access_token);
                        resolve(response.data.user);
                        console.log(response.data.user);
                    }
                    else
                    {
                        console.log("in this second block of register candidate");
                        console.log(response.data);
                        reject(response.data.error);
                        
                    }
                });
        });
    };

    signInWithEmailAndPasswordSuper = (email, password) => {
        return new Promise((resolve, reject) => {
           
            const data={
                email,
                password
            }
            axios.post('/api/authSuper',data).then(response => {
              
                if ( response.data.user )
                {
                    this.setSession(response.data.access_token);
                    resolve(response.data.user);
                }
                else
                {
                    reject(response.data.error);
                }
            });
        });
    };
    signInWithEmailAndPasswordCreator = (email, password) => {
        console.log("reached in creator ")
        return new Promise((resolve, reject) => {
           
            const data={
                email,
                password
            }
            axios.post('/api/authCreator',data).then(response => {
              
                if ( response.data.user )
                {
                    this.setSession(response.data.access_token);
                    resolve(response.data.user);
                }
                else
                {
                    reject(response.data.error);
                }
            });
        });
    };

    signInWithEmailAndPasswordCandidate = (email, password) => {
        return new Promise((resolve, reject) => {
           
            const data={
                email,
                password
            }
            axios.post('/api/authCandidate',data).then(response => {
              
                if ( response.data.user )
                {
                    this.setSession(response.data.access_token);
                    resolve(response.data.user);
                }
                else
                {
                    reject(response.data.error);
                }
            });
        });
    };






    signInWithToken = () => {
        return new Promise((resolve, reject) => {
            axios.post('/api/auth/access-token', {
                data: {
                    access_token: this.getAccessToken()
                }
            })
                .then(response => {
                   console.log(response.data);
                   console.log("reached here at signinm")
                    if ( response.data.user )
                    {
                        this.setSession(response.data.updatedAccessToken);
                        resolve(response.data.user);
                    }
                    else
                    {
                        reject(response.data.error);
                    }
                });
        });
    };


    updateUserData = (user) => {
        return axios.post('/api/auth/user/update', {
            user: user
        });
    };

    setSession = access_token => {
        if ( access_token )
        {
            localStorage.setItem('jwt_access_token', access_token);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
        }
        else
        {
            localStorage.removeItem('jwt_access_token');
            delete axios.defaults.headers.common['Authorization'];
        }
    };

    logout = () => {
        this.setSession(null);
    };

    isAuthTokenValid = access_token => {
        if ( !access_token )
        {
            return false;
        }
        const decoded = jwtDecode(access_token);
        const currentTime = Date.now() / 1000;
        if ( decoded.exp < currentTime )
        {
            console.warn('access token expired');
            return false;
        }
        else
        {
            return true;
        }
    };

    getAccessToken = () => {
        return window.localStorage.getItem('jwt_access_token');
    };
}

const instance = new jwtService();

export default instance;
