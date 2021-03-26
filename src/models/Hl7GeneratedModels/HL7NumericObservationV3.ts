
// Generated typescript code of HL7v 2.3 OM2  (Numeric observation)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7NumericObservationV3Document = mongoose.Document & HL7NumericObservationV3I

const HL7NumericObservationV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sequenceNumber: Number,
  unitsOfMeasure: String,
  rangeOfDecimalPrecision: Array(Number),
  correspondingSIUnitsOfMeasure: String,
  sIConversionFactor: String,
  reference: String,
  criticalRangeForOrdinalContinuousObs: String,
  absoluteRangeForOrdinalContinuousObs: String,
  deltaCheckCriteria: Array(String),
  minimumMeaningfulIncrements: Number,
  
  }, { timestamps: true });
  
export interface HL7NumericObservationV3I extends Segment{
  sequenceNumber: number
  unitsOfMeasure: string
  rangeOfDecimalPrecision: number[]
  correspondingSIUnitsOfMeasure: string
  sIConversionFactor: string
  reference: string
  criticalRangeForOrdinalContinuousObs: string
  absoluteRangeForOrdinalContinuousObs: string
  deltaCheckCriteria: string[]
  minimumMeaningfulIncrements: number
  
  }
  export const HL7NumericObservationV3 = mongoose.model<HL7NumericObservationV3Document> ("HL7NumericObservationV3", HL7NumericObservationV3Schema);

