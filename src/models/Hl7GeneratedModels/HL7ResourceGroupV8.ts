
// Generated typescript code of HL7v 2.8 RGS  (Resource Group)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ResourceGroupV8Document = mongoose.Document & HL7ResourceGroupV8I

const HL7ResourceGroupV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdRgs: String,
  segmentActionCode: String,
  resourceGroupId: String,
  
  }, { timestamps: true });
  
export interface HL7ResourceGroupV8I extends Segment{
  setIdRgs: string
  segmentActionCode: string
  resourceGroupId: string
  
  }
  export const HL7ResourceGroupV8 = mongoose.model<HL7ResourceGroupV8Document> ("HL7ResourceGroupV8", HL7ResourceGroupV8Schema);

