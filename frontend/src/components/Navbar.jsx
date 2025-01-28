import { Flex, Text, Link } from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";

function Navbar() {
  return (
    <Flex
      bg="teal.400"
      color="white"
      p={4}
      alignItems="center"
      justifyContent="space-between"
    >
      <Text fontSize="xl" fontWeight="bold">
        Reblog
      </Text>

      <Flex alignItems="center" gap={4}>
        <Link
          href="#"
          variant="underline"
          colorPalette="cyan.contrast"
          _focus={{ outline: "none" }}
        >
          Home
        </Link>

        <Link href="#" variant="underline" _focus={{ outline: "none" }}>
          Create Post
        </Link>

        <MenuRoot>
          <MenuTrigger asChild>
            <Link href="#" variant="underline" _focus={{ outline: "none" }}>
              John Doe
              <ChevronDown size={16} />
            </Link>
          </MenuTrigger>
          <MenuContent>
            <MenuItem value="new-txt">Profile</MenuItem>
            <MenuItem value="new-file">Logout</MenuItem>
          </MenuContent>
        </MenuRoot>
      </Flex>
    </Flex>
  );
}

export default Navbar;
