import { InputText } from 'primereact/inputtext';
import React from 'react';

type InputProps = {
    form: any,
    id: string,
    ref: any,
    validate?: object
}

const FormInput = React.forwardRef(({
    form = {},
    id = "",
    ref,
    validate = {}
}: InputProps) => {

    const errorMessage: string = form.formState.errors?.[id]?.message;

    return <>
        <InputText
            id={id}
            ref={ref}
            {...form.register(id, validate)}
        />
        {
            errorMessage &&
            <small style={{ color: "red" }}> {errorMessage} </small>
        }
    </>
});

export default FormInput;
