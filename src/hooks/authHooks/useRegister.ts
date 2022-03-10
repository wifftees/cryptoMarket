import { useState } from 'react'
import { RegisterFormValues } from '../../types/User'
import { sendRegistrationValues } from '../../api/authApi'
import { DialogData } from '../../components/dialog-window/DialogWindow'

export const useRegisterData = () => {
    const [dialogData, setDialogData] = useState<DialogData>({
        open: false,
        title: '',
        message: '',
    })

    const registerInitialValues: RegisterFormValues = {
        firstName: '',
        secondName: '',
        email: '',
        password: '',
        confirm: '',
    }

    const submit = async (values: RegisterFormValues) => {
        const response = await sendRegistrationValues({
            firstName: values.firstName,
            secondName: values.secondName,
            email: values.email,
            password: values.password,
        })
        setDialogData({
            open: true,
            title: response.error ? 'Error' : 'Successful',
            message: response.message,
            error: Boolean(response.error),
        })
    }

    const handleClose = () => setDialogData({ open: false })

    return {
        registerInitialValues,
        dialogData,
        submit,
        handleClose,
    }
}
