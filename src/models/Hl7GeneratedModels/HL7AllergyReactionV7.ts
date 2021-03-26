
// Generated typescript code of HL7v 2.7 IAR  (Allergy Reaction)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AllergyReactionV7Document = mongoose.Document & HL7AllergyReactionV7I

const HL7AllergyReactionV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  allergyReactionCode: String,
  allergySeverityCode: String,
  sensitivityToCausativeAgentCode: String,
  management: String,
  
  }, { timestamps: true });
  
export interface HL7AllergyReactionV7I extends Segment{
  allergyReactionCode: string
  allergySeverityCode: string
  sensitivityToCausativeAgentCode: string
  management: string
  
  }
  export const HL7AllergyReactionV7 = mongoose.model<HL7AllergyReactionV7Document> ("HL7AllergyReactionV7", HL7AllergyReactionV7Schema);

