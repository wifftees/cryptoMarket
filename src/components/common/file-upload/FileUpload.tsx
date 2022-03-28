import React from 'react'

type FileUploadProps = {
    setFile: (file: File) => void
    accept: string
}

export default function FileUpload({ setFile, accept }: FileUploadProps) {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0])
        }
    }

    return (
        <input
            type="file"
            accept={accept}
            onChange={onChange}
            id="file-upload"
            hidden
        />
    )
}
