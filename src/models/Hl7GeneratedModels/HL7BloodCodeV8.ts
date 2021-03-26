
// Generated typescript code of HL7v 2.8 BLC  (Blood Code)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BloodCodeV8Document = mongoose.Document & HL7BloodCodeV8I

const HL7BloodCodeV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  bloodProductCode: String,
  bloodAmount: String,
  
  }, { timestamps: true });
  
export interface HL7BloodCodeV8I extends Segment{
  bloodProductCode: string
  bloodAmount: string
  
  }
  export const HL7BloodCodeV8 = mongoose.model<HL7BloodCodeV8Document> ("HL7BloodCodeV8", HL7BloodCodeV8Schema);

