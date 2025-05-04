interface FlexProps {
    [key: string]: any
}

export default function Flex(props: FlexProps) {
  return (
    <div
        {...props}
    />
  )
}
