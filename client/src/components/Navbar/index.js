import React, {useState, useEffect} from 'react'
import {
    Box,
    Flex,
    Image,
    IconButton,
    Button,
    Stack,
    Collapse,
    Input,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    InputGroup,
    InputLeftElement,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Text,
    Grid,
} from '@chakra-ui/react'
import {
    HamburgerIcon,
    CloseIcon,
    Search2Icon,
} from '@chakra-ui/icons'
import Logo from '../../logo.svg'
import swal from 'sweetalert'

export default function WithSubnavigation({handleImageDataPass, handleSearchDataPass}) {
    const { isOpen, onOpen, onClose, onToggle } = useDisclosure()
    const [imageData, setImageData] = useState({label: "", imageUrl: ""})
    const [searchValue, setSearchValue] = useState("")

    const handleLabelChange = (event) => {
        setImageData({...imageData, label:event.target.value, imageUrl:imageData.imageUrl})
    }

    const handleImageChange = (event) => {
        setImageData({ ...imageData, label: imageData.label, imageUrl: event.target.value })
    }

    const updateSearchValue = (e) => {
        setSearchValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleImageDataPass(imageData)
        onClose()
        swal({
            title: "Success",
            text: "Image added successfully",
            icon: "success"
        }).then();
    }

    useEffect(() => {
        handleSearchDataPass(searchValue)
    }, [searchValue])

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Image 
                    src={Logo} 
                    textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                    >
                    </Image>

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav updateSearchValue={updateSearchValue}/>
                    </Flex>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <Button
                        onClick={onOpen}
                        display={{ base: 'inline-flex', md: 'inline-flex', sm:'none' }}
                        fontSize={'sm'}
                        fontWeight={600}
                        color={'white'}
                        bg={'green.400'}
                        _hover={{
                            bg: 'green.300',
                        }}>
                        Add a photo
                    </Button>
                </Stack>

                <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader fontSize={'xl'}>Add a new photo</ModalHeader>
                        <ModalBody>
                            <Box>
                                <Grid mb={4}>
                                    <Text>Label</Text>
                                    <Input 
                                    focusBorderColor='green'
                                    placeholder = "Enter a label"
                                    onChange={handleLabelChange}
                                    />
                                </Grid>
                                <Grid my={4}>
                                    <Text>Photo URL</Text>
                                    <Input
                                    focusBorderColor='green'
                                    placeholder="Enter Image Url"
                                    onChange={handleImageChange}
                                    />
                                </Grid>
                            </Box>
                        </ModalBody>

                        <ModalFooter>
                            <Button variant="ghost" mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='green' onClick={handleSubmit}>Submit</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>

            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav updateSearchValue={updateSearchValue}/>
            </Collapse>
        </Box>
    )
}

const DesktopNav = ({updateSearchValue}) => {

    return (
        <Stack direction={'row'} spacing={4}>
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                    <Search2Icon color='gray.300' />
                </InputLeftElement>
                <Input type='text' placeholder='Search by name' onChange={updateSearchValue}/>
            </InputGroup>
        </Stack>
    )
}

const MobileNav = ({updateSearchValue}) => {
    return (
        <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                    <Search2Icon color='gray.300' />
                </InputLeftElement>
                <Input type='text' placeholder='Search by name' onChange={updateSearchValue}/>
            </InputGroup>
        </Stack>
    )
}
