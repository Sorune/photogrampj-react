import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TokenState {
    accessToken: string | null;
    refreshToken: string | null;
}

const initialState: TokenState = {
    accessToken: null,
    refreshToken: null,
};

const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setTokens: (state, action: PayloadAction<TokenState>) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
        clearTokens: (state) => {
            state.accessToken = null;
            state.refreshToken = null;
        },
    },
});

export const { setTokens, clearTokens } = tokenSlice.actions;
export default tokenSlice.reducer;
