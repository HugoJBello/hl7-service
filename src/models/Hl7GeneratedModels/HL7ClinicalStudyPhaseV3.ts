
// Generated typescript code of HL7v 2.3 CSP  (Clinical Study Phase)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyPhaseV3Document = mongoose.Document & HL7ClinicalStudyPhaseV3I

const HL7ClinicalStudyPhaseV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  studyPhaseIdentifier: String,
  datetimeStudyPhaseBegan: Date,
  datetimeStudyPhaseEnded: Date,
  studyPhaseEvaluability: String,
  
  }, { timestamps: true });
  
export interface HL7ClinicalStudyPhaseV3I extends Segment{
  studyPhaseIdentifier: string
  datetimeStudyPhaseBegan: Date
  datetimeStudyPhaseEnded: Date
  studyPhaseEvaluability: string
  
  }
  export const HL7ClinicalStudyPhaseV3 = mongoose.model<HL7ClinicalStudyPhaseV3Document> ("HL7ClinicalStudyPhaseV3", HL7ClinicalStudyPhaseV3Schema);

