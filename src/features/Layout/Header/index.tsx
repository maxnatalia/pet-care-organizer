import { useThemeContext } from "../../../common/theme/useThemeContext";
import {
  Box,
  DarkIcon,
  LightIcon,
  Logo,
  PointerIcon,
  StyledHeader,
  ThemeBox,
  ThemeText,
  ThemeWrapper,
  Title,
} from "./styled";

const Header = () => {
  const { isDarkTheme, toggleTheme } = useThemeContext();

  return (
    <StyledHeader>
      <Box>
        <Logo />
        <Title>PET CARE ORGANIZER</Title>
      </Box>
      <ThemeWrapper>
        <ThemeText>Dark theme: {isDarkTheme ? "ON" : "OFF"}</ThemeText>
        <ThemeBox
          onClick={toggleTheme}
          title={`${
            isDarkTheme ? "Change theme to light" : "Change theme to dark"
          }`}
        >
          <PointerIcon $moveToRight={isDarkTheme} />
          <LightIcon />
          <DarkIcon />
        </ThemeBox>
      </ThemeWrapper>
    </StyledHeader>
  );
};

export default Header;
