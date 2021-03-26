
// Generated typescript code of HL7v 2.4 RGS  (Resource Group)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ResourceGroupV4Document = mongoose.Document & HL7ResourceGroupV4I

const HL7ResourceGroupV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDRGS: String,
  segmentActionCode: String,
  resourceGroupID: String,
  
  }, { timestamps: true });
  
export interface HL7ResourceGroupV4I extends Segment{
  setIDRGS: string
  segmentActionCode: string
  resourceGroupID: string
  
  }
  export const HL7ResourceGroupV4 = mongoose.model<HL7ResourceGroupV4Document> ("HL7ResourceGroupV4", HL7ResourceGroupV4Schema);

