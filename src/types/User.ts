export type RegisterFormValues = {
    firstName: string
    secondName: string
    email: string
    password: string
    confirm: string
}

export type LoginFormValues = {
    email: string
    password: string
}

export type UserSteps = {
    profileStep: boolean
    descriptionStep: boolean
}

export type User = {
    firstName: string
    secondName: string
    email: string
    password: string
    description: string
}

export type UserProfileData = Omit<User, 'email' | 'password'>
