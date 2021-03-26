
// Generated typescript code of HL7v 2.8 OM2  (Numeric Observation)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7NumericObservationV8Document = mongoose.Document & HL7NumericObservationV8I

const HL7NumericObservationV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sequenceNumberTestObservationMasterFile: Number,
  unitsOfMeasure: String,
  rangeOfDecimalPrecision: Array(Number),
  correspondingSiUnitsOfMeasure: String,
  siConversionFactor: String,
  referenceNormalRangeForOrdinalAndContinuousObservations: Array(String),
  criticalRangeForOrdinalAndContinuousObservations: Array(String),
  absoluteRangeForOrdinalAndContinuousObservations: String,
  deltaCheckCriteria: Array(String),
  minimumMeaningfulIncrements: Number,
  
  }, { timestamps: true });
  
export interface HL7NumericObservationV8I extends Segment{
  sequenceNumberTestObservationMasterFile: number
  unitsOfMeasure: string
  rangeOfDecimalPrecision: number[]
  correspondingSiUnitsOfMeasure: string
  siConversionFactor: string
  referenceNormalRangeForOrdinalAndContinuousObservations: string[]
  criticalRangeForOrdinalAndContinuousObservations: string[]
  absoluteRangeForOrdinalAndContinuousObservations: string
  deltaCheckCriteria: string[]
  minimumMeaningfulIncrements: number
  
  }
  export const HL7NumericObservationV8 = mongoose.model<HL7NumericObservationV8Document> ("HL7NumericObservationV8", HL7NumericObservationV8Schema);

