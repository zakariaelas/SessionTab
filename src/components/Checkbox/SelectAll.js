/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { CustomCheckboxInput } from '@reach/checkbox';
import { useField } from 'formik';
import React from 'react';
import { CheckboxContainer, CheckStyle } from '../../lib';

export const SelectAll = ({ name, tabs, ...props }) => {
  const [, , { setValue }] = useField(name);
  const [checked, setChecked] = React.useState(
    props.checked || false,
  );
  const onChange = React.useCallback(
    (ev) => {
      if (checked) setValue([]);
      else {
        setValue(tabs);
      }
      setChecked(ev.target.checked);
    },
    [tabs, checked, setValue, setChecked],
  );
  return (
    <label css={{ display: 'flex', alignItems: 'center' }}>
      <CheckboxContainer checked={checked} onChange={onChange}>
        <CustomCheckboxInput {...props} />
        <CheckStyle checked={checked} aria-hidden />
      </CheckboxContainer>
      <span>Select All ({tabs.length})</span>
    </label>
  );
};
