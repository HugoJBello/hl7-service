
// Generated typescript code of HL7v 2.6 RGS  (Resource Group)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ResourceGroupV6Document = mongoose.Document & HL7ResourceGroupV6I

const HL7ResourceGroupV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDRGS: String,
  segmentActionCode: String,
  resourceGroupID: String,
  
  }, { timestamps: true });
  
export interface HL7ResourceGroupV6I extends Segment{
  setIDRGS: string
  segmentActionCode: string
  resourceGroupID: string
  
  }
  export const HL7ResourceGroupV6 = mongoose.model<HL7ResourceGroupV6Document> ("HL7ResourceGroupV6", HL7ResourceGroupV6Schema);

