
// Generated typescript code of HL7v 2.7 LCH  (Location Characteristic)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LocationCharacteristicV7Document = mongoose.Document & HL7LocationCharacteristicV7I

const HL7LocationCharacteristicV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValueLch: String,
  segmentActionCode: String,
  segmentUniqueKey: String,
  locationCharacteristicId: String,
  locationCharacteristicValueLch: String,
  
  }, { timestamps: true });
  
export interface HL7LocationCharacteristicV7I extends Segment{
  primaryKeyValueLch: string
  segmentActionCode: string
  segmentUniqueKey: string
  locationCharacteristicId: string
  locationCharacteristicValueLch: string
  
  }
  export const HL7LocationCharacteristicV7 = mongoose.model<HL7LocationCharacteristicV7Document> ("HL7LocationCharacteristicV7", HL7LocationCharacteristicV7Schema);

