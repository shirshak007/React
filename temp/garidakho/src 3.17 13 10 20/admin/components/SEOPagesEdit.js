import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import SEOData from "../asset/SEOData";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Title", width: 200 },
  { field: "keyword", headerName: "Keyword", width: 200 },
  { field: "pagename", headerName: "Page Name", width: 100 },
  {
    field: "description",
    headerName: "Description",
    width: 500,
  },
  { field: "pageurl", headerName: "Page URL", width: 500 },
];

export default function SEOPagesEdit() {
  const handleCellClick = (e) => {
    console.log("Clicked");
  };
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={SEOData}
        columns={columns}
        pageSize={5}
        checkboxSelection
        onCellClick={(params) => handleCellClick(params)}
      />
    </div>
  );
}
