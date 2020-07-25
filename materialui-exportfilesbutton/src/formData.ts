import * as yup from 'yup';
import { ExportOptions } from './models';

export const exportFormatOptions = [
  {
    label: 'Excel (.xlsx)',
    value: 'excel',
  },
  {
    label: 'CSV (.csv)',
    value: 'csv',
  },
];

export const initialValues: ExportOptions = {
  exportFormat: 'excel',
  includeFiltered: false,
};

export const validationSchema = yup.object<ExportOptions>({
  exportFormat: yup
    .mixed()
    .required('Format is required')
    .oneOf(['excel', 'csv']),
  includeFiltered: yup.boolean(),
});
