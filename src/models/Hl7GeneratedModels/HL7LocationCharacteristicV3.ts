
// Generated typescript code of HL7v 2.3 LCH  (Location Characteristic)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LocationCharacteristicV3Document = mongoose.Document & HL7LocationCharacteristicV3I

const HL7LocationCharacteristicV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValue: String,
  segmentActionCode: String,
  segmentUniqueKey: String,
  locationCharacteristicID: String,
  locationCharacteristicValue: String,
  
  }, { timestamps: true });
  
export interface HL7LocationCharacteristicV3I extends Segment{
  primaryKeyValue: string
  segmentActionCode: string
  segmentUniqueKey: string
  locationCharacteristicID: string
  locationCharacteristicValue: string
  
  }
  export const HL7LocationCharacteristicV3 = mongoose.model<HL7LocationCharacteristicV3Document> ("HL7LocationCharacteristicV3", HL7LocationCharacteristicV3Schema);

