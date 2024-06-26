import {
    createTheme,
    filledInputClasses,
    inputLabelClasses,
    outlinedInputClasses,
    paperClasses,
    tableCellClasses
} from '@mui/material';
import {THEME_CONST} from "./index.js";

// Used only to create transitions
const muiTheme = createTheme();

export function createComponents(config) {
    const {palette} = config;

    return {
        MuiAvatar: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: 0
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: THEME_CONST.borderRadius,
                    textTransform: 'none'
                },
                sizeSmall: {
                    padding: '6px 16px'
                },
                sizeMedium: {
                    padding: '8px 20px'
                },
                sizeLarge: {
                    padding: '11px 24px'
                },
                textSizeSmall: {
                    padding: '7px 12px'
                },
                textSizeMedium: {
                    padding: '9px 16px'
                },
                textSizeLarge: {
                    padding: '12px 16px'
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: THEME_CONST.borderRadius,
                    border: "1px solid #E6EAEE",
                    [`&.${paperClasses.elevation1}`]: {
                        boxShadow: 'none'
                    },
                    [`&.${paperClasses.elevation2}`]: {
                        boxShadow: 'none'
                    },
                    [`&.${paperClasses.elevation3}`]: {
                        boxShadow: 'none'
                    },
                    [`&.${paperClasses.elevation4}`]: {
                        boxShadow: 'none'
                    }
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '32px 24px',
                    '&:last-child': {
                        paddingBottom: '32px'
                    }
                }
            }
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: {
                    variant: 'h6'
                },
                subheaderTypographyProps: {
                    variant: 'body2'
                }
            },
            styleOverrides: {
                root: {
                    padding: '32px 24px 16px'
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                '*': {
                    boxSizing: 'border-box'
                },
                html: {
                    MozOsxFontSmoothing: 'grayscale',
                    WebkitFontSmoothing: 'antialiased',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100%',
                    width: '100%'
                },
                body: {
                    display: 'flex',
                    flex: '1 1 auto',
                    flexDirection: 'column',
                    minHeight: '100%',
                    width: '100%'
                },
                '#__next': {
                    display: 'flex',
                    flex: '1 1 auto',
                    flexDirection: 'column',
                    height: '100%',
                    width: '100%'
                },
                '#nprogress': {
                    pointerEvents: 'none'
                },
                '#nprogress .bar': {
                    backgroundColor: palette.primary.main,
                    height: 3,
                    left: 0,
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    zIndex: 2000
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    '&::placeholder': {
                        opacity: 1,
                    }
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                input: {
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: '24px',
                    '&::placeholder': {
                        color: palette.text.secondary
                    }
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    overflow: 'hidden',
                    backgroundColor: 'white',
                    transition: muiTheme.transitions.create([
                        'border-color',
                        'box-shadow'
                    ]),
                    '&:hover': {
                        backgroundColor: palette.action.hover
                    },
                    '&:before': {
                        display: 'none'
                    },
                    '&:after': {
                        display: 'none'
                    },
                    [`&.${filledInputClasses.disabled}`]: {
                        backgroundColor: 'transparent'
                    },
                    [`&.${filledInputClasses.focused}`]: {
                        backgroundColor: 'transparent',
                        boxShadow: `${palette.primary.main} 0 0 0 2px`
                    },
                    [`&.${filledInputClasses.error}`]: {
                        boxShadow: `${palette.error.main} 0 0 0 2px`
                    }
                },
                input: {
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: '24px'
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    backgroundColor: 'white',
                    [`& .${outlinedInputClasses.notchedOutline}`]: {
                        borderColor: palette.neutral[200]
                    },
                    [`&.${outlinedInputClasses.focused}`]: {
                        backgroundColor: 'white',
                    },
                    [`&.${filledInputClasses.error}`]: {
                        [`& .${outlinedInputClasses.notchedOutline}`]: {
                            boxShadow: `${palette.error.main} 0 0 0 1px`
                        }
                    }
                },
                input: {
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: '24px',
                },
                notchedOutline: {
                    borderColor: palette.neutral[200],
                    transition: muiTheme.transitions.create([
                        'border-color',
                        'box-shadow'
                    ])
                }
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 500,
                    [`&.${inputLabelClasses.filled}`]: {
                        transform: 'translate(12px, 18px) scale(1)'
                    },
                    [`&.${inputLabelClasses.shrink}`]: {
                        [`&.${inputLabelClasses.standard}`]: {
                            transform: 'translate(0, -1.5px) scale(0.85)'
                        },
                        [`&.${inputLabelClasses.filled}`]: {
                            transform: 'translate(12px, 6px) scale(0.85)'
                        },
                        [`&.${inputLabelClasses.outlined}`]: {
                            transform: 'translate(14px, -9px) scale(0.85)'
                        }
                    }
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: 1.71,
                    minWidth: 'auto',
                    paddingLeft: 0,
                    paddingRight: 0,
                    textTransform: 'none',
                    '& + &': {
                        marginLeft: 24
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottomColor: palette.divider,
                    padding: '15px 16px'
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    borderBottom: 'none',
                    [`& .${tableCellClasses.root}`]: {
                        borderBottom: 'none',
                        backgroundColor: palette.neutral[50],
                        color: palette.neutral[700],
                        fontSize: 12,
                        fontWeight: 600,
                        lineHeight: 1,
                        letterSpacing: 0.5,
                        textTransform: 'uppercase'
                    },
                    [`& .${tableCellClasses.paddingCheckbox}`]: {
                        paddingTop: 4,
                        paddingBottom: 4
                    }
                }
            }
        },
        MuiTextField: {
            defaultProps: {
                variant: 'filled'
            }
        },
        MuiToggleButton: {
            //Remove the border, update hover background color and add a border on selected. Remove focus color
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    border: 'none',
                    backgroundColor: "transparent",
                    color: palette.text.secondary,
                    '&:hover': {
                        backgroundColor: palette.neutral[100],
                        color: "#747bff",
                    },
                    '&:selected': {
                        backgroundColor: palette.primary.main,
                        color: palette.primary.main,
                        '&:hover': {
                            backgroundColor: palette.primary.main,
                            color: palette.primary.contrastText
                        }
                    },
                    '&$disabled': {
                        backgroundColor: palette.neutral[50],
                        color: palette.text.secondary
                    },
                    '&:focus': {
                        boxShadow: 'none',
                        // Remove blue halo
                        outlineColor: 'transparent'
                    }
                }
            }
        }
    };
}