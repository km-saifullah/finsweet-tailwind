tailwind.config = {
  theme: {
    extend: {
      maxWidth: {
        container: "1280px",
      },
      colors: {
        primary: "#FFD2A4",
        navBG: "#0D0D0D",
        white: "#fff",
        black: "#1C1D28",
        subHeading: "#161722",
        churchItemBG: "#FFF5EB",
        watchBG: "#F5F2F0",
      },
      fontFamily: {
        roboto: "'Roboto Condensed', sans-serif",
      },
      fontSize: {
        bannerHeading: "64px",
      },
      lineHeight: {
        paragraphLineHeight: "24px",
      },
      backgroundImage: {
        banner: "url('./images/banner.jpg')",
        overlay:
          "linear-gradient(40deg, #060606 16.68%, rgba(0, 0, 0, 0.02) 96.44%)",
        upcomingText:
          "linear-gradient(110deg, #A54E2B -53.83%, #DC9853 62.61%)",
      },
    },
  },
};
