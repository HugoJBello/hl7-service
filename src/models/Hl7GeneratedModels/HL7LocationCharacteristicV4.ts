
// Generated typescript code of HL7v 2.4 LCH  (Location Characteristic)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LocationCharacteristicV4Document = mongoose.Document & HL7LocationCharacteristicV4I

const HL7LocationCharacteristicV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValueLCH: String,
  segmentActionCode: String,
  segmentUniqueKey: String,
  locationCharacteristicID: String,
  locationCharacteristicValueLCH: String,
  
  }, { timestamps: true });
  
export interface HL7LocationCharacteristicV4I extends Segment{
  primaryKeyValueLCH: string
  segmentActionCode: string
  segmentUniqueKey: string
  locationCharacteristicID: string
  locationCharacteristicValueLCH: string
  
  }
  export const HL7LocationCharacteristicV4 = mongoose.model<HL7LocationCharacteristicV4Document> ("HL7LocationCharacteristicV4", HL7LocationCharacteristicV4Schema);

