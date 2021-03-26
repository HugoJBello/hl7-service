
// Generated typescript code of HL7v 2.8 CM1  (Clinical Study Phase Master)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyPhaseMasterV8Document = mongoose.Document & HL7ClinicalStudyPhaseMasterV8I

const HL7ClinicalStudyPhaseMasterV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdCm1: String,
  studyPhaseIdentifier: String,
  descriptionOfStudyPhase: String,
  
  }, { timestamps: true });
  
export interface HL7ClinicalStudyPhaseMasterV8I extends Segment{
  setIdCm1: string
  studyPhaseIdentifier: string
  descriptionOfStudyPhase: string
  
  }
  export const HL7ClinicalStudyPhaseMasterV8 = mongoose.model<HL7ClinicalStudyPhaseMasterV8Document> ("HL7ClinicalStudyPhaseMasterV8", HL7ClinicalStudyPhaseMasterV8Schema);

