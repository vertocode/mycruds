import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import MuiMenu from '@mui/material/Menu';

interface MenuProps {
    options: Option[]
    children: React.ReactNode
}

interface Option {
    label: string
    action: () => void
    leftIcon?: React.ReactNode
    disabled?: boolean
    selected?: boolean
}

export default function Menu({ options, children }: MenuProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (option: Option) => {
        option.action()
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <div onClick={handleClickListItem}>
                {children}
            </div>
            <MuiMenu
                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'lock-button',
                    role: 'listbox',
                }}
            >
                {options.map((option, index) => (
                    <MenuItem
                        className="flex gap-1"
                        key={`menu-option-${option.label}`}
                        disabled={!!option.disabled}
                        selected={!!option.selected}
                        onClick={() => handleMenuItemClick(option)}
                    >
                        {option.leftIcon && option.leftIcon}
                        {option.label}
                    </MenuItem>
                ))}
            </MuiMenu>
        </div>
    );
}