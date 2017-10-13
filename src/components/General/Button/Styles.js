import { media, merge } from 'glamor'
import breakpoints from '../../../foundation/mediaQueries';
import theme from '../../../foundation/defaultTheme';

const buttonStyles = {
    'display': `block`,
    'width': `100%`,
    'padding': `${theme.spaces.base} ${theme.spaces.wide}`,
    'transition': `background 0.2s`,
    'fontFamily': `${theme.fonts.telus}`,
    'textAlign': `center`,
    'cursor': `pointer`,
    'fontSize': `1rem`,
    'letterSpacing': `-0.8px`,
    'lineHeight': `1.5`,
    'fontWeight': `${theme.fontWeights.medium}`,
    'borderWidth': `0`,
    'borderRadius': `4px`,
    ':hover': {
        'boxShadow': `0 0 0 1px`,
    },
};

const button = merge(buttonStyles,
    media(`(min-width: ${breakpoints.sm})`, {
        'width': `auto`,
        'display': `inlineBlock`,
        '+ button': {
            'marginLeft': `16px`,
        }
    })
);

export const PrimaryButton = merge(button, {
    'backgroundColor': `${theme.colors.primary}`,
    'color': `${theme.colors.white}`,
    ':hover': {
        'backgroundColor': `${theme.colors.white}`,
        'color': `${theme.colors.primary}`,
    }
});

export const SecondaryButton = merge(button, {
  'backgroundColor': `${theme.colors.secondary}`,
  'color': `${theme.colors.white}`,
  ':hover': {
      'backgroundColor': `${theme.colors.white}`,
      'color': `${theme.colors.secondary}`,
  }
});

export const DisabledButton = merge(button, {
  'backgroundColor': `${theme.colors.athensGrey}`,
  'color': `${theme.colors.disabled}`,
  'cursor': `not-allowed`,
  ':hover': {
    'boxShadow': `none`,
  }
});

export const DangerButton = merge(button, {
  'backgroundColor': `${theme.colors.danger}`,
  'color': `${theme.colors.white}`,
  ':hover': {
    'backgroundColor': `${theme.colors.white}`,
    'color': `${theme.colors.danger}`,
  }
});

export const InvertedButton = merge(button, {
  'backgroundColor': `${theme.colors.white}`,
  'color': `${theme.colors.shark}`,

  ':hover': {
    'boxShadow': `0 0 0 1px`,
    'backgroundColor': `transparent`,
    'color': `${theme.colors.white}`,
  }
});