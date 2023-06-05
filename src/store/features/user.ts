import Router from 'next/router'

import { User } from 'models'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'store'
import { StoreSlices } from 'store/types'

const initialState: User = {} as User

export const userSlice = createSlice({
  name: StoreSlices.USER,
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<Partial<User>>) => {
      return { ...state, ...action.payload }
    },
    logout: () => {
      Router.push('/')
    }
  }
})

export const { saveUser, logout } = userSlice.actions

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
