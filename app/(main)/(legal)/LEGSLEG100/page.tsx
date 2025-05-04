"use client"

import FormInput from '@/components/form/FormInput'
import { Button } from 'primereact/button';
import { zodResolver } from "@hookform/resolvers/zod";
import { validation, initForm, type InitForm } from '@/model/legal/LEGSLEG100';
import useForm from '@/hook/useForm';
import { z } from 'zod';

export default function LEGSLEG100() {

    const validate = z.object({
        firstName: z.string().optional().default("string"),
    })

    type FormType = z.infer<typeof validate>

    const initForm = {
        firstName: "",
    }


    const form = useForm<FormType>({
        defaultValues: initForm,
        resolver: zodResolver(validate)
    });

    // const form = useForm<InitForm["User"]>({
    //     defaultValues: initForm.user,
    //     resolver: zodResolver(validation.user)
    // });

    console.log('initForm.user', initForm.user);

    const onSubmit = (data: InitForm["User"]) => {
        console.log('data', data);
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <h5 className='text-3xl font-bold underline text-primary'> Form </h5>
            <div className='grid gap-2'>
                <div className='col-3'>
                    <FormInput
                        id="firstName"
                        label="first name"
                        form={form}
                        type="number"
                    />
                </div>
                <div className='col-3'>
                    <FormInput id="lastName" form={form} className='w-full' />
                </div>
                <div className='col-3'>
                    <FormInput id="age" form={form} className='w-full' />
                </div>
            </div>
            <Button
                label="submit"
                type='submit'
            />
        </form>
    )
}
