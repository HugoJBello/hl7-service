
// Generated typescript code of HL7v 2.6 CM1  (Clinical Study Phase Master)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyPhaseMasterV6Document = mongoose.Document & HL7ClinicalStudyPhaseMasterV6I

const HL7ClinicalStudyPhaseMasterV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDCM1: String,
  studyPhaseIdentifier: String,
  descriptionOfStudyPhase: String,
  
  }, { timestamps: true });
  
export interface HL7ClinicalStudyPhaseMasterV6I extends Segment{
  setIDCM1: string
  studyPhaseIdentifier: string
  descriptionOfStudyPhase: string
  
  }
  export const HL7ClinicalStudyPhaseMasterV6 = mongoose.model<HL7ClinicalStudyPhaseMasterV6Document> ("HL7ClinicalStudyPhaseMasterV6", HL7ClinicalStudyPhaseMasterV6Schema);

