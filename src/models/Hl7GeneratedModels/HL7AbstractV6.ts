
// Generated typescript code of HL7v 2.6 ABS  (Abstract)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AbstractV6Document = mongoose.Document & HL7AbstractV6I

const HL7AbstractV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  dischargeCareProvider: String,
  transferMedicalServiceCode: String,
  severityOfIllnessCode: String,
  dateTimeOfAttestation: String,
  attestedBy: String,
  triageCode: String,
  abstractCompletionDateTime: String,
  abstractedBy: String,
  caseCategoryCode: String,
  caesarianSectionIndicator: String,
  gestationCategoryCode: String,
  gestationPeriodWeeks: Number,
  newbornCode: String,
  stillbornIndicator: String,
  
  }, { timestamps: true });
  
export interface HL7AbstractV6I extends Segment{
  dischargeCareProvider: string
  transferMedicalServiceCode: string
  severityOfIllnessCode: string
  dateTimeOfAttestation: string
  attestedBy: string
  triageCode: string
  abstractCompletionDateTime: string
  abstractedBy: string
  caseCategoryCode: string
  caesarianSectionIndicator: string
  gestationCategoryCode: string
  gestationPeriodWeeks: number
  newbornCode: string
  stillbornIndicator: string
  
  }
  export const HL7AbstractV6 = mongoose.model<HL7AbstractV6Document> ("HL7AbstractV6", HL7AbstractV6Schema);

