
// Generated typescript code of HL7v 2.6 SLT  (Sterilization Lot Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SterilizationLotSegmentV6Document = mongoose.Document & HL7SterilizationLotSegmentV6I

const HL7SterilizationLotSegmentV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  deviceNumber: String,
  deviceName: String,
  lotNumber: String,
  itemIdentifier: String,
  barCode: String,
  
  }, { timestamps: true });
  
export interface HL7SterilizationLotSegmentV6I extends Segment{
  deviceNumber: string
  deviceName: string
  lotNumber: string
  itemIdentifier: string
  barCode: string
  
  }
  export const HL7SterilizationLotSegmentV6 = mongoose.model<HL7SterilizationLotSegmentV6Document> ("HL7SterilizationLotSegmentV6", HL7SterilizationLotSegmentV6Schema);

