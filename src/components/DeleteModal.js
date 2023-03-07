import React from "react";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";

function DeleteModal({ deleteId, setData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const deleteExpense = () => {
    axios
      .delete(`http://localhost:8082/api/v1/expenses/${deleteId}`)
      .then((response) => {
        console.log(response);
        axios
          .get("http://localhost:8082/api/v1/expenses/1")
          .then((response) => {
            setData(response.data);
          });

        onClose();
      });
    console.log(deleteId);
  };
  return (
    <>
      <Button onClick={onOpen} size="md" colorScheme="red" variant="solid">
        <DeleteIcon />
      </Button>
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Expense
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onClose}>Cancel</Button>
              <Button colorScheme="red" onClick={deleteExpense} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default DeleteModal;
