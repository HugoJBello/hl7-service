
// Generated typescript code of HL7v 2.2 OM3  (Categorical Test/observation)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7CategoricalTestobservationV2Document = mongoose.Document & HL7CategoricalTestobservationV2I

const HL7CategoricalTestobservationV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  segmentTypeId: String,
  sequenceNumberTestObservationMasterFile: Number,
  preferredCodingSystem: String,
  validCodedAnswers: String,
  normalTestCodesForCategoricalObservations: Array(String),
  abnormalTestCodesForCategoricalObservations: String,
  criticalTestCodesForCategoricalObservations: String,
  dataType: String,
  
  }, { timestamps: true });
  
export interface HL7CategoricalTestobservationV2I extends Segment{
  segmentTypeId: string
  sequenceNumberTestObservationMasterFile: number
  preferredCodingSystem: string
  validCodedAnswers: string
  normalTestCodesForCategoricalObservations: string[]
  abnormalTestCodesForCategoricalObservations: string
  criticalTestCodesForCategoricalObservations: string
  dataType: string
  
  }
  export const HL7CategoricalTestobservationV2 = mongoose.model<HL7CategoricalTestobservationV2Document> ("HL7CategoricalTestobservationV2", HL7CategoricalTestobservationV2Schema);

