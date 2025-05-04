export type ZodType = "ZodString" | "ZodNumber" | "ZodArray" | "ZodEnum" | "ZodBoolean" | "ZodNever";
export type ZodDefaultValue = "" | 0 | [] | {} | null;

const mappingDefaultValueByZodDataType = {
    ZodString: "",
    ZodNumber: 0,
    ZodArray: [],
    ZodObject: {},
    ZodEnum: "",
    ZodBoolean: false,
    ZodDate: new Date(),
    ZodNever: "",
    undefined: "",
}

const zodTypeList: ZodType[] = [
    "ZodString",
    "ZodNumber",
    "ZodArray",
    "ZodEnum",
    "ZodBoolean",
    "ZodNever"
];

// convert zod to object (initial form object)
export default function zto(schema: any): object {
    const initForm = Object.keys(schema.shape).reduce((obj: any, key) => {
        const field = schema.shape[key];

        const zodDefaultValue = getZodDefaultValue(field);
        const typeName: ZodType = getZodTypeName(field);

        const typeDefaultValue: ZodDefaultValue = mappingDefaultValueByZodDataType[typeName];

        return {
            ...obj,
            [key]: zodDefaultValue ?? typeDefaultValue
        }
    }, {})

    return initForm;
}

export const getZodTypeName = (field: any): ZodType => {
    let counter = 0; // count to prevent error with infinity loop;
    field = field._def;

    while (!zodTypeList.includes(field?.typeName) && counter < 10) {
        field = field?.innerType?._def;
        counter++;
    }

    return field?.typeName;
}

export const getZodDefaultValue = (field: any) => {
    return field._def.defaultValue ? field._def.defaultValue() : null;
}