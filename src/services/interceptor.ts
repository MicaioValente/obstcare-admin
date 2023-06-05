import { Store } from '@reduxjs/toolkit'
import { api } from 'services/api'
import { logout } from 'store/features/user'

export const interceptor = (store: Store) => {
    api.interceptors.request.use(request => {
        const token = store.getState()?.user?.token
        if (token && request.headers) {
            request.headers['Authorization'] = `Bearer ${token}`
        }

        return Promise.resolve(request)
    })
    api.interceptors.response.use(response => {
        if (response.status === 401) {
            const { dispatch } = store
            dispatch(logout())
        }

        return Promise.resolve(response)
    })
}
