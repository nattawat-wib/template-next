"use client"

import FormInput from '@/components/form/FormInput'
import { Button } from 'primereact/button';
import { zodResolver } from "@hookform/resolvers/zod";
import { validation, initForm, type InitForm } from '@/model/legal/LEGSLEG100';
import useForm, { FormProvider } from '@/hook/useForm';
import { z } from 'zod';
import FormRadio from '@/components/form/FormRadio';
import { useState } from 'react';
import FormDropdown from '@/components/form/FormDropdown';
import FormCalendar from '@/components/form/FromCalendar';
import FormCheckbox from '@/components/form/FromCheckBox';
import FormSwitch from '@/components/form/FormSwitch';
import FormInputNumber from '@/components/form/FormInputNumber';
import FormTextarea from '@/components/form/FormTextarea';
import { Card } from 'primereact/card';
import { Fieldset } from 'primereact/fieldset';

export default function Form() {

    // const validate = z.object({
    //     firstName: z.string().optional().default("string"),
    // })

    // type FormType = z.infer<typeof validate>

    // const initForm = {
    //     firstName: "",
    // }


    // const form = useForm<FormType>({
    //     defaultValues: initForm,
    //     // resolver: zodResolver(validate)
    // });

    const form = useForm<InitForm["User"]>({
        defaultValues: initForm.user,
        // resolver: zodResolver(validation.user)
    });

    console.log('initForm.user', initForm.user);

    const onSubmit = (data: InitForm["User"]) => {
        console.log('data', data);
    }

    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        // <FormProvider onSubmit={form.handleSubmit(onSubmit)}>
        <FormProvider {...form}>
            <h5 className='text-3xl font-bold underline text-primary'> Form </h5>
            <div className='grid'>
                <ComponentCard title="FormInput">
                    <FormInput
                        id="firstName"
                        label="first name"
                        form={form}
                        type="number"
                    />
                </ComponentCard>
                <ComponentCard title="FormInput">
                    <FormInput id="lastName" form={form} className='w-full' />
                </ComponentCard>
                <ComponentCard title="FormInput">
                    <FormInput id="age" form={form} className='w-full' />
                </ComponentCard>
                <ComponentCard title="FormRadio">
                    <div className='flex flex-row tw:justify-between'>
                        <FormRadio />
                        <FormRadio />
                        <FormRadio />
                    </div>
                </ComponentCard>
                <ComponentCard title="FormDropdown" >
                    <FormDropdown
                        value={selectedCity}
                        onChange={(e: any) => setSelectedCity(e.value)}
                        options={cities}
                        optionLabel="name"
                        placeholder="Select a City"
                        className="tw:w-full"
                        filter
                    />
                </ComponentCard>
                <ComponentCard title="FormCalendar" >
                    <FormCalendar className="tw:w-full" />
                </ComponentCard>
                <ComponentCard title="FormInputNumber" >
                    <FormInputNumber className="tw:w-full" />
                </ComponentCard>
                <ComponentCard title="FormTextarea">
                    <FormTextarea className="tw:w-full" />
                </ComponentCard>
                <ComponentCard title="FormSwitch">
                    <FormSwitch />
                </ComponentCard>
                <ComponentCard title="FormCheckbox">
                    <>
                        <FormCheckbox name="pizza" />
                        <label htmlFor="ingredient1" className="ml-2">Cheese</label>
                    </>
                </ComponentCard>
            </div>
            <Button
                label="submit"
                type='submit'
            />
        </FormProvider>
    )
}

const ComponentCard = (
    { children, title }: { children: React.ReactElement, title: string }
): React.ReactElement => (
    <div className='col-3'>
        <Fieldset legend={title} >
            {/* <Card subTitle={title}> */}
            {children}
            {/* </Card> */}
        </Fieldset>
    </div>
)