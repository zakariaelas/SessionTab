/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { CircleButton, Dialog, Button, FadeIn } from '../../lib';
import { VisuallyHidden } from '@reach/visually-hidden';

const callAll = (...fns) => (...args) =>
  fns.forEach((fn) => fn && fn(...args));

const ModalContext = React.createContext();

const Modal = (props) => {
  const [open, setOpen] = React.useState(false);

  return <ModalContext.Provider value={[open, setOpen]} {...props} />;
};

const useImperativeClose = () => {
  const [, setOpen] = React.useContext(ModalContext);

  return () => setOpen(false);
};

const ModalDismissButton = ({ children: child }) => {
  const [, setOpen] = React.useContext(ModalContext);

  return React.cloneElement(child, {
    onClick: callAll(() => setOpen(false), child.props.onClick),
  });
};

const ModalOpenButton = ({ children: child }) => {
  const [, setOpen] = React.useContext(ModalContext);

  return React.cloneElement(child, {
    onClick: callAll(() => setOpen(true), child.props.onClick),
  });
};

const ModalContentsBase = (props) => {
  const [open, setOpen] = React.useContext(ModalContext);

  return (
    <Dialog
      css={{ animation: `${FadeIn} 0.3s ease` }}
      isOpen={open}
      onDismiss={() => setOpen(false)}
      {...props}
    />
  );
};

const ModalContents = ({ title, children, ...props }) => {
  return (
    <ModalContentsBase>
      <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ModalDismissButton>
          <CircleButton>
            <VisuallyHidden>Close</VisuallyHidden>
            <span aria-hidden>×</span>
          </CircleButton>
        </ModalDismissButton>
      </div>
      <h3>{title}</h3>
      {children}
    </ModalContentsBase>
  );
};

const AlertModal = ({
  title = 'Are you sure?',
  okTitle = 'Confirm',
  cancelTitle = 'Cancel',
  children,
  onCancel = () => {},
  onConfirm = () => {},
  ...props
}) => {
  return (
    <ModalContentsBase>
      <h3 css={{ marginBottom: 8 }}>{title}</h3>
      {children}
      <div
        css={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: 16,
        }}
      >
        <div css={{ display: 'flex', alignItems: 'center' }}>
          <ModalDismissButton>
            <Button onClick={onCancel}>{cancelTitle}</Button>
          </ModalDismissButton>
          <ModalDismissButton>
            <Button css={{ marginLeft: 8 }} onClick={onConfirm}>
              {okTitle}
            </Button>
          </ModalDismissButton>
        </div>
      </div>
    </ModalContentsBase>
  );
};

export {
  Modal,
  ModalDismissButton,
  ModalOpenButton,
  ModalContents,
  AlertModal,
  useImperativeClose,
};
