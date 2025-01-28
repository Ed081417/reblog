import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 2fr 1fr" }}
        height="100vh"
        p={4}
      >
        <GridItem bg="gray.100" p={4} display={{ base: "none", md: "block" }}>
          Left Sidebar
        </GridItem>

        <GridItem bg="gray.200" p={4}>
          Main Content
        </GridItem>

        <GridItem bg="gray.100" p={4} display={{ base: "none", md: "block" }}>
          Right Sidebar
        </GridItem>
      </Grid>
    </>
  );
}

export default Home;
