import { Button } from "@chakra-ui/react";
import { Trash2 } from "lucide-react";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function DeletePostDialog() {
  return (
    <DialogRoot role="alertdialog">
      <DialogTrigger asChild>
        <Button size="xs" variant="surface" colorPalette="red">
          <Trash2 />
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Post</DialogTitle>
        </DialogHeader>
        <DialogBody>Are you sure you want to delete this post?</DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DialogActionTrigger>
          <Button colorPalette="red">Delete</Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
}

export default DeletePostDialog;
