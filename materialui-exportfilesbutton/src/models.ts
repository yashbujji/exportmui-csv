export interface ExportOptions {
  exportFormat: 'excel' | 'csv';
  includeFiltered?: boolean;
}

export interface ExportPopoverContentProps {
  onExport: (exportOptions: ExportOptions) => void;
  onCancel: () => void;
}

export interface ExportProps
  extends Pick<ExportPopoverContentProps, 'onExport'> {
  disabled?: boolean;
  className?: string;
}
