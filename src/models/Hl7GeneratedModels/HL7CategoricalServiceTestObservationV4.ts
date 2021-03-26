
// Generated typescript code of HL7v 2.4 OM3  (Categorical Service/Test/Observation)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7CategoricalServiceTestObservationV4Document = mongoose.Document & HL7CategoricalServiceTestObservationV4I

const HL7CategoricalServiceTestObservationV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sequenceNumberTestObservationMasterFile: Number,
  preferredCodingSystem: String,
  validCodedAnswers: String,
  normalTextCodesForCategoricalObservations: Array(String),
  abnormalTextCodesForCategoricalObservations: String,
  criticalTextCodesForCategoricalObservations: String,
  valueType: String,
  
  }, { timestamps: true });
  
export interface HL7CategoricalServiceTestObservationV4I extends Segment{
  sequenceNumberTestObservationMasterFile: number
  preferredCodingSystem: string
  validCodedAnswers: string
  normalTextCodesForCategoricalObservations: string[]
  abnormalTextCodesForCategoricalObservations: string
  criticalTextCodesForCategoricalObservations: string
  valueType: string
  
  }
  export const HL7CategoricalServiceTestObservationV4 = mongoose.model<HL7CategoricalServiceTestObservationV4Document> ("HL7CategoricalServiceTestObservationV4", HL7CategoricalServiceTestObservationV4Schema);

