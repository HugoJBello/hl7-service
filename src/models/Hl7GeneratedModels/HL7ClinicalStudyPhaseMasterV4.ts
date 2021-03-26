
// Generated typescript code of HL7v 2.4 CM1  (Clinical Study Phase Master)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyPhaseMasterV4Document = mongoose.Document & HL7ClinicalStudyPhaseMasterV4I

const HL7ClinicalStudyPhaseMasterV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDCM1: String,
  studyPhaseIdentifier: String,
  descriptionOfStudyPhase: String,
  
  }, { timestamps: true });
  
export interface HL7ClinicalStudyPhaseMasterV4I extends Segment{
  setIDCM1: string
  studyPhaseIdentifier: string
  descriptionOfStudyPhase: string
  
  }
  export const HL7ClinicalStudyPhaseMasterV4 = mongoose.model<HL7ClinicalStudyPhaseMasterV4Document> ("HL7ClinicalStudyPhaseMasterV4", HL7ClinicalStudyPhaseMasterV4Schema);

