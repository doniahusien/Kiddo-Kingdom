import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (credentials, thunkAPI) => {
        try {
            const response = await fetch("/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error("Invalid user ");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message); // Reject with error message
        }
    }
);

export const signupUser = createAsyncThunk(
    "auth/signupUser",
    async (credentials, thunkAPI) => {
        try {
            const response = await fetch("/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error("Signup failed");
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


const initialState = {
    user: null,
    isAuthenticated: false,
    error: null,
    loading: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isAuthenticated = false;
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isAuthenticated = false;
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(signupUser.pending, (state) => {
                state.isAuthenticated = false;
                state.loading = true;
            })
            .addCase(signupUser.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.user = action.payload;
                state.loading = true;
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.isAuthenticated = false;
                state.error = action.payload;
                state.loading = true;
        })
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
