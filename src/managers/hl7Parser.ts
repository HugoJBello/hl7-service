import { SchemaField } from "../models/Schema";

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

export const parseStringSegmentUsingSchema = (hl7Item: string, schema: SchemaField[]): any => {
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
        if (field.dataType == "date") {
          value = value.map(val => parseHl7Date(val));
        }
      } else {
        value = currentPart;
        if (field.dataType == "date") {
          value = parseHl7Date(value);
        }
      }
      result[name] = value;
    } else {
      let value = currentPart as any;
      if (field.dataType == "date") {
        value = parseHl7Date(value);
      }
      result[name] = value;
    }
  }));

  return result as any;
};
