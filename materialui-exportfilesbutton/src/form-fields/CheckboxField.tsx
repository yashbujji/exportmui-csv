import { Checkbox, CheckboxProps, FormControlLabel } from '@material-ui/core';
import { FieldProps } from 'formik';
import React from 'react';

type CheckboxFieldProps = FieldProps &
  CheckboxProps & {
    label: string;
  };

const CheckboxField: React.FC<CheckboxFieldProps> = (
  props: CheckboxFieldProps,
) => {
  const { field, label, ...rest } = props;

  return (
    <FormControlLabel
      control={<Checkbox {...rest} {...field} />}
      label={label}
    />
  );
};

export default CheckboxField;
