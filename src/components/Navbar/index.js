import React from 'react'
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
} from '@chakra-ui/react'
import {
    HamburgerIcon,
    CloseIcon,
    Search2Icon,
} from '@chakra-ui/icons'
import Logo from '../../logo.svg'

export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
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
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <Button
                        as={'a'}
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'sm'}
                        fontWeight={600}
                        color={'white'}
                        bg={'green.400'}
                        href={'#'}
                        _hover={{
                            bg: 'green.300',
                        }}>
                        Add a photo
                    </Button>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    )
}

const DesktopNav = () => {

    return (
        <Stack direction={'row'} spacing={4}>
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                    <Search2Icon color='gray.300' />
                </InputLeftElement>
                <Input type='text' placeholder='Search by name' />
            </InputGroup>
        </Stack>
    )
}

const MobileNav = () => {
    return (
        <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
           <Input>
           </Input>
        </Stack>
    )
}
