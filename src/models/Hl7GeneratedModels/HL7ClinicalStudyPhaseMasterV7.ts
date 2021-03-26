
// Generated typescript code of HL7v 2.7 CM1  (Clinical Study Phase Master)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyPhaseMasterV7Document = mongoose.Document & HL7ClinicalStudyPhaseMasterV7I

const HL7ClinicalStudyPhaseMasterV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdCm1: String,
  studyPhaseIdentifier: String,
  descriptionOfStudyPhase: String,
  
  }, { timestamps: true });
  
export interface HL7ClinicalStudyPhaseMasterV7I extends Segment{
  setIdCm1: string
  studyPhaseIdentifier: string
  descriptionOfStudyPhase: string
  
  }
  export const HL7ClinicalStudyPhaseMasterV7 = mongoose.model<HL7ClinicalStudyPhaseMasterV7Document> ("HL7ClinicalStudyPhaseMasterV7", HL7ClinicalStudyPhaseMasterV7Schema);

