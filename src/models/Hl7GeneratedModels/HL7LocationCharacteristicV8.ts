
// Generated typescript code of HL7v 2.8 LCH  (Location Characteristic)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LocationCharacteristicV8Document = mongoose.Document & HL7LocationCharacteristicV8I

const HL7LocationCharacteristicV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValueLch: String,
  segmentActionCode: String,
  segmentUniqueKey: String,
  locationCharacteristicId: String,
  locationCharacteristicValueLch: String,
  
  }, { timestamps: true });
  
export interface HL7LocationCharacteristicV8I extends Segment{
  primaryKeyValueLch: string
  segmentActionCode: string
  segmentUniqueKey: string
  locationCharacteristicId: string
  locationCharacteristicValueLch: string
  
  }
  export const HL7LocationCharacteristicV8 = mongoose.model<HL7LocationCharacteristicV8Document> ("HL7LocationCharacteristicV8", HL7LocationCharacteristicV8Schema);

