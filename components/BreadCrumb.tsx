import { BreadCrumb as PrimeBreadCrumb } from 'primereact/breadcrumb';
import React from 'react'

interface BreadCrumbProps {
    [key: string]: any
}

export default function BreadCrumb(props: BreadCrumbProps) {
    return (
        <PrimeBreadCrumb
            {...props}
        />
    )
}
