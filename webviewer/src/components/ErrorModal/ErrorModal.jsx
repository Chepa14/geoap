import React, { useState, useEffect } from 'react';
import { Modal } from 'components/_shared/Modal';
import { Button } from 'components/_shared/Button';
import { useLocation } from 'react-router';

import { areasEvents } from '_events';
import {
  ROUTES,
  PERMISSION_ERROR,
  SERVER_ERROR,
  SIZE_ERROR,
  DEFAULT_ERROR
} from '_constants';
import { ButtonWrapper } from './ErrorModal.styles';

export const ErrorModal = () => {
  const [error, setError] = useState(null);
  const [errorText, setErrorText] = useState('');
  const location = useLocation();
  const isAuthRoute = location.pathname === ROUTES.AUTH;

  useEffect(() => {
    areasEvents.onToggleErrorModal(({ error }) => {
      if (error.config?.method === 'get' || isAuthRoute) {
        setError(null);
        return;
      }
      setError(error);
      if (typeof error === 'string') {
        setErrorText(error);
      } else {
        if (error.status === 403) {
          if (error.data.errorCode === 603) {
            setErrorText(SIZE_ERROR);
          } else {
            setErrorText(PERMISSION_ERROR);
          }
        } else if (error.status === 500) {
          setErrorText(SERVER_ERROR);
        } else {
          setErrorText(error.data?.name?.[0] || Object.values(error.data)?.[0][0]);
        }
      }
    });
  }, [location, isAuthRoute]);

  const handleCloseModal = () => setError(null);

  const handleOpenContactUs = () => {
    setError(null);
    areasEvents.toggleContactUs(true);
  };

  return (
    error && (
      <Modal close={handleCloseModal} textCenter={true}>
        <div>{errorText ?? DEFAULT_ERROR}</div>
        <ButtonWrapper>
          <Button variant='secondary' onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant='primary' onClick={handleOpenContactUs}>
            Send request
          </Button>
        </ButtonWrapper>
      </Modal>
    )
  );
};
