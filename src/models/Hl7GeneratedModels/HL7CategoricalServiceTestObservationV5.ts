
// Generated typescript code of HL7v 2.5 OM3  (Categorical Service/Test/Observation)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7CategoricalServiceTestObservationV5Document = mongoose.Document & HL7CategoricalServiceTestObservationV5I

const HL7CategoricalServiceTestObservationV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sequenceNumberTestObservationMasterFile: Number,
  preferredCodingSystem: String,
  validCodedAnswers: String,
  normalTextCodesForCategoricalObservations: Array(String),
  abnormalTextCodesForCategoricalObservations: Array(String),
  criticalTextCodesForCategoricalObservations: Array(String),
  valueType: String,
  
  }, { timestamps: true });
  
export interface HL7CategoricalServiceTestObservationV5I extends Segment{
  sequenceNumberTestObservationMasterFile: number
  preferredCodingSystem: string
  validCodedAnswers: string
  normalTextCodesForCategoricalObservations: string[]
  abnormalTextCodesForCategoricalObservations: string[]
  criticalTextCodesForCategoricalObservations: string[]
  valueType: string
  
  }
  export const HL7CategoricalServiceTestObservationV5 = mongoose.model<HL7CategoricalServiceTestObservationV5Document> ("HL7CategoricalServiceTestObservationV5", HL7CategoricalServiceTestObservationV5Schema);

