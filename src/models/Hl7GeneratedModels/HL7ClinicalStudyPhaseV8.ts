
// Generated typescript code of HL7v 2.8 CSP  (Clinical Study Phase)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyPhaseV8Document = mongoose.Document & HL7ClinicalStudyPhaseV8I

const HL7ClinicalStudyPhaseV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  studyPhaseIdentifier: String,
  dateTimeStudyPhaseBegan: String,
  dateTimeStudyPhaseEnded: String,
  studyPhaseEvaluability: String,
  
  }, { timestamps: true });
  
export interface HL7ClinicalStudyPhaseV8I extends Segment{
  studyPhaseIdentifier: string
  dateTimeStudyPhaseBegan: string
  dateTimeStudyPhaseEnded: string
  studyPhaseEvaluability: string
  
  }
  export const HL7ClinicalStudyPhaseV8 = mongoose.model<HL7ClinicalStudyPhaseV8Document> ("HL7ClinicalStudyPhaseV8", HL7ClinicalStudyPhaseV8Schema);

