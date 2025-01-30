import { Input, Textarea, Card, Stack, Button, Center } from "@chakra-ui/react";
import {
  FileUploadList,
  FileUploadRoot,
  FileUploadTrigger,
} from "@/components/ui/file-upload";
import { Field } from "@/components/ui/field";
import { Upload } from "lucide-react";
import Navbar from "./components/Navbar.jsx";

function CreatePost() {
  return (
    <>
      <Navbar />

      <Center marginTop="10">
        <Card.Root maxW="xl" width="100%">
          <Card.Header>
            <Card.Title>Create Post</Card.Title>
          </Card.Header>
          <Card.Body>
            <Stack gap="4" w="full">
              <Field label="Title">
                <Input autoFocus />
              </Field>
              <Field label="Body">
                <Textarea size="xl" />
              </Field>
              <Field
                label="Image"
                helperText="Acceptable formats are jpeg, jpg, png, gif only."
              >
                <FileUploadRoot accept={["image/png"]}>
                  <FileUploadTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Upload />
                      Upload file
                    </Button>
                  </FileUploadTrigger>
                  <FileUploadList />
                </FileUploadRoot>
              </Field>
            </Stack>
          </Card.Body>
          <Card.Footer>
            <Stack gap="4" w="full">
              <Button variant="solid" colorPalette="teal">
                Post
              </Button>
            </Stack>
          </Card.Footer>
        </Card.Root>
      </Center>
    </>
  );
}

export default CreatePost;
