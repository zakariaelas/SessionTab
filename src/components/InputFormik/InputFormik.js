/** @jsxRuntime classic */
/** @jsx jsx */
import { useField } from 'formik';
import { ErrorMessage, Input, InputLabel } from '../../lib';
import { jsx } from '@emotion/react';

export const InputFormik = ({ label, name, ...props }) => {
  const [field, meta] = useField(name);
  const hasError = meta.touched && !!meta.error;
  return (
    <div css={{ display: 'flex', flexDirection: 'column' }}>
      <InputLabel htmlFor={props.id || name}>{label}</InputLabel>
      <Input {...props} {...field} id={props.id || name} />
      {hasError && <ErrorMessage>{meta.error}</ErrorMessage>}
    </div>
  );
};
