
// Generated typescript code of HL7v 2.3 RGS  (Resource Group)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ResourceGroupV3Document = mongoose.Document & HL7ResourceGroupV3I

const HL7ResourceGroupV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDRGS: String,
  segmentActionCode: String,
  resourceGroupID: String,
  
  }, { timestamps: true });
  
export interface HL7ResourceGroupV3I extends Segment{
  setIDRGS: string
  segmentActionCode: string
  resourceGroupID: string
  
  }
  export const HL7ResourceGroupV3 = mongoose.model<HL7ResourceGroupV3Document> ("HL7ResourceGroupV3", HL7ResourceGroupV3Schema);

