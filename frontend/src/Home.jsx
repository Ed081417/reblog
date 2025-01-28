import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar.jsx";
import Posts from "./components/Posts.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 2fr 1fr" }}
        height="100vh"
        p={4}
        bg="gray.50"
      >
        <GridItem p={4} display={{ base: "none", md: "block" }}></GridItem>

        <GridItem p={4}>
          <Posts />
        </GridItem>

        <GridItem p={4} display={{ base: "none", md: "block" }}></GridItem>
      </Grid>
    </>
  );
}

export default Home;
