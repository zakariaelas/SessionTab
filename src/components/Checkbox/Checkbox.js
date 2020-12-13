/** @jsxRuntime classic */
/** @jsx jsx */
import { CustomCheckboxInput } from '@reach/checkbox';
import { CheckboxContainer, CheckStyle } from '../../lib';
import { useField } from 'formik';
import { jsx } from '@emotion/react';

export const Checkbox = ({ label, value, name, ...props }) => {
  const [field] = useField(name);
  const checked = field.value.indexOf(value) !== -1;
  return (
    <label css={{ display: 'flex', alignItems: 'center' }}>
      <CheckboxContainer checked={checked} onChange={field.onChange}>
        <CustomCheckboxInput name={name} value={value} />
        <CheckStyle checked={checked} aria-hidden />
      </CheckboxContainer>
      <span
        css={{
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
        }}
      >
        {label}
      </span>
    </label>
  );
};
