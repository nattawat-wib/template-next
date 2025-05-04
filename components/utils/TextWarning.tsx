import { TwTextColor } from '@/types/tailwind/color'
import { TwTextSize } from '@/types/tailwind/size'
import React from 'react'

interface TextWarningProps {
    message: string;
    className?: string;
    size?: TwTextSize;
    color?: TwTextColor;
    style?: object;
}

export default function TextWarning({
    message = "",
    className = "",
    size = "sm",
    color = "red-500",
    style = {}
}: TextWarningProps) {
    return (
        <span
            className={`text-${size} text-${color} ${className}`}
            style={style}
        >
            {message}
        </span>
    )
}
