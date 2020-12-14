/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { jsx } from '@emotion/react';
import { ReactComponent as EmptyIcon } from '../../assets/empty.svg';

export const GroupsOrEmptyState = ({ groups, children }) => {
  return (
    <>
      {groups.length > 0 ? (
        children
      ) : (
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            minHeight: '200px',
          }}
        >
          <EmptyIcon />
          <p css={{ fontWeight: 500, marginTop: 16 }}>
            Add a new group to restore your sessions later
          </p>
        </div>
      )}
    </>
  );
};
