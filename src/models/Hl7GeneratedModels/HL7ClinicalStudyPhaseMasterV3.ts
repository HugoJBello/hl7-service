
// Generated typescript code of HL7v 2.3 CM1  (Clinical Study Phase Master)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyPhaseMasterV3Document = mongoose.Document & HL7ClinicalStudyPhaseMasterV3I

const HL7ClinicalStudyPhaseMasterV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  cM1SetID: String,
  studyPhaseIdentifier: String,
  descriptionOfStudyPhase: String,
  
  }, { timestamps: true });
  
export interface HL7ClinicalStudyPhaseMasterV3I extends Segment{
  cM1SetID: string
  studyPhaseIdentifier: string
  descriptionOfStudyPhase: string
  
  }
  export const HL7ClinicalStudyPhaseMasterV3 = mongoose.model<HL7ClinicalStudyPhaseMasterV3Document> ("HL7ClinicalStudyPhaseMasterV3", HL7ClinicalStudyPhaseMasterV3Schema);

