import fs from "fs";
import { parse } from "csv-parse/sync";

export function readCSV(filePath) {
  const fileContent = fs.readFileSync(filePath);
  return parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  });
}
