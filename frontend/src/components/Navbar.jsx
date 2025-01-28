import { Flex, Text, Button } from "@chakra-ui/react";
import { NavLink } from "react-router";
import { Avatar } from "@/components/ui/avatar";
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
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/post/create">Create Post</NavLink>

        <MenuRoot>
          <MenuTrigger asChild>
            <Button size="xs" variant="plain">
              <Avatar src="#" colorPalette="gray" />
            </Button>
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
