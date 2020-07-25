import { Button, Popover } from '@material-ui/core';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import React, { FC, useRef, useState } from 'react';
import { ExportPopoverContent } from './ExportPopoverContent';
import { ExportOptions, ExportProps } from './models';

const ExportButton: FC<ExportProps> = (props: ExportProps) => {
  const { disabled, onExport, className } = props;

  const [openPopover, setOpenPopover] = useState(false);
  const anchorEl = useRef<HTMLButtonElement | null>(null);

  const handleExportButtonClick = () => setOpenPopover(true);

  const closePopover = () => setOpenPopover(false);

  const handleExport = (exportOptions: ExportOptions) => {
    closePopover();
    onExport(exportOptions);
  };

  return (
    <>
      <Button
        className={className}
        ref={anchorEl}
        variant="text"
        color="primary"
        startIcon={<SaveAltIcon />}
        disabled={disabled}
        onClick={handleExportButtonClick}
      >
        {`Export`}
      </Button>

      <Popover
        open={openPopover}
        anchorEl={anchorEl?.current}
        onClose={closePopover}
      >
        <ExportPopoverContent onExport={handleExport} onCancel={closePopover} />
      </Popover>
    </>
  );
};

export default ExportButton;
