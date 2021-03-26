
// Generated typescript code of HL7v 2.6 OM2  (Numeric Observation)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7NumericObservationV6Document = mongoose.Document & HL7NumericObservationV6I

const HL7NumericObservationV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sequenceNumberTestObservationMasterFile: Number,
  unitsOfMeasure: String,
  rangeOfDecimalPrecision: Array(Number),
  correspondingSIUnitsOfMeasure: String,
  sIConversionFactor: String,
  referenceNormalRangeForOrdinalAndContinuousObservations: Array(String),
  criticalRangeForOrdinalAndContinuousObservations: Array(String),
  absoluteRangeForOrdinalAndContinuousObservations: String,
  deltaCheckCriteria: Array(String),
  minimumMeaningfulIncrements: Number,
  
  }, { timestamps: true });
  
export interface HL7NumericObservationV6I extends Segment{
  sequenceNumberTestObservationMasterFile: number
  unitsOfMeasure: string
  rangeOfDecimalPrecision: number[]
  correspondingSIUnitsOfMeasure: string
  sIConversionFactor: string
  referenceNormalRangeForOrdinalAndContinuousObservations: string[]
  criticalRangeForOrdinalAndContinuousObservations: string[]
  absoluteRangeForOrdinalAndContinuousObservations: string
  deltaCheckCriteria: string[]
  minimumMeaningfulIncrements: number
  
  }
  export const HL7NumericObservationV6 = mongoose.model<HL7NumericObservationV6Document> ("HL7NumericObservationV6", HL7NumericObservationV6Schema);

