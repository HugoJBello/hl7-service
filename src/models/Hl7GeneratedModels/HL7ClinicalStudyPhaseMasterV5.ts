
// Generated typescript code of HL7v 2.5 CM1  (Clinical Study Phase Master)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyPhaseMasterV5Document = mongoose.Document & HL7ClinicalStudyPhaseMasterV5I

const HL7ClinicalStudyPhaseMasterV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDCM1: String,
  studyPhaseIdentifier: String,
  descriptionOfStudyPhase: String,
  
  }, { timestamps: true });
  
export interface HL7ClinicalStudyPhaseMasterV5I extends Segment{
  setIDCM1: string
  studyPhaseIdentifier: string
  descriptionOfStudyPhase: string
  
  }
  export const HL7ClinicalStudyPhaseMasterV5 = mongoose.model<HL7ClinicalStudyPhaseMasterV5Document> ("HL7ClinicalStudyPhaseMasterV5", HL7ClinicalStudyPhaseMasterV5Schema);

