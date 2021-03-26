
// Generated typescript code of HL7v 2.4 CSP  (Clinical Study Phase)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyPhaseV4Document = mongoose.Document & HL7ClinicalStudyPhaseV4I

const HL7ClinicalStudyPhaseV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  studyPhaseIdentifier: String,
  datetimeStudyPhaseBegan: Date,
  datetimeStudyPhaseEnded: Date,
  studyPhaseEvaluability: String,
  
  }, { timestamps: true });
  
export interface HL7ClinicalStudyPhaseV4I extends Segment{
  studyPhaseIdentifier: string
  datetimeStudyPhaseBegan: Date
  datetimeStudyPhaseEnded: Date
  studyPhaseEvaluability: string
  
  }
  export const HL7ClinicalStudyPhaseV4 = mongoose.model<HL7ClinicalStudyPhaseV4Document> ("HL7ClinicalStudyPhaseV4", HL7ClinicalStudyPhaseV4Schema);

