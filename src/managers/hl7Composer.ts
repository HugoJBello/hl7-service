import { Schema, SchemaField } from "../models/Schema";
import { isArray } from "util";

const separator = "|";
const arraySeparator = "^";

export const parseToHl7Date = (date: Date) => {
  const y = date.getFullYear().toString();
  let m = (date.getMonth() + 1).toString();
  let d = date.getDate().toString();
  let h = date.getHours().toString();
  let min = date.getMinutes().toString();
  let sec = date.getSeconds().toString();
  (d.length == 1) && (d = "0" + d);
  (m.length == 1) && (m = "0" + m);
  (h.length == 1) && (h = "0" + d);
  (min.length == 1) && (min = "0" + min);
  (sec.length == 1) && (sec = "0" + sec);
  const yyyymmdd = y + m + d + h + min + sec;
  return yyyymmdd;
};

export const parseDecodedSegmentUsingSchema = (hl7Item: any, schema: Schema): any => {
  let result = schema.segmentName;

  schema.fields.forEach(((field, index) => {
    const value = getValue(hl7Item, field);
    result = result + separator + value;
  }));

  return result as any;
};

const getValue = (hl7Item: any, field: SchemaField) => {
  const value = hl7Item[field.componentName];

  const isArray = Array.isArray(value);
  const isDate = value instanceof Date;
  if (!value) {
    return "";
  }

  if (field.dataType === "date" && isDate && !isArray) {
    return parseToHl7Date(value);
  } else if (field.dataType === "date") {
    return value.map((item: any) => parseToHl7Date(item)).join(arraySeparator);
  }

  if (!isArray) {
    return value;
  } else {
    return value.join(arraySeparator);
  }
};
