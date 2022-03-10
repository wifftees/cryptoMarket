const userKey = 'user'

export const login = (email: string) => {
    localStorage.setItem(userKey, email)
}

export const logout = () => {
    localStorage.removeItem(userKey)
}

export const currentUserExists = () => Boolean(localStorage.getItem(userKey))

export const getCurrentUser = () => localStorage.getItem(userKey)
