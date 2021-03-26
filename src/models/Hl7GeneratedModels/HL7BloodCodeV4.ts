
// Generated typescript code of HL7v 2.4 BLC  (Blood Code)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BloodCodeV4Document = mongoose.Document & HL7BloodCodeV4I

const HL7BloodCodeV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  bloodProductCode: String,
  bloodAmount: String,
  
  }, { timestamps: true });
  
export interface HL7BloodCodeV4I extends Segment{
  bloodProductCode: string
  bloodAmount: string
  
  }
  export const HL7BloodCodeV4 = mongoose.model<HL7BloodCodeV4Document> ("HL7BloodCodeV4", HL7BloodCodeV4Schema);

