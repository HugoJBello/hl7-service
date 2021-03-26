
// Generated typescript code of HL7v 2.6 LCH  (Location Characteristic)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LocationCharacteristicV6Document = mongoose.Document & HL7LocationCharacteristicV6I

const HL7LocationCharacteristicV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValueLCH: String,
  segmentActionCode: String,
  segmentUniqueKey: String,
  locationCharacteristicID: String,
  locationCharacteristicValueLCH: String,
  
  }, { timestamps: true });
  
export interface HL7LocationCharacteristicV6I extends Segment{
  primaryKeyValueLCH: string
  segmentActionCode: string
  segmentUniqueKey: string
  locationCharacteristicID: string
  locationCharacteristicValueLCH: string
  
  }
  export const HL7LocationCharacteristicV6 = mongoose.model<HL7LocationCharacteristicV6Document> ("HL7LocationCharacteristicV6", HL7LocationCharacteristicV6Schema);

