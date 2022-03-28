import { useNavigate } from 'react-router'
import { RegisterFormValues } from '../../types/User'
import { useAppDispatch, useAppSelector } from '../redux'
import { getAuth } from '../../redux/selectors/authSelectors'
import { sendRegistrationValues } from '../../redux/actions/authActions'
import authSlice from '../../redux/reducers/authReducer'

export const useRegisterData = () => {
    const { open, isError, message, title } = useAppSelector(getAuth)
    const { closeAuthState } = authSlice.actions
    const dispatch = useAppDispatch()
    const history = useNavigate()

    const dialogData = { open, title, message }

    const registerInitialValues: RegisterFormValues = {
        firstName: '',
        secondName: '',
        email: '',
        password: '',
        confirm: '',
    }

    const handleClose = () => {
        dispatch(closeAuthState())
        if (!isError) {
            history('/login')
        }
    }

    const submit = async (values: RegisterFormValues) => {
        dispatch(sendRegistrationValues(values))
    }

    return {
        registerInitialValues,
        dialogData,
        submit,
        handleClose,
    }
}
