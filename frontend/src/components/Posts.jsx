import {
  Card,
  Heading,
  Stack,
  Button,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Pencil, Trash2 } from "lucide-react";
import { NavLink } from "react-router";
import DeletePostDialog from "./DeletePostDialog.jsx";

function Home() {
  return (
    <Stack>
      <Card.Root size="md">
        <Card.Header>
          <Heading size="2xl">
            <ChakraLink variant="underline" asChild>
              <NavLink to="/post/1">Tokyo Drift</NavLink>
            </ChakraLink>
          </Heading>
        </Card.Header>
        <Card.Body color="fg.muted">
          <Text lineClamp="2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            obcaecati ex autem placeat, iusto laborum atque omnis sapiente
            nostrum deserunt labore itaque minima maxime accusantium aspernatur
            ipsa eius dicta consequuntur.
          </Text>
        </Card.Body>
        <Card.Footer justifyContent="flex-end">
          <Button size="xs" variant="surface" colorPalette="yellow" asChild>
            <NavLink to="/post/1/edit">
              <Pencil size={16} />
              Edit
            </NavLink>
          </Button>

          <DeletePostDialog />
        </Card.Footer>
      </Card.Root>

      <Card.Root size="md">
        <Card.Header>
          <Heading size="2xl">
            <ChakraLink variant="underline" href="#">
              Solo Leveling
            </ChakraLink>
          </Heading>
        </Card.Header>
        <Card.Body color="fg.muted">
          <Text lineClamp="2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            obcaecati ex autem placeat, iusto laborum atque omnis sapiente
            nostrum deserunt labore itaque minima maxime accusantium aspernatur
            ipsa eius dicta consequuntur.
          </Text>
        </Card.Body>
        <Card.Footer justifyContent="flex-end">
          <Button size="xs" variant="surface" colorPalette="yellow">
            <Pencil size={16} />
            Edit
          </Button>
          <Button size="xs" variant="surface" colorPalette="red">
            <Trash2 />
            Delete
          </Button>
        </Card.Footer>
      </Card.Root>

      <Card.Root size="md">
        <Card.Header>
          <Heading size="2xl">
            <ChakraLink variant="underline" href="#">
              Cebu
            </ChakraLink>
          </Heading>
        </Card.Header>
        <Card.Body color="fg.muted">
          <Text lineClamp="2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            obcaecati ex autem placeat, iusto laborum atque omnis sapiente
            nostrum deserunt labore itaque minima maxime accusantium aspernatur
            ipsa eius dicta consequuntur.
          </Text>
        </Card.Body>
        <Card.Footer justifyContent="flex-end">
          <Button size="xs" variant="surface" colorPalette="yellow">
            <Pencil size={16} />
            Edit
          </Button>
          <Button size="xs" variant="surface" colorPalette="red">
            <Trash2 />
            Delete
          </Button>
        </Card.Footer>
      </Card.Root>
    </Stack>
  );
}

export default Home;
