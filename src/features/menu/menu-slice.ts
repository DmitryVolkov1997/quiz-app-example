import { createSlice } from '@reduxjs/toolkit'

type MenuSlice = {
	isShowMenu: boolean
}

const initialState = {
	isShowMenu: false,
}

const menuSlice = createSlice({
	name: '@@menu',
	initialState,
	reducers: {
		setMenu(state) {
			state.isShowMenu = !state.isShowMenu
		},
	},
})

export const { setMenu } = menuSlice.actions
export default menuSlice.reducer
