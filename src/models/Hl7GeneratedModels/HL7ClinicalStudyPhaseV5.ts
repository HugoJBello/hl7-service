
// Generated typescript code of HL7v 2.5 CSP  (Clinical Study Phase)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyPhaseV5Document = mongoose.Document & HL7ClinicalStudyPhaseV5I

const HL7ClinicalStudyPhaseV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  studyPhaseIdentifier: String,
  datetimeStudyPhaseBegan: Date,
  datetimeStudyPhaseEnded: Date,
  studyPhaseEvaluability: String,
  
  }, { timestamps: true });
  
export interface HL7ClinicalStudyPhaseV5I extends Segment{
  studyPhaseIdentifier: string
  datetimeStudyPhaseBegan: Date
  datetimeStudyPhaseEnded: Date
  studyPhaseEvaluability: string
  
  }
  export const HL7ClinicalStudyPhaseV5 = mongoose.model<HL7ClinicalStudyPhaseV5Document> ("HL7ClinicalStudyPhaseV5", HL7ClinicalStudyPhaseV5Schema);

