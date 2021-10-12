import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/container.styled";
import Header from "./components/header";
import GlobalStyle from "./components/styles/global";
import content from "./content";
import Card from "./components/card";
import HireCard from "./components/hiring_now";
import Footer from "./components/footer";

const theme = {
  colors: {
    // header: "#ebfbff",
    header: "#bdebf7",
    body: "#fff",
    // footer: "#003333",
    footer: "#015064",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Container>
          {content.map((item, key) => {
            return <Card key={key} item={item} />;
          })}
          <HireCard />
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
