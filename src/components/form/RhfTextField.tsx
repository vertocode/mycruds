import { useFormContext, Controller } from 'react-hook-form'
// @mui
import TextField, { TextFieldProps } from '@mui/material/TextField'
import {useState} from "react";
import Iconify from "@/components/elements/Iconify";
import {InputAdornment} from "@mui/material";

// ----------------------------------------------------------------------

type Props = TextFieldProps & {
  name: string;
  className?: string;
  dataTestId?: string;
};

export default function RhfTextField({ name, helperText, type, dataTestId, className, ...other }: Props) {
  const { control } = useFormContext()
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          className={className}
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
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
              endAdornment: (() => {
                 if (type === 'password') {
                     return (
                        <InputAdornment position="end" className="cursor-pointer">
                            <Iconify icon={showPassword ? 'mdi:eye' : 'mdi:eye-off-outline'} onClick={() => setShowPassword(!showPassword)} />
                        </InputAdornment>
                     )
                 }
              })()
          }}
          error={!!error}
          helperText={error ? error?.message : helperText}
          {...other}
        />
      )}
    />
  )
}
