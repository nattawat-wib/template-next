import { InputText } from 'primereact/inputtext'
import { FloatLabel } from 'primereact/floatlabel';
import React from 'react';
import TextWarning from '../utils/TextWarning';
import { InputTextKeyFilter } from '@/types/primereact/form';

type InputProps = {
    form: any,
    id: string,
    ref: any,
    validate?: object
    className?: string
    isFloatLabel?: boolean
    placeholder?: string
    label?: string
    type?: string
    keyFilter?: InputTextKeyFilter | ""
    props?: object
}

const FormInput = React.forwardRef(({
    form = {},
    id = "",
    ref,
    validate = {},
    className = "",
    isFloatLabel = true,
    placeholder = "",
    label = "",
    type = "",
    keyFilter = "",
    ...props
}: InputProps) => {

    const errorMessage: string = form.formState.errors?.[id]?.message;

    const MainInput = () => <>
        <label htmlFor={id}> {label || id} </label>
        <InputText
            id={id}
            label={label || id}
            ref={ref}
            className={className}
            placeholder={placeholder}
            type={type}
            keyFilter={keyFilter}
            {...form.register(id, validate)}
            {...props}
        />
    </ >

    return (
        <>
            {
                isFloatLabel ?
                    <FloatLabel className='mt-3'> <MainInput /> </FloatLabel>
                    : <MainInput />
            }

            {errorMessage && <TextWarning message={errorMessage} />}
        </>
    )
});

export default FormInput;
