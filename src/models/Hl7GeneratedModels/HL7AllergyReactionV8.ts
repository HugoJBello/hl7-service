
// Generated typescript code of HL7v 2.8 IAR  (Allergy Reaction)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AllergyReactionV8Document = mongoose.Document & HL7AllergyReactionV8I

const HL7AllergyReactionV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  allergyReactionCode: String,
  allergySeverityCode: String,
  sensitivityToCausativeAgentCode: String,
  management: String,
  
  }, { timestamps: true });
  
export interface HL7AllergyReactionV8I extends Segment{
  allergyReactionCode: string
  allergySeverityCode: string
  sensitivityToCausativeAgentCode: string
  management: string
  
  }
  export const HL7AllergyReactionV8 = mongoose.model<HL7AllergyReactionV8Document> ("HL7AllergyReactionV8", HL7AllergyReactionV8Schema);

