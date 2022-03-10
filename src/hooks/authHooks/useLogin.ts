import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { sendLoginValues } from '../../api/authApi'
import { DialogData } from '../../components/dialog-window/DialogWindow'
import { writeUserToLocalStorage } from '../../redux/actions/userActions'
import { LoginFormValues } from '../../types/User'
import { useAppDispatch } from '../redux'

export const useLoginData = () => {
    const [dialogData, setDialogData] = useState<DialogData>({
        open: false,
        title: '',
        message: '',
    })

    const dispatch = useAppDispatch()

    const history = useNavigate()

    const handleClose = () => setDialogData({ open: false })

    const submit = async (values: LoginFormValues) => {
        const response = await sendLoginValues(values)
        const { error, message } = response
        setDialogData({
            open: true,
            error: Boolean(error),
            title: error ? 'Error' : 'Successful',
            message,
        })
        if (!error) {
            dispatch(writeUserToLocalStorage(values.email))
            history('/profile')
        }
    }

    const loginInitialValues: LoginFormValues = {
        email: '',
        password: '',
    }

    return {
        handleClose,
        submit,
        dialogData,
        loginInitialValues,
    }
}
