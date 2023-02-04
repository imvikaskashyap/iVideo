import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import logo from '../assets/ivideos-logos (1)/ivideos-logos.jpeg';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/*  creating a button using chakra Ui => ye main button h jo drawer open karega */}
      <Button
        zIndex={'overlay'}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="linkedin"
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      {/* crating a Drawer form left side */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        {/* Drawer OVerlay for coming a pop up side bar */}
        <DrawerOverlay />

        {/* Yha pe content show hoga jo humain drawer me dikhana hai */}
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader display={'flex'}>
            <img
              to={'/'}
              src={logo}
              alt="logo"
              style={{
                width: '50px',
                borderRadius: '50%',
                display: 'initial',
                cursor: 'pointer',
              }}
            />
            <Link
              to={'/'}
              style={{
                marginLeft: '10px',
                marginTop: '13px',
                cursor: 'pointer',
              }}
            >
              iVideos
            </Link>
          </DrawerHeader>
          <DrawerBody>
            {/* VStack for verticaly flex */}
            <VStack alignItems={'flex-start'}>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to="/">Home</Link>
              </Button>

              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/videos'}>Videos</Link>
              </Button>

              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/upload'}>Upload Videos</Link>
              </Button>
            </VStack>

            <HStack
              position={'absolute'}
              bottom={'10'}
              left={'0'}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme={'purple'}>
                <Link to={'/login'}>Log In</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme={'purple'}
                variant={'outline'}
              >
                <Link to={'/signup'}>Sign Up </Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
