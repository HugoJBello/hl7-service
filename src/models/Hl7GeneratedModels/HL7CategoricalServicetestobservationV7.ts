
// Generated typescript code of HL7v 2.7 OM3  (Categorical Service/test/observation)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7CategoricalServicetestobservationV7Document = mongoose.Document & HL7CategoricalServicetestobservationV7I

const HL7CategoricalServicetestobservationV7Schema = new mongoose.Schema({
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
  
export interface HL7CategoricalServicetestobservationV7I extends Segment{
  sequenceNumberTestObservationMasterFile: number
  preferredCodingSystem: string
  validCodedAnswers: string[]
  normalTextCodesForCategoricalObservations: string[]
  abnormalTextCodesForCategoricalObservations: string[]
  criticalTextCodesForCategoricalObservations: string[]
  valueType: string
  
  }
  export const HL7CategoricalServicetestobservationV7 = mongoose.model<HL7CategoricalServicetestobservationV7Document> ("HL7CategoricalServicetestobservationV7", HL7CategoricalServicetestobservationV7Schema);

