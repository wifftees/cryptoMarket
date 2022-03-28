import { useNavigate } from 'react-router-dom'
import { sendLoginValues } from '../../redux/actions/authActions'
import authSlice from '../../redux/reducers/authReducer'
import { writeUserToLocalStorage } from '../../redux/actions/userActions'
import { getAuth } from '../../redux/selectors/authSelectors'
import { LoginFormValues } from '../../types/User'
import { useAppDispatch, useAppSelector } from '../redux'

export const useLoginData = () => {
    const { open, email, title, message, isError } = useAppSelector(getAuth)
    const { closeAuthState } = authSlice.actions
    const dispatch = useAppDispatch()
    const history = useNavigate()

    const dialogData = { open, title, message }

    const loginInitialValues: LoginFormValues = {
        email: '',
        password: '',
    }

    const handleClose = async () => {
        dispatch(closeAuthState())
        if (!isError && email) {
            await dispatch(writeUserToLocalStorage(email))
            history('/profile')
        }
    }

    const submit = async (values: LoginFormValues) => {
        dispatch(sendLoginValues(values))
    }

    return {
        handleClose,
        submit,
        dialogData,
        loginInitialValues,
    }
}
