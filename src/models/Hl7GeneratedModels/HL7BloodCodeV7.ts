
// Generated typescript code of HL7v 2.7 BLC  (Blood Code)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BloodCodeV7Document = mongoose.Document & HL7BloodCodeV7I

const HL7BloodCodeV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  bloodProductCode: String,
  bloodAmount: String,
  
  }, { timestamps: true });
  
export interface HL7BloodCodeV7I extends Segment{
  bloodProductCode: string
  bloodAmount: string
  
  }
  export const HL7BloodCodeV7 = mongoose.model<HL7BloodCodeV7Document> ("HL7BloodCodeV7", HL7BloodCodeV7Schema);

