import { useForm as useFormReact, UseFormProps, UseFormReturn } from "react-hook-form";

export default function useForm<T>(config: UseFormProps): UseFormReturn<T> {
    return useFormReact<T>(config)
}