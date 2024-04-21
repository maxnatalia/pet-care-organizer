import { useLocation } from "react-router-dom";
import { navigationList } from "./navigationList";
import { Label, List, StyledNavLink, StyledNavigation } from "./styled";

const Navigation = () => {
  const location = useLocation();
  const shouldDisplayForm =
    location.pathname === "/petForm" || location.pathname === "/eventForm";

  return (
    <>
      {!shouldDisplayForm && (
        <StyledNavigation>
          <List>
            {navigationList.map(({ name, link, title, Icon }) => (
              <li key={link}>
                <StyledNavLink
                  $special={link === "/petForm" || link === "/eventForm"}
                  to={link}
                  title={title}
                >
                  <Icon
                    $special={link === "/petForm" || link === "/eventForm"}
                  />
                  <Label
                    $special={link === "/petForm" || link === "/eventForm"}
                  >
                    {name}
                  </Label>
                </StyledNavLink>
              </li>
            ))}
          </List>
        </StyledNavigation>
      )}
    </>
  );
};

export default Navigation;
