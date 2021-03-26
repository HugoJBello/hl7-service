
// Generated typescript code of HL7v 2.7 TCD  (Test Code Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7TestCodeDetailV7Document = mongoose.Document & HL7TestCodeDetailV7I

const HL7TestCodeDetailV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  universalServiceIdentifier: String,
  autodilutionFactor: String,
  rerunDilutionFactor: String,
  predilutionFactor: String,
  endogenousContentOfPredilutionDiluent: String,
  automaticRepeatAllowed: String,
  reflexAllowed: String,
  analyteRepeatStatus: String,
  
  }, { timestamps: true });
  
export interface HL7TestCodeDetailV7I extends Segment{
  universalServiceIdentifier: string
  autodilutionFactor: string
  rerunDilutionFactor: string
  predilutionFactor: string
  endogenousContentOfPredilutionDiluent: string
  automaticRepeatAllowed: string
  reflexAllowed: string
  analyteRepeatStatus: string
  
  }
  export const HL7TestCodeDetailV7 = mongoose.model<HL7TestCodeDetailV7Document> ("HL7TestCodeDetailV7", HL7TestCodeDetailV7Schema);

