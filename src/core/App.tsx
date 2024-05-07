import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useThemeContext } from "../common/theme/useThemeContext";
import { GlobalStyle } from "./GlobalStyle";
import { themeDark, themeLight } from "./theme";
import Layout from "../features/Layout";
import Dashboard from "../features/pages/Dashboard";
import NotFound from "../features/pages/NotFound";
import { PetsProvider } from "../context/petsContext";
import { EventsProvider } from "../context/eventsContext";
import PetForm from "../features/forms/PetForm";
import EventForm from "../features/forms/EventForm";
import AllPets from "../features/pages/AllPets";
import AllEvents from "../features/pages/AllEvents";
import SinglePet from "../features/pages/SinglePet";

const App = () => {
  const { isDarkTheme } = useThemeContext();

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <GlobalStyle />
      <PetsProvider>
        <EventsProvider>
          <BrowserRouter basename="/pet-care-organizer/">
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/petForm" element={<PetForm />} />
                <Route path="/eventForm" element={<EventForm />} />
                <Route path="/pets" element={<AllPets />} />
                <Route path="/pet/:id" element={<SinglePet />} />
                <Route path="/events" element={<AllEvents />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </EventsProvider>
      </PetsProvider>
    </ThemeProvider>
  );
};

export default App;
