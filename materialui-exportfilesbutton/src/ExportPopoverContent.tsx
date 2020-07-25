import { Button } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import React, { FC } from 'react';
import { CheckboxField, SelectField } from './form-fields';
import {
  exportFormatOptions,
  initialValues,
  validationSchema,
} from './formData';
import { ExportPopoverContentProps } from './models';
import { useExportPopoverContentStyles } from './styles';

export const ExportPopoverContent: FC<ExportPopoverContentProps> = (
  props: ExportPopoverContentProps,
) => {
  const { onExport, onCancel } = props;
  const classes = useExportPopoverContentStyles();

  return (
    <div className={classes.root}>
      <Formik
        initialValues={initialValues}
        validateOnMount
        validationSchema={validationSchema}
        onSubmit={onExport}
      >
        {({ isValid }) => (
          <Form className={classes.form}>
            <Field
              name="exportFormat"
              component={SelectField}
              options={exportFormatOptions}
              label={`Format`}
              className={classes.selectField}
            />
         

            <div className={classes.actions}>
              <Button onClick={onCancel}>Cancel</Button>
              <Button
                color="primary"
                type="submit"
                disabled={!isValid}
                autoFocus
              >
                Export
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
