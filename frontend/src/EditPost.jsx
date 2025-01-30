import {
  Input,
  Textarea,
  Card,
  Stack,
  Button,
  Center,
  Image,
} from "@chakra-ui/react";
import {
  FileUploadList,
  FileUploadRoot,
  FileUploadTrigger,
} from "@/components/ui/file-upload";
import { Field } from "@/components/ui/field";
import { Upload } from "lucide-react";
import Navbar from "./components/Navbar.jsx";
import CarImg from "./assets/images/car1.jpg";

function EditPost() {
  return (
    <>
      <Navbar />

      <Center marginTop="10">
        <Card.Root maxW="xl" width="100%">
          <Card.Header>
            <Card.Title>Edit Post</Card.Title>
          </Card.Header>
          <Card.Body>
            <Stack gap="4" w="full">
              <Field label="Title">
                <Input />
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

                {/* <Image src={CarImg} alt="car" /> */}
              </Field>

              <Image src={CarImg} alt="car" />
            </Stack>
          </Card.Body>
          <Card.Footer>
            <Stack gap="4" w="full">
              <Button variant="solid" colorPalette="yellow">
                Update
              </Button>
            </Stack>
          </Card.Footer>
        </Card.Root>
      </Center>
    </>
  );
}

export default EditPost;
