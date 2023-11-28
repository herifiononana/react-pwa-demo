import { GridColDef, GridColumnHeaderParams } from "@mui/x-data-grid";

export const createColumn = (field: string): GridColDef => ({
  field,
  headerName: field.toString(),
  width: 150,
  renderHeader: (params: GridColumnHeaderParams) => params.field.toUpperCase(),
});
