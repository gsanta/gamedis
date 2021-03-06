import apiInstance from '@/api/apiInstance';
import ToolType from '@/core/tool/ToolType';
import DataContext from '@/ui/DataContext';
import useObservable from '@/ui/state/hooks/useObservable';
import useStore from '@/ui/state/hooks/useStore';
import EraseToolOptions from '@/ui/tools/erase/EraseToolOptions';
import RectangleToolOptions from '@/ui/tools/rectangle/RectangleToolOptions';
import { Button, HStack, Text } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { useMutation } from 'react-query';
import LoginDialog from '../login/components/LoginDialog';
import SignUpDialog from '../signup/SignUpDialog';

const Menubar = () => {
  const { userStore } = useContext(DataContext);
  const [bindUserStore, bindToolStore] = useStore(DataContext, 'userStore', 'toolStore');
  const [email, isLoggedIn] = useObservable(
    bindUserStore,
    (store) => store.email,
    (store) => store.isLoggedIn(),
  );
  const selectedTool = useObservable(bindToolStore, (store) => store.selectedTool);
  const [isLoginDialogOpen, setLoginDialogOpen] = useState(false);
  const [isSignUpDialogOpen, setSignUpDialogOpen] = useState(false);

  const { mutate } = useMutation(async () => apiInstance.delete('/users/sign_out'), {
    onSuccess() {
      userStore?.logOut();
    },
  });

  const renderToolOptions = () => {
    switch (selectedTool?.type) {
      case ToolType.Rectangle:
        return <RectangleToolOptions />;
      case ToolType.Erase:
        return <EraseToolOptions />;
    }
    return <></>;
  };

  const handleClick = () => {
    setLoginDialogOpen(true);
  };

  const handleClose = () => {
    setLoginDialogOpen(false);
  };

  const handleSignUpDialogClose = () => {
    setSignUpDialogOpen(false);
  };

  const handleSignUp = () => {
    setSignUpDialogOpen(false);
  };

  const renderLogin = () => (
    <Button colorScheme="blue" onClick={handleClick}>
      Log in
    </Button>
  );

  const renderSignUp = () => (
    <Button colorScheme="blue" onClick={() => setSignUpDialogOpen(true)}>
      Sign Up
    </Button>
  );

  return (
    <HStack className="menubar" justify="space-between">
      {renderToolOptions()}
      {!isLoggedIn && (
        <HStack justify="end" w="full">
          {renderLogin()}
          {renderSignUp()}
        </HStack>
      )}
      {isLoggedIn && (
        <HStack justify="end" w="full">
          <Text>{email}</Text>
          <Button colorScheme="blue" onClick={() => mutate()}>
            Log out
          </Button>
        </HStack>
      )}
      <LoginDialog isOpen={isLoginDialogOpen} onClose={handleClose} />
      <SignUpDialog isOpen={isSignUpDialogOpen} onClose={handleSignUpDialogClose} onSignUp={handleSignUp} />
    </HStack>
  );
};

export default Menubar;
