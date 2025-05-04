import { useForm as useFormReact } from "react-hook-form";
import type { FieldValues, UseFormProps, UseFormReturn } from "react-hook-form";

export default function useForm<T extends FieldValues>(config: UseFormProps<T>): UseFormReturn<T> {
    return useFormReact<T>(config);
};