
// Generated typescript code of HL7v 2.7 CSP  (Clinical Study Phase)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyPhaseV7Document = mongoose.Document & HL7ClinicalStudyPhaseV7I

const HL7ClinicalStudyPhaseV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  studyPhaseIdentifier: String,
  dateTimeStudyPhaseBegan: String,
  dateTimeStudyPhaseEnded: String,
  studyPhaseEvaluability: String,
  
  }, { timestamps: true });
  
export interface HL7ClinicalStudyPhaseV7I extends Segment{
  studyPhaseIdentifier: string
  dateTimeStudyPhaseBegan: string
  dateTimeStudyPhaseEnded: string
  studyPhaseEvaluability: string
  
  }
  export const HL7ClinicalStudyPhaseV7 = mongoose.model<HL7ClinicalStudyPhaseV7Document> ("HL7ClinicalStudyPhaseV7", HL7ClinicalStudyPhaseV7Schema);

