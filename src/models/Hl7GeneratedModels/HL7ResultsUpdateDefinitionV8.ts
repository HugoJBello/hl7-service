
// Generated typescript code of HL7v 2.8 URD  (Results/Update Definition)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ResultsUpdateDefinitionV8Document = mongoose.Document & HL7ResultsUpdateDefinitionV8I

const HL7ResultsUpdateDefinitionV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  uRD1: String,
  
  }, { timestamps: true });
  
export interface HL7ResultsUpdateDefinitionV8I extends Segment{
  uRD1: string
  
  }
  export const HL7ResultsUpdateDefinitionV8 = mongoose.model<HL7ResultsUpdateDefinitionV8Document> ("HL7ResultsUpdateDefinitionV8", HL7ResultsUpdateDefinitionV8Schema);

