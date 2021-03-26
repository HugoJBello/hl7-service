
// Generated typescript code of HL7v 2.6 CSP  (Clinical Study Phase)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyPhaseV6Document = mongoose.Document & HL7ClinicalStudyPhaseV6I

const HL7ClinicalStudyPhaseV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  studyPhaseIdentifier: String,
  datetimeStudyPhaseBegan: String,
  datetimeStudyPhaseEnded: String,
  studyPhaseEvaluability: String,
  
  }, { timestamps: true });
  
export interface HL7ClinicalStudyPhaseV6I extends Segment{
  studyPhaseIdentifier: string
  datetimeStudyPhaseBegan: string
  datetimeStudyPhaseEnded: string
  studyPhaseEvaluability: string
  
  }
  export const HL7ClinicalStudyPhaseV6 = mongoose.model<HL7ClinicalStudyPhaseV6Document> ("HL7ClinicalStudyPhaseV6", HL7ClinicalStudyPhaseV6Schema);

