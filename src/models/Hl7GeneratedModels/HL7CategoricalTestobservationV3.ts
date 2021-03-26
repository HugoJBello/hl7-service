
// Generated typescript code of HL7v 2.3 OM3  (Categorical test/observation)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7CategoricalTestobservationV3Document = mongoose.Document & HL7CategoricalTestobservationV3I

const HL7CategoricalTestobservationV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sequenceNumber: Number,
  preferredCodingSystem: String,
  validCodedAnswers: String,
  normalTextCodesForCategoricalObservations: Array(String),
  abnormalTextCodesForCategoricalObservations: String,
  criticalTextCodesForCategoricalObservations: String,
  valueType: String,
  
  }, { timestamps: true });
  
export interface HL7CategoricalTestobservationV3I extends Segment{
  sequenceNumber: number
  preferredCodingSystem: string
  validCodedAnswers: string
  normalTextCodesForCategoricalObservations: string[]
  abnormalTextCodesForCategoricalObservations: string
  criticalTextCodesForCategoricalObservations: string
  valueType: string
  
  }
  export const HL7CategoricalTestobservationV3 = mongoose.model<HL7CategoricalTestobservationV3Document> ("HL7CategoricalTestobservationV3", HL7CategoricalTestobservationV3Schema);

