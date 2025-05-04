import { Button as PrimeButton } from 'primereact/button';
import React from 'react'

interface ButtonProps {
    [key: string]: any
}

export default function Button(props: ButtonProps) {
  return (
    <PrimeButton
        {...props}
    />
  )
}
