
// Generated typescript code of HL7v 2.4 OM2  (Numeric Observation)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7NumericObservationV4Document = mongoose.Document & HL7NumericObservationV4I

const HL7NumericObservationV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sequenceNumberTestObservationMasterFile: Number,
  unitsOfMeasure: String,
  rangeOfDecimalPrecision: Array(Number),
  correspondingSIUnitsOfMeasure: String,
  sIConversionFactor: String,
  reference: String,
  criticalRangeForOrdinalAndContinuousObservations: String,
  absoluteRangeForOrdinalAndContinuousObservations: String,
  deltaCheckCriteria: Array(String),
  minimumMeaningfulIncrements: Number,
  
  }, { timestamps: true });
  
export interface HL7NumericObservationV4I extends Segment{
  sequenceNumberTestObservationMasterFile: number
  unitsOfMeasure: string
  rangeOfDecimalPrecision: number[]
  correspondingSIUnitsOfMeasure: string
  sIConversionFactor: string
  reference: string
  criticalRangeForOrdinalAndContinuousObservations: string
  absoluteRangeForOrdinalAndContinuousObservations: string
  deltaCheckCriteria: string[]
  minimumMeaningfulIncrements: number
  
  }
  export const HL7NumericObservationV4 = mongoose.model<HL7NumericObservationV4Document> ("HL7NumericObservationV4", HL7NumericObservationV4Schema);

