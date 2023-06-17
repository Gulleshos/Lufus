import { Button as CheckoutButton } from "../../../components/common";
import { useForm } from "react-hook-form";
import { formInfo } from "../../../const";
import {
    Button,
    Input,
    VStack,
    useToast,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@chakra-ui/react";

const Checkout = ({ cleanCart }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { handleSubmit, register, reset } = useForm();

    const toast = useToast();

    const onSubmit = (data) => {
        toast({
            title: "Order accepted!",
            status: "success",
            duration: 3000,
            isClosable: true,
        });

        console.log(data);
        cleanCart();
        onClose();
        reset();
    };
    return (
        <>
            <CheckoutButton onClick={onOpen} text="Checkout" />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ModalHeader>Checkout</ModalHeader>

                        <ModalBody>
                            <VStack spacing={4}>
                                {formInfo.map(({ name, label, required, type }) => (
                                    <Input
                                        key={name}
                                        type={type}
                                        placeholder={label}
                                        {...register(
                                            name,
                                            required === true
                                                ? {
                                                      required: `Please enter your ${label}`,
                                                  }
                                                : undefined
                                        )}
                                    />
                                ))}
                            </VStack>
                        </ModalBody>

                        <ModalFooter>
                            <Button mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button type="submit" colorScheme="green">
                                Submit
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Checkout;
