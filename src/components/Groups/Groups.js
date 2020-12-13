/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { ReactComponent as AddFolderIcon } from '../../assets/folder-add.svg';
import { ADD_GROUP } from '../../context/action-types';
import { useAppState } from '../../context/app';
import { Button, IconButton } from '../../lib';
import { GroupForm } from '../GroupForm/GroupForm';
import { Modal, ModalContents, ModalOpenButton } from '../Modal';
import { GroupItem } from './GroupItem';

export const Groups = () => {
  const { dispatch, state } = useAppState();
  return (
    <div>
      <div
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1>Groups</h1>
        <Modal>
          <ModalOpenButton>
            <IconButton>
              <AddFolderIcon />
            </IconButton>
          </ModalOpenButton>
          <ModalContents aria-label="Add group" title="Add Group">
            <GroupForm
              onSubmit={(group) => {
                dispatch({ type: ADD_GROUP, payload: group });
              }}
              submitButton={
                <Button variant="outlined">Create</Button>
              }
            />
          </ModalContents>
        </Modal>
      </div>
      <div
        css={css`
          margin-top: 24px;
        `}
      >
        {state.groups.map((group) => (
          <GroupItem group={group} />
        ))}
      </div>
    </div>
  );
};
