
// Generated typescript code of HL7v 2.7 ABS  (Abstract)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AbstractV7Document = mongoose.Document & HL7AbstractV7I

const HL7AbstractV7Schema = new mongoose.Schema({
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
  
export interface HL7AbstractV7I extends Segment{
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
  export const HL7AbstractV7 = mongoose.model<HL7AbstractV7Document> ("HL7AbstractV7", HL7AbstractV7Schema);

