
// Generated typescript code of HL7v 2.4 ABS  (Abstract)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AbstractV4Document = mongoose.Document & HL7AbstractV4I

const HL7AbstractV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  dischargeCareProvider: String,
  transferMedicalServiceCode: String,
  severityOfIllnessCode: String,
  dateTimeOfAttestation: Date,
  attestedBy: String,
  triageCode: String,
  abstractCompletionDateTime: Date,
  abstractedBy: String,
  caseCategoryCode: String,
  caesarianSectionIndicator: String,
  gestationCategoryCode: String,
  gestationPeriodWeeks: Number,
  newbornCode: String,
  stillbornIndicator: String,
  
  }, { timestamps: true });
  
export interface HL7AbstractV4I extends Segment{
  dischargeCareProvider: string
  transferMedicalServiceCode: string
  severityOfIllnessCode: string
  dateTimeOfAttestation: Date
  attestedBy: string
  triageCode: string
  abstractCompletionDateTime: Date
  abstractedBy: string
  caseCategoryCode: string
  caesarianSectionIndicator: string
  gestationCategoryCode: string
  gestationPeriodWeeks: number
  newbornCode: string
  stillbornIndicator: string
  
  }
  export const HL7AbstractV4 = mongoose.model<HL7AbstractV4Document> ("HL7AbstractV4", HL7AbstractV4Schema);

