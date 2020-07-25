import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from '@material-ui/core';
import { FieldProps } from 'formik';
import React, { FC } from 'react';
import { getError, getFieldId } from './field-helper';

interface Option {
  label: string;
  value: any;
  disabled?: boolean;
}

interface SelectFieldProps extends SelectProps, FieldProps {
  options: Option[];
  required?: boolean;
  disabled?: boolean;
  helperText?: string;
  size?: 'small' | 'medium';
}

const SelectField: FC<SelectFieldProps> = ({
  field,
  form,
  label,
  options,
  fullWidth,
  required,
  disabled,
  helperText,
  error: propError,
  size = 'small',
  className,
  ...props
}: SelectFieldProps) => {
  const { name, value, onChange, onBlur, multiple } = field;

  const { error, hasError } = getError(field, form);

  const fieldId = getFieldId(name);
  const labelId = `${fieldId}-outlined-label`;

  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current?.offsetWidth ?? 0);
  }, []);

  return (
    <FormControl
      variant="outlined"
      error={!!propError || hasError}
      size={size}
      margin="none"
      fullWidth={fullWidth}
      className={className}
    >
      {label && (
        <InputLabel ref={inputLabel} id={labelId} required={required}>
          {label}
        </InputLabel>
      )}

      <Select
        name={name}
        id={fieldId}
        labelId={labelId}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        multiple={multiple}
        labelWidth={labelWidth}
        disabled={disabled}
        {...props}
      >
        {options.map((option: Option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>

      {(!!propError || error) && (
        <FormHelperText>{helperText || error}</FormHelperText>
      )}
    </FormControl>
  );
};

export default SelectField;
