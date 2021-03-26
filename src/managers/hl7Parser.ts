import { SchemaCompleteIndex, SchemaField } from "../models/Schema";
import { Hl7Segment, Hl7Version } from "../models/Segment";
import { SegmentExtended } from "../models/Hl7GeneratedModels/Segment";

const separator = "|";
const arraySeparator = "^";

export interface Hl7ParsedObject {
  [key: string]: any
}

export const parseHl7Date = (dateStr: string) => {
  if (dateStr.length === 8) {
    return new Date(dateStr.replace(
      /^(\d{4})(\d\d)(\d\d)$/,
      "$2/$3/$1",
    ));
  } else if (dateStr.length === 14)
    return new Date(dateStr.replace(
      /^(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)$/,
      "$4:$5:$6 $2/$3/$1",
    ));
};

export const parseType = (value: any, field: SchemaField): string | Date | number => {
  let result = value as string | Date | number;
  if (field.dataType == "Date") {
    result = parseHl7Date(value);
  } else if (field.dataType == "number") {
    result = parseFloat(value);
  }
  return result;
};

export const parseStringSegmentUsingSchema = (hl7Item: string, schema: SchemaField[]): SegmentExtended => {
  const result = {} as Hl7ParsedObject;

  const parts = hl7Item.split(separator);

  if (!parts || parts.length < 1) {
    throw new Error("wrong input, not hl7");
  }

  if (parts.length > schema.length + 1) {
    //throw new Error("wrong input, incorrect schema");
  }

  schema.forEach(((field, index) => {
    const currentPart = parts[index + 1];
    if (!currentPart || currentPart == "") return;
    const name = field.componentName;

    if (field.hl7Repeatability === true) {
      let value;
      if (currentPart.includes(arraySeparator)) {
        value = currentPart.split(arraySeparator);
        value = value.map(val => parseType(val, field));
      } else {
        value = currentPart;
        value = parseType(value, field);
      }
      result[name] = value;
    } else {
      let value = currentPart as any;
      value = parseType(value, field);
      result[name] = value;
    }
  }));

  return result as SegmentExtended;
};

export const hl7Decoder = (bsc: string, hl7version: Hl7Version, segment: Hl7Segment): SegmentExtended => {
  const schema = SchemaCompleteIndex[hl7version][segment];
  const result = parseStringSegmentUsingSchema(bsc, schema.fields) as SegmentExtended;
  result.hl7Segment = segment;
  result.hl7Version = hl7version;
  return result as SegmentExtended;
};
