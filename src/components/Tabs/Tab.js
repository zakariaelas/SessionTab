/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import { ReactComponent as TabIcon } from '../../assets/tab.svg';
import { AlertModal, Modal, ModalOpenButton } from '../Modal';

export const Tab = ({ onDeleteTab, tab }) => {
  return (
    <li
      key={tab.title}
      css={{
        display: 'flex',
        alignItems: 'center',
        padding: '12px 0px',
      }}
    >
      <TabIcon />
      <a
        rel="noreferrer"
        target="_blank"
        href={tab.url}
        css={{
          marginLeft: 8,
          flex: 1,
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          color: '#000',
        }}
      >
        {tab.title}
      </a>
      <Modal>
        <ModalOpenButton>
          <CloseIcon css={{ cursor: 'pointer' }} />
        </ModalOpenButton>
        <AlertModal onConfirm={onDeleteTab}>
          <p>Are you sure you want to delete this tab?</p>
        </AlertModal>
      </Modal>
    </li>
  );
};
