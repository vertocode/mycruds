import { useFormContext, Controller } from 'react-hook-form'
// @mui
import TextField, { TextFieldProps } from '@mui/material/TextField'

// ----------------------------------------------------------------------

type Props = TextFieldProps & {
  name: string;
  dataTestId?: string;
};

export default function RHFTextField({ name, helperText, type, dataTestId, ...other }: Props) {
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
          error={!!error}
          helperText={error ? error?.message : helperText}
          {...other}
        />
      )}
    />
  )
}
