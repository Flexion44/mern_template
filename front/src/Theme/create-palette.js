import { common } from '@mui/material/colors';
import { alpha } from '@mui/material/styles';
import {amber, blue, error, indigo, info, neutral, primary, secondary, success, warning, white} from './colors';

export function createPalette() {
    return {
        action: {
            active: neutral[500],
            disabled: alpha(neutral[900], 0.38),
            disabledBackground: alpha(neutral[900], 0.12),
            focus: alpha(neutral[900], 0.16),
            hover: alpha(neutral[900], 0.04),
            selected: alpha(neutral[900], 0.12)
        },
        background: {
            default: common.white,
            paper: common.white
        },
        divider: '#c3c5c8',
        error,
        info,
        white,
        mode: 'light',
        neutral,
        primary,
        secondary,
        success,
        text: {
            primary: neutral[900],
            secondary: neutral[500],
            disabled: alpha(neutral[900], 0.38)
        },
        warning
    };
}