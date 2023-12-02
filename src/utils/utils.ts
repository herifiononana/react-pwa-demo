import { GridColDef, GridColumnHeaderParams } from "@mui/x-data-grid";

export const createColumn = (field: string): GridColDef => ({
  field,
  headerName: field.toString(),
  width: 150,
  renderHeader: (params: GridColumnHeaderParams) => params.field.toUpperCase(),
});

export const defineGridColDef = (columnConfig: any[]) =>
  columnConfig.map((config) => ({
    field: config.field,
    headerName: config.header,
    width: config.width,
    renderHeader: (params: GridColumnHeaderParams) =>
      params.field.toUpperCase(),
    renderCell: config.render ? config.render : undefined,
    flex: config.flex,
  }));

export const shortenText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  }

  let shortenedText = text.substring(0, maxLength);
  const lastSpaceIndex = shortenedText.lastIndexOf(" ");

  if (lastSpaceIndex !== -1) {
    shortenedText = shortenedText.substring(0, lastSpaceIndex);
  }

  return `${shortenedText} ...`;
};

export const formatAmount = (number: number) => {
  if (typeof number !== "number") {
    throw new Error("params must be a number");
  }

  const formattedNumber = number.toFixed(2);

  return `$${formattedNumber}`;
};
