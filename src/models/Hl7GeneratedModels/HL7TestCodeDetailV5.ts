
// Generated typescript code of HL7v 2.5 TCD  (Test Code Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7TestCodeDetailV5Document = mongoose.Document & HL7TestCodeDetailV5I

const HL7TestCodeDetailV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  universalServiceIdentifier: String,
  autoDilutionFactor: String,
  rerunDilutionFactor: String,
  preDilutionFactor: String,
  endogenousContentOfPreDilutionDiluent: String,
  automaticRepeatAllowed: String,
  reflexAllowed: String,
  analyteRepeatStatus: String,
  
  }, { timestamps: true });
  
export interface HL7TestCodeDetailV5I extends Segment{
  universalServiceIdentifier: string
  autoDilutionFactor: string
  rerunDilutionFactor: string
  preDilutionFactor: string
  endogenousContentOfPreDilutionDiluent: string
  automaticRepeatAllowed: string
  reflexAllowed: string
  analyteRepeatStatus: string
  
  }
  export const HL7TestCodeDetailV5 = mongoose.model<HL7TestCodeDetailV5Document> ("HL7TestCodeDetailV5", HL7TestCodeDetailV5Schema);

