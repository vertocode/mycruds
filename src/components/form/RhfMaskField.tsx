import { useFormContext, Controller } from 'react-hook-form'
// @mui
import TextField, { TextFieldProps } from '@mui/material/TextField'
import { IMaskInput } from 'react-imask'
import React from "react";

// ----------------------------------------------------------------------

type Props = TextFieldProps & {
  name: string;
  mask: string;
  dataTestId?: string;
};

export default function RhfMaskField({ name, mask, helperText, type, dataTestId, ...other }: Props) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          type={type}
          data-testid={dataTestId}
          value={(type === 'number' && field.value === 0) ? '' : field.value ?? ''}
          onChange={(event) => {
            if (type === 'number') {
              field.onChange(Number(event.target.value))
            } else {
              field.onChange(event.target.value)
            }
          }}
          InputProps={{
            inputComponent: TextMaskCustom as any,
            inputProps: { mask, autocomplete: 'off' }
          }}
          error={!!error}
          helperText={error ? error?.message : helperText}
          {...other}
        />
      )}
    />
  )
}

interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
    mask: string;
}

const TextMaskCustom = React.forwardRef<HTMLInputElement, CustomProps>(
    function TextMaskCustom(props, ref) {
        const { onChange, ...other } = props
        return (
            <IMaskInput
                {...other}
                mask={props.mask}
                definitions={{
                    '#': /[0-9]/
                }}
                inputRef={ref}
                onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
                overwrite
            />
        )
    }
)