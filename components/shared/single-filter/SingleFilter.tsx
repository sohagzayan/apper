"use client"
import { Checkbox } from "@/components/ui/checkbox"
import React, { useState } from 'react'

interface SingleFilterType {
    filter: {
        id: number,
        label: string,
        value: string
    },
    value: string[],
    setValue: React.Dispatch<React.SetStateAction<string[]>>
}

const SingleFilter = ({ filter, value, setValue }: SingleFilterType) => {

    const [isChecked, setIsChecked] = useState(false)

    const handleFilteringValue = (e: any) => {
        if (isChecked) {
            let exclude = value.filter((f) => f !== filter.value)
            setValue(exclude)
            setIsChecked(e)
        } else {
            setValue((prev) => [...prev, filter.value])
            setIsChecked(e)
        }
    }

    return (
        <div className="flex items-center space-x-2">
            <Checkbox id={filter.label} checked={isChecked} onCheckedChange={handleFilteringValue} />
            <label
                htmlFor={filter.label}
                className="text-sm font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                {filter.label}
            </label>

        </div>
    )
}

export default SingleFilter