
// Generated typescript code of HL7v 2.8 URS  (Results/Update Selection Criteria)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ResultsUpdateSelectionCriteriaV8Document = mongoose.Document & HL7ResultsUpdateSelectionCriteriaV8I

const HL7ResultsUpdateSelectionCriteriaV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  uRS1: String,
  
  }, { timestamps: true });
  
export interface HL7ResultsUpdateSelectionCriteriaV8I extends Segment{
  uRS1: string
  
  }
  export const HL7ResultsUpdateSelectionCriteriaV8 = mongoose.model<HL7ResultsUpdateSelectionCriteriaV8Document> ("HL7ResultsUpdateSelectionCriteriaV8", HL7ResultsUpdateSelectionCriteriaV8Schema);

