import { Schema, SchemaField } from "../models/Schema";
import { SegmentExtended } from "../models/Hl7GeneratedModels/Segment";

const separator = "|";
const arraySeparator = "^";

export const parseToHl7Date = (date: Date): string => {
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

export const encodeSegmentUsingSchema = (hl7Item: SegmentExtended, schema: Schema): string => {
  let result = schema.segmentName;

  schema.fields.forEach(((field, index) => {
    const value = getValue(hl7Item, field);
    result = result + separator + value;
  }));

  return result as string;
};

const getValue = (hl7Item: any, field: SchemaField): string => {
  const value = hl7Item[field.componentName];

  const isArray = Array.isArray(value);
  const isDate = value instanceof Date;
  if (!value) {
    return "";
  }

  if (field.dataType === "Date" && isDate && !isArray) {
    return parseToHl7Date(value);
  } else if (field.dataType === "Date") {
    return value.map((item: any) => parseToHl7Date(item)).join(arraySeparator);
  }

  if (!isArray) {
    return value;
  } else {
    return value.join(arraySeparator);
  }
};
