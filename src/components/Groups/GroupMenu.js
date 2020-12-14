/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Menu, MenuButton } from '@reach/menu-button';
import { ReactComponent as DeleteIcon } from '../../assets/delete.svg';
import { ReactComponent as DotsIcon } from '../../assets/dots.svg';
import { ReactComponent as EditIcon } from '../../assets/edit.svg';
import { ReactComponent as OpenWindowIcon } from '../../assets/open-window.svg';
import { DELETE_GROUP, EDIT_GROUP } from '../../context/action-types';
import { useAppState } from '../../context/app';
import {
  Button,
  CustomMenuItem,
  CustomMenuList,
  IconButton,
} from '../../lib';
import { openInNewWindow } from '../../utils/openInNewWindow';
import { GroupForm } from '../GroupForm/GroupForm';
import {
  AlertModal,
  Modal,
  ModalContents,
  ModalOpenButton,
} from '../Modal/Modal';

export const GroupMenu = ({ group }) => {
  const { dispatch } = useAppState();
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        onClick={(e) => e.stopPropagation()}
      >
        <DotsIcon />
      </MenuButton>
      <CustomMenuList onClick={(e) => e.stopPropagation()}>
        <CustomMenuItem onClick={openInNewWindow(group.tabs)}>
          <OpenWindowIcon />
          <span
            css={css`
              margin-left: 8px;
            `}
          >
            Open All
          </span>
        </CustomMenuItem>
        <Modal>
          <ModalOpenButton>
            <CustomMenuItem>
              <EditIcon />
              <span
                css={css`
                  margin-left: 8px;
                `}
              >
                Edit Group
              </span>
            </CustomMenuItem>
          </ModalOpenButton>
          <ModalContents aria-label="Edit group" title="Edit Group">
            <GroupForm
              onSubmit={(values) => {
                dispatch({
                  type: EDIT_GROUP,
                  payload: { id: group.id, ...values },
                });
              }}
              initialValues={{
                name: group.name,
                tabs: group.tabs,
              }}
              submitButton={<Button variant="outlined">Edit</Button>}
            />
          </ModalContents>
        </Modal>
        <Modal>
          <ModalOpenButton>
            <CustomMenuItem>
              <DeleteIcon />
              <span
                css={css`
                  margin-left: 8px;
                `}
              >
                Remove
              </span>
            </CustomMenuItem>
          </ModalOpenButton>
          <AlertModal
            onConfirm={async () => {
              dispatch({ type: DELETE_GROUP, payload: group.id });
            }}
          >
            <p>Are you sure you want to delete this group?</p>
          </AlertModal>
        </Modal>
      </CustomMenuList>
    </Menu>
  );
};
