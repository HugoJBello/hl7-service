
// Generated typescript code of HL7v 2.6 BLC  (Blood Code)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BloodCodeV6Document = mongoose.Document & HL7BloodCodeV6I

const HL7BloodCodeV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  bloodProductCode: String,
  bloodAmount: String,
  
  }, { timestamps: true });
  
export interface HL7BloodCodeV6I extends Segment{
  bloodProductCode: string
  bloodAmount: string
  
  }
  export const HL7BloodCodeV6 = mongoose.model<HL7BloodCodeV6Document> ("HL7BloodCodeV6", HL7BloodCodeV6Schema);

