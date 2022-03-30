import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSendLoginFormValuesMutation } from '../../api/authApi'
import { DialogData } from '../../components/common/dialog-window/DialogWindow'
import { login } from '../../services/auth.service'
import { LoginFormValues } from '../../types/User'

export const useLoginData = () => {
    const [dialogData, setDialogData] = useState<DialogData>({
        open: false,
    })
    const [sendLoginFormValues, { data, error }] =
        useSendLoginFormValuesMutation()
    const history = useNavigate()

    useEffect(() => {
        if (data || error) {
            if (error && 'data' in error) {
                const { data: errorData, status } = error
                const { message } = errorData as { message: string }
                setDialogData({
                    open: true,
                    title: `${status} Error`,
                    message,
                })
            } else if (data) {
                setDialogData({
                    open: true,
                    title: 'Success',
                    message: data.message,
                })
            }
        } else {
            setDialogData({
                open: false,
            })
        }
    }, [data, error])

    const loginInitialValues: LoginFormValues = {
        email: '',
        password: '',
    }

    const handleClose = async () => {
        if (!error && data) {
            login(data.values.email)
            history('/profile')
        }
        setDialogData({ open: false })
    }

    const submit = async (values: LoginFormValues) => {
        sendLoginFormValues(values)
    }

    return {
        handleClose,
        submit,
        dialogData,
        loginInitialValues,
    }
}
