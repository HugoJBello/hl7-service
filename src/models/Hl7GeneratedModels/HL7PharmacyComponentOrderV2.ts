
// Generated typescript code of HL7v 2.2 RXC  (Pharmacy Component Order)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacyComponentOrderV2Document = mongoose.Document & HL7PharmacyComponentOrderV2I

const HL7PharmacyComponentOrderV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  rxComponentType: String,
  componentCode: String,
  componentAmount: Number,
  componentUnits: String,
  
  }, { timestamps: true });
  
export interface HL7PharmacyComponentOrderV2I extends Segment{
  rxComponentType: string
  componentCode: string
  componentAmount: number
  componentUnits: string
  
  }
  export const HL7PharmacyComponentOrderV2 = mongoose.model<HL7PharmacyComponentOrderV2Document> ("HL7PharmacyComponentOrderV2", HL7PharmacyComponentOrderV2Schema);

