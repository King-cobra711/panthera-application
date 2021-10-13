import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/container.styled";
import Header from "./components/header";
import GlobalStyle from "./components/styles/global";
import content from "./content";
import Card from "./components/card";
import HireCard from "./components/hiring_now";
import Footer from "./components/footer";

const light = {
  colors: {
    header: "#bdebf7",
    text: "black",
    body: "#fff",
    footer: "#015064",
    button: "rgb(102, 102, 102)",
    background: "#fff",
    buttonText: "#fff",
  },
  mobile: "768px",
};
const dark = {
  colors: {
    header: "#015064",
    text: "white",
    body: "black",
    footer: "#002933",
    button: "#fff",
    background: "#002933",
    buttonText: "#000",
    link: "aqua",
  },
  mobile: "768px",
};

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <>
        <GlobalStyle />
        <Header theme={theme} setTheme={setTheme} />
        <Container>
          {content.map((item, key) => {
            return <Card key={key} item={item} />;
          })}
          <HireCard />
        </Container>
        <Footer theme={theme} />
      </>
    </ThemeProvider>
  );
}

export default App;
