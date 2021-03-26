
// Generated typescript code of HL7v 2.5 RGS  (Resource Group)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ResourceGroupV5Document = mongoose.Document & HL7ResourceGroupV5I

const HL7ResourceGroupV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDRGS: String,
  segmentActionCode: String,
  resourceGroupID: String,
  
  }, { timestamps: true });
  
export interface HL7ResourceGroupV5I extends Segment{
  setIDRGS: string
  segmentActionCode: string
  resourceGroupID: string
  
  }
  export const HL7ResourceGroupV5 = mongoose.model<HL7ResourceGroupV5Document> ("HL7ResourceGroupV5", HL7ResourceGroupV5Schema);

