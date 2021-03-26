
// Generated typescript code of HL7v 2.5 OM2  (Numeric Observation)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7NumericObservationV5Document = mongoose.Document & HL7NumericObservationV5I

const HL7NumericObservationV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sequenceNumberTestObservationMasterFile: Number,
  unitsOfMeasure: String,
  rangeOfDecimalPrecision: Array(Number),
  correspondingSIUnitsOfMeasure: String,
  sIConversionFactor: String,
  referenceNormalRangeOrdinalAndContinuousObservations: Array(String),
  criticalRangeForOrdinalAndContinuousObservations: Array(String),
  absoluteRangeForOrdinalAndContinuousObservations: String,
  deltaCheckCriteria: Array(String),
  minimumMeaningfulIncrements: Number,
  
  }, { timestamps: true });
  
export interface HL7NumericObservationV5I extends Segment{
  sequenceNumberTestObservationMasterFile: number
  unitsOfMeasure: string
  rangeOfDecimalPrecision: number[]
  correspondingSIUnitsOfMeasure: string
  sIConversionFactor: string
  referenceNormalRangeOrdinalAndContinuousObservations: string[]
  criticalRangeForOrdinalAndContinuousObservations: string[]
  absoluteRangeForOrdinalAndContinuousObservations: string
  deltaCheckCriteria: string[]
  minimumMeaningfulIncrements: number
  
  }
  export const HL7NumericObservationV5 = mongoose.model<HL7NumericObservationV5Document> ("HL7NumericObservationV5", HL7NumericObservationV5Schema);

