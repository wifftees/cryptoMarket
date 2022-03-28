import React, { useState } from 'react'
import { useUpdateUserDescriptionMutation } from '../../../../../api/userApi'
import TextArea from '../../../../common/text-area/TextArea'
import ClosedStep from '../step/ClosedStep'
import styles from './description.module.scss'

type DescriptionStepProps = {
    completedStep: boolean
}

export default function DescriptionStep({
    completedStep,
}: DescriptionStepProps) {
    const [changeDescription] = useUpdateUserDescriptionMutation()
    const [textArea, setTextArea] = useState(false)
    const [text, setText] = useState<string>('')

    const title = 'Add description'

    const handleOpen = () => {
        setTextArea(true)
    }

    const submit = () => {
        changeDescription(text)
    }

    return (
        <div className={styles.step}>
            {completedStep ? (
                <ClosedStep stepTitle={title} />
            ) : (
                <div className={styles.opened}>
                    <div className={styles.text}>
                        <h3>{title}</h3>
                        <span>Tell people about yourself</span>
                    </div>
                    {textArea ? (
                        <>
                            <div className={styles.input}>
                                <TextArea
                                    placeholder="Type description"
                                    setValue={setText}
                                />
                            </div>
                            <div className={styles.submit} onClick={submit}>
                                Submit
                            </div>
                        </>
                    ) : (
                        <div className={styles.button} onClick={handleOpen}>
                            {title}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
