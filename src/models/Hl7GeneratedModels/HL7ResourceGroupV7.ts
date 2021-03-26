
// Generated typescript code of HL7v 2.7 RGS  (Resource Group)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ResourceGroupV7Document = mongoose.Document & HL7ResourceGroupV7I

const HL7ResourceGroupV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdRgs: String,
  segmentActionCode: String,
  resourceGroupId: String,
  
  }, { timestamps: true });
  
export interface HL7ResourceGroupV7I extends Segment{
  setIdRgs: string
  segmentActionCode: string
  resourceGroupId: string
  
  }
  export const HL7ResourceGroupV7 = mongoose.model<HL7ResourceGroupV7Document> ("HL7ResourceGroupV7", HL7ResourceGroupV7Schema);

