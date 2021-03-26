
// Generated typescript code of HL7v 2.8 TCD  (Test Code Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7TestCodeDetailV8Document = mongoose.Document & HL7TestCodeDetailV8I

const HL7TestCodeDetailV8Schema = new mongoose.Schema({
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
  
export interface HL7TestCodeDetailV8I extends Segment{
  universalServiceIdentifier: string
  autodilutionFactor: string
  rerunDilutionFactor: string
  predilutionFactor: string
  endogenousContentOfPredilutionDiluent: string
  automaticRepeatAllowed: string
  reflexAllowed: string
  analyteRepeatStatus: string
  
  }
  export const HL7TestCodeDetailV8 = mongoose.model<HL7TestCodeDetailV8Document> ("HL7TestCodeDetailV8", HL7TestCodeDetailV8Schema);

