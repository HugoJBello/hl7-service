
// Generated typescript code of HL7v 2.8 OM3  (Categorical Service/test/observation)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7CategoricalServicetestobservationV8Document = mongoose.Document & HL7CategoricalServicetestobservationV8I

const HL7CategoricalServicetestobservationV8Schema = new mongoose.Schema({
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
  
export interface HL7CategoricalServicetestobservationV8I extends Segment{
  sequenceNumberTestObservationMasterFile: number
  preferredCodingSystem: string
  validCodedAnswers: string[]
  normalTextCodesForCategoricalObservations: string[]
  abnormalTextCodesForCategoricalObservations: string[]
  criticalTextCodesForCategoricalObservations: string[]
  valueType: string
  
  }
  export const HL7CategoricalServicetestobservationV8 = mongoose.model<HL7CategoricalServicetestobservationV8Document> ("HL7CategoricalServicetestobservationV8", HL7CategoricalServicetestobservationV8Schema);

