
// Generated typescript code of HL7v 2.4 TCD  (Test Code Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7TestCodeDetailV4Document = mongoose.Document & HL7TestCodeDetailV4I

const HL7TestCodeDetailV4Schema = new mongoose.Schema({
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
  
export interface HL7TestCodeDetailV4I extends Segment{
  universalServiceIdentifier: string
  autoDilutionFactor: string
  rerunDilutionFactor: string
  preDilutionFactor: string
  endogenousContentOfPreDilutionDiluent: string
  automaticRepeatAllowed: string
  reflexAllowed: string
  analyteRepeatStatus: string
  
  }
  export const HL7TestCodeDetailV4 = mongoose.model<HL7TestCodeDetailV4Document> ("HL7TestCodeDetailV4", HL7TestCodeDetailV4Schema);

