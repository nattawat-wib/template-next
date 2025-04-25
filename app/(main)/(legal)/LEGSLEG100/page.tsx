"use client"

import FormInput from '@/components/form/FormInput'
import { useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { zodResolver } from "@hookform/resolvers/zod";
// import { initForm } from '@/schema/legal/LEGSLEG100';
import { validation } from "@/validation/legal/LEGSLEG100";
import { initForm } from '@/model/legal/LEGSLEG100';
import { useEffect } from 'react';
import { z } from 'zod';

export default function LEGSLEG100() {
    // console.log('initForm', initForm);

    const mappingDefaultValueZodDataType = {
        ZodString: "",
        ZodNumber: 0
    }

    type ZodType = "ZodString" | "ZodNumber"

    const zto = (schema: any): object => {
        // console.log('schema', schema);
        // for (const key in schema.shape) {
        //     console.log('key', key);
        // }

        const initObject = Object.keys(schema.shape).reduce((obj: any, key) => {
            const field = schema.shape[key];
            const zodDefaultValue = field._def.defaultValue();
            const typeName: ZodType = field._def.innerType._def.typeName;

            const typeDefaultValue: string | number = mappingDefaultValueZodDataType[typeName];

            return {
                ...obj,
                [key]: zodDefaultValue || typeDefaultValue
            }
        }, {})
        
        // console.log('initObject', initObject);
        return initObject;
    }

    useEffect(() => {
        const user = z.object({
            firstName: z.string().min(10).default("test default for firstname"),
            lastName: z.string().default(""),
            age: z.number().default(20),
        })

        zto(user)
    }, [])

    const form = useForm<any>({
        defaultValues: initForm.user,
        resolver: zodResolver(validation.user)
    });

    const handleSubmit = (data: any) => {
    }

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
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
