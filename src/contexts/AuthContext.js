import {useContext, useState,  createContext} from 'react'

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider ({children}) {
    const [token, setToken] = useState(localStorage.getItem('token')||'')
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user'))||{})

    function updateUser(user) {
        setUser(user)
        localStorage.setItem('user', JSON.stringify(user))
    }

    function logout () {
        setUser('')
        localStorage.removeItem('user')
        setToken('')
        localStorage.removeItem('token')
    }

    function saveToken (token) {
        setToken(token)
        localStorage.setItem('token', token)
    }

    function customFetch(url, { method= 'GET', headers= {}, body= '' } = {} ) {
        const options = {
            method,
            headers: {'Authorization': `Bearer ${token}`, ...headers},
        }
        if (body) options.body = body;
        return fetch(process.env.REACT_APP_API + url, options).then(res=>res.json())
    }

    function login(data) {
        return fetch(process.env.REACT_APP_API + '/auth/admin/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res=> res.json())
        .then(data=> {
            if (data.token) {
                saveToken(data.token)
                updateUser({id: data.id, phone: data.phone, role: data.roles[0]})
            }
            return data
        })
    }

    function orgLogin(data) {
        return fetch(process.env.REACT_APP_API + '/auth/orgAdmin/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res=> res.json())
        .then(data=> {
            if (data.token) {
                const {token, ...user} =  data
                saveToken(token)
                updateUser({...user, role: 'ORG_ADMIN'})
            }
            return data
        })
    }

    const value = {
        token,
        user,
        updateUser,
        saveToken,
        logout,
        customFetch,
        login,
        orgLogin,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}