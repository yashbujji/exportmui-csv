import { FieldProps, getIn } from 'formik';

export const getFieldId = (name?: string) => {
  return `${name || 'field'}-${new Date().getTime()}`;
};

export const getError = (
  field: FieldProps['field'],
  form: FieldProps['form'],
) => {
  if (!field.name) {
    return {};
  }

  const error =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return { error: error ?? '', hasError: Boolean(error) };
};
