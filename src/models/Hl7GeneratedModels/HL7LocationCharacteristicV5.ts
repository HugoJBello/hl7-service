
// Generated typescript code of HL7v 2.5 LCH  (Location Characteristic)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LocationCharacteristicV5Document = mongoose.Document & HL7LocationCharacteristicV5I

const HL7LocationCharacteristicV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValueLCH: String,
  segmentActionCode: String,
  segmentUniqueKey: String,
  locationCharacteristicID: String,
  locationCharacteristicValueLCH: String,
  
  }, { timestamps: true });
  
export interface HL7LocationCharacteristicV5I extends Segment{
  primaryKeyValueLCH: string
  segmentActionCode: string
  segmentUniqueKey: string
  locationCharacteristicID: string
  locationCharacteristicValueLCH: string
  
  }
  export const HL7LocationCharacteristicV5 = mongoose.model<HL7LocationCharacteristicV5Document> ("HL7LocationCharacteristicV5", HL7LocationCharacteristicV5Schema);

