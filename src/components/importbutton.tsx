import React from 'react'
import { importIntoNoodl } from '../utils/importIntoNoodl'

interface ImportButtonProps {
    zip: string
    name: string
    thumb: string
    cf?: string
}

export default function ImportButton({
    zip,
    name,
    thumb,
    cf,
}: ImportButtonProps) {
    return (
        <button
            className="ndl-import-button"
            onClick={() =>
                importIntoNoodl(zip, {
                    name,
                    thumb,
                    cf,
                })
            }
        />
    )
}
