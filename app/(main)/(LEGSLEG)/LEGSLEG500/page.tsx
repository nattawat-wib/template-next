"use client"

import FormInput from '@/components/form/FormInput'
import { useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { initForm } from '@/schema/user';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

export default function LEGSLEG500() {
    const formSchema = z.object({
        firstName: z.string().min(10),
        lastName: z.string(),
    })

    type FormSchema = z.infer<typeof formSchema>;

    const form = useForm<FormSchema>({
        defaultValues: initForm.user,
        resolver: zodResolver(formSchema)
    });

    const handleSubmit = (data: FormSchema) => {
    }

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <h5> Form </h5>
            <FormInput id="firstName" form={form} />
            <FormInput id="lastName" form={form} />
            <FormInput id="age" form={form} />
            <Button
                label="submit"
                type='submit'
            />
        </form>
    )
}
