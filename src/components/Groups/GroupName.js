/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

export const GroupName = ({ name, tabLength }) => {
  return (
    <div
      css={{
        marginLeft: 8,
        display: 'flex',
        flex: 1,
        alignItems: 'center',
      }}
    >
      <p
        css={{
          marginRight: '8px',
          fontWeight: 500,
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textTransform: 'capitalize',
        }}
      >
        {name} ({tabLength})
      </p>
    </div>
  );
};
