import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  KeyboardDatePickerProps,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { FieldProps } from 'formik';
import React, { useCallback } from 'react';
import { getError } from './field-helper';

type DateFieldProps = FieldProps &
  KeyboardDatePickerProps & {
    label: string;
  };

const DateField: React.FC<DateFieldProps> = (props: DateFieldProps) => {
  const {
    field,
    field: { name, value, onBlur },
    form,
    label,
    format = 'MM/dd/yyyy',
    variant = 'inline',
    helperText,
    required,
    fullWidth,
    disabled,
    size = 'small',
    ...rest
  } = props;

  const { error, hasError } = getError(field, form);

  const onChange = useCallback((date) => form.setFieldValue(name, date, true), [
    name,
    form,
  ]);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        {...rest}
        disableToolbar
        variant={variant}
        inputVariant="outlined"
        size={size}
        format={format}
        name={name}
        label={label}
        value={value}
        InputLabelProps={{
          shrink: !!value,
        }}
        onChange={onChange}
        onBlur={onBlur}
        error={hasError}
        helperText={hasError ? error : helperText}
        KeyboardButtonProps={{
          'aria-label': `${label && label.toLowerCase()}`,
        }}
        required={required}
        fullWidth={fullWidth}
        disabled={disabled}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DateField;
