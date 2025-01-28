import { Card, Heading, Stack, Button, Text, Link } from "@chakra-ui/react";
import { Pencil, Trash2 } from "lucide-react";

function Home() {
  return (
    <Stack>
      <Card.Root size="md">
        <Card.Header>
          <Heading size="2xl">
            <Link variant="underline" href="#">
              Tokyo Drift
            </Link>
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
            <Link variant="underline" href="#">
              Solo Leveling
            </Link>
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
            <Link variant="underline" href="#">
              Cebu
            </Link>
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
