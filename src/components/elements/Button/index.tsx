import { Button as MuiButton } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

interface Props {
    children: React.ReactNode
    loading?: boolean
    [key: string]: any
}

export const Button = ({ children, loading, ...restProps }: Props) => {
    return (
        <MuiButton {...restProps} disabled={loading}>
            { loading && (
                <CircularProgress style={{ width: '20px', height: '20px' }} className="text-white mr-2"/>
            ) }
            { children }
        </MuiButton>
    )
}