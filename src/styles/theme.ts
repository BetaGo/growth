import { opacify } from 'polished';

import { colors } from './colors';

export interface ITheme {
  palette: {
    background: {
      default: string;
      paper: string;
    };
    text: {
      primary: string;
      secondary: string;
      disabled: string;
      hint: string;
    };
    divider: string;
    action: IAction;
  };
}

export interface IAction {
  // active: string;
  hover: string;
  // hoverOpacity: number;
  // selected: string;
  // selectedOpacity: number;
  // disabled: string;
  // disabledOpacity: number;
  // disabledBackground: string;
  // focus: string;
  // focusOpacity: number;
  // activatedOpacity: number;
}

export const lightTheme: ITheme = {
  palette: {
    background: {
      default: colors.nord5,
      paper: colors.nord6,
    },
    text: {
      primary: colors.nord0,
      secondary: colors.nord1,
      disabled: colors.nord2,
      hint: colors.nord2,
    },
    divider: colors.nord1,
    action: {
      // active: 'rgba(0, 0, 0, 0.54)',
      hover: opacify(0.04, colors.nord0),
      // hoverOpacity: 0.04,
      // selected: 'rgba(0, 0, 0, 0.08)',
      // selectedOpacity: 0.08,
      // disabled: 'rgba(0, 0, 0, 0.26)',
      // disabledBackground: 'rgba(0, 0, 0, 0.12)',
      // disabledOpacity: 0.38,
      // focus: 'rgba(0, 0, 0, 0.12)',
      // focusOpacity: 0.12,
      // activatedOpacity: 0.12,
    },
  },
};

export const darkTheme: ITheme = {
  palette: {
    background: {
      default: colors.nord0,
      paper: colors.nord1,
    },
    text: {
      primary: colors.nord6,
      secondary: colors.nord5,
      disabled: colors.nord4,
      hint: colors.nord4,
    },
    divider: colors.nord5,
    action: {
      // active: '#fff',
      // hover: 'rgba(255, 255, 255, 0.08)',
      hover: opacify(0.08, colors.nord6),
      // hoverOpacity: 0.08,
      // // selected: 'rgba(255, 255, 255, 0.16)',
      // selected: opacify(0.16, colors.nord6),
      // selectedOpacity: 0.16,
      // disabled: 'rgba(255, 255, 255, 0.3)',
      // disabledBackground: 'rgba(255, 255, 255, 0.12)',
      // disabledOpacity: 0.38,
      // focus: 'rgba(255, 255, 255, 0.12)',
      // focusOpacity: 0.12,
      // activatedOpacity: 0.12,
    },
  },
};

export const themeDict: Record<string, ITheme> = {
  dark: darkTheme,
  light: lightTheme,
};

export const getTheme = (mode: string) => {
  return themeDict[mode] || darkTheme;
};
