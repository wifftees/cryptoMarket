import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSendRegisterFormValuesMutation } from '../../api/authApi'
import { DialogData } from '../../components/common/dialog-window/DialogWindow'
import { RegisterFormValues } from '../../types/User'

export const useRegisterData = () => {
    const [dialogData, setDialogData] = useState<DialogData>({
        open: false,
    })
    const [sendRegisterFormValues, { data, error }] =
        useSendRegisterFormValuesMutation()
    const history = useNavigate()
    console.log(data)
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
                    message: data,
                })
            }
        } else {
            setDialogData({
                open: false,
            })
        }
    }, [data, error])

    const registerInitialValues: RegisterFormValues = {
        firstName: '',
        secondName: '',
        email: '',
        password: '',
        confirm: '',
    }

    const handleClose = () => {
        if (!error) {
            history('/login')
        }
        setDialogData({ open: false })
    }

    const submit = async (values: RegisterFormValues) => {
        sendRegisterFormValues(values)
    }

    return {
        registerInitialValues,
        dialogData,
        submit,
        handleClose,
    }
}
