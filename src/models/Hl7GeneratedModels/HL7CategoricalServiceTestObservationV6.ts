
// Generated typescript code of HL7v 2.6 OM3  (Categorical Service/Test/Observation)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7CategoricalServiceTestObservationV6Document = mongoose.Document & HL7CategoricalServiceTestObservationV6I

const HL7CategoricalServiceTestObservationV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sequenceNumberTestObservationMasterFile: Number,
  preferredCodingSystem: String,
  validCodedAnswers: Array(String),
  normalTextCodesForCategoricalObservations: Array(String),
  abnormalTextCodesForCategoricalObservations: Array(String),
  criticalTextCodesForCategoricalObservations: Array(String),
  valueType: String,
  
  }, { timestamps: true });
  
export interface HL7CategoricalServiceTestObservationV6I extends Segment{
  sequenceNumberTestObservationMasterFile: number
  preferredCodingSystem: string
  validCodedAnswers: string[]
  normalTextCodesForCategoricalObservations: string[]
  abnormalTextCodesForCategoricalObservations: string[]
  criticalTextCodesForCategoricalObservations: string[]
  valueType: string
  
  }
  export const HL7CategoricalServiceTestObservationV6 = mongoose.model<HL7CategoricalServiceTestObservationV6Document> ("HL7CategoricalServiceTestObservationV6", HL7CategoricalServiceTestObservationV6Schema);

