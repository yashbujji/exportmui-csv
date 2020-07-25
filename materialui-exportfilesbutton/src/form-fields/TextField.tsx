import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@material-ui/core';
import { FieldProps } from 'formik';
import React from 'react';
import { getError } from './field-helper';

type TextFieldProps = FieldProps & MuiTextFieldProps;

const TextField: React.FC<TextFieldProps> = ({
  field,
  form,
  helperText,
  size = 'small',
  ...props
}: TextFieldProps) => {
  const { error, hasError } = getError(field, form);

  return (
    <MuiTextField
      {...props}
      {...field}
      size={size}
      variant="outlined"
      helperText={hasError ? error : helperText}
      error={hasError}
    />
  );
};

export default TextField;
