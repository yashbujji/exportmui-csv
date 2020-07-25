import { makeStyles, Theme } from '@material-ui/core';

export const useExportPopoverContentStyles = makeStyles(
  ({ spacing }: Theme) => ({
    root: {
      padding: spacing(2),
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    selectField: {
      width: 200,
    },
    actions: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  }),
  { name: 'ExportPopoverContent' },
);
