import SocialIcons from "./social_icons";
import { Container } from "./styles/container.styled";
import { Flex } from "./styles/flex.styled";
import { StyledFooter } from "./styles/footer.styled";

export default function Footer({ theme }) {
  return (
    <StyledFooter>
      {theme === "light" ? (
        <div
          style={{ position: "relative" }}
          class="custom-shape-divider-top-1633959398"
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      ) : (
        <div
          style={{ position: "relative" }}
          class="custom-shape-divider-top-dark"
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      )}
      <Container>
        <Flex>
          <ul style={{ paddingLeft: "0px" }}>
            <li>
              {theme === "light" ? (
                <img src="./images/panthera-logo-footer.png" alt="" />
              ) : (
                <img src="./images/panthera-logo-footer-dark.png" alt="" />
              )}
            </li>
          </ul>

          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>

        <p>matt@matthewhansen.com.au</p>
        <p>
          I am not associated with Panthera Finance. This page was created for
          personal use to practice ReactJs implementation.
        </p>
      </Container>
    </StyledFooter>
  );
}
