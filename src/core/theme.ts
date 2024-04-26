const colorNames = {
  white: "#FBFBFE",
  black: "#252525",
  lightGray: "#f3f3f3",
  darkGray: "#939393",
  beige: "#e8dcc6",
  lightBeige: "#f0f1ec",
  lightYellow: "#ffdf68",
  darkYellow: "#f8b63e",
  lightPink: "#f0baf8",
  darkPink: "#b359dd",
  lightGreen: "#9cf4e6",
  darkGreen: "#319595",
  lightBlue: "#5db9ff",
  darkBlue: "#394fd8",
  yellow: "#f4c826",
  red: "#e52855",
  orange: "#ee7452",
  darkOrange: "#c96144",
  tealLight: "#7db2b6",
  tealDark: "#346C6F",
  y: "#2d2d2d",
  carrara: "#eef0eb",
  gradientLight: "linear-gradient(135deg, #7db2b6, #eef0eb)",
  gradientDark: "linear-gradient(135deg, #283E3B, #346C6F)",
};

const deviceSize = {
  mobile: 767,
  tablet: 1024,
};

export const themeLight = {
  color: {
    backgroundBody: colorNames.gradientLight,
    backgroundPrimary: colorNames.carrara,
    backgroundSecondary: colorNames.white,
    textDefault: colorNames.black,
    textPrimary: colorNames.tealDark,
    special: colorNames.orange,
    edit: colorNames.yellow,
    delete: colorNames.red,
  },
  breakpoint: {
    mobile: deviceSize.mobile,
    tablet: deviceSize.tablet,
  },
};

export const themeDark = {
  color: {
    backgroundBody: colorNames.gradientDark,
    backgroundPrimary: colorNames.y,
    backgroundSecondary: colorNames.black,
    textDefault: colorNames.carrara,
    textPrimary: colorNames.tealLight,
    special: colorNames.darkOrange,
    edit: colorNames.darkYellow,
    delete: colorNames.red,
  },
  breakpoint: {
    mobile: deviceSize.mobile,
    tablet: deviceSize.tablet,
  },
};
