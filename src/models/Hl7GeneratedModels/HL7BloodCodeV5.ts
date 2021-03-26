
// Generated typescript code of HL7v 2.5 BLC  (Blood Code)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BloodCodeV5Document = mongoose.Document & HL7BloodCodeV5I

const HL7BloodCodeV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  bloodProductCode: String,
  bloodAmount: String,
  
  }, { timestamps: true });
  
export interface HL7BloodCodeV5I extends Segment{
  bloodProductCode: string
  bloodAmount: string
  
  }
  export const HL7BloodCodeV5 = mongoose.model<HL7BloodCodeV5Document> ("HL7BloodCodeV5", HL7BloodCodeV5Schema);

