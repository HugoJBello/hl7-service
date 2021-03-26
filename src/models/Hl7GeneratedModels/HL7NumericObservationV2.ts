
// Generated typescript code of HL7v 2.2 OM2  (Numeric Observation)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7NumericObservationV2Document = mongoose.Document & HL7NumericObservationV2I

const HL7NumericObservationV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  segmentTypeId: String,
  sequenceNumberTestObservationMasterFile: Number,
  unitsOfMeasure: String,
  rangeOfDecimalPrecision: Array(Number),
  correspondingSiUnitsOfMeasure: String,
  siConversionFactor: String,
  referenceNormalRangeOrdinalContinuousObservations: String,
  criticalRangeForOrdinalAndContinuousObservations: String,
  absoluteRangeForOrdinalAndContinuousObservations: String,
  deltaCheckCriteria: Array(String),
  minimumMeaningfulIncrements: Number,
  
  }, { timestamps: true });
  
export interface HL7NumericObservationV2I extends Segment{
  segmentTypeId: string
  sequenceNumberTestObservationMasterFile: number
  unitsOfMeasure: string
  rangeOfDecimalPrecision: number[]
  correspondingSiUnitsOfMeasure: string
  siConversionFactor: string
  referenceNormalRangeOrdinalContinuousObservations: string
  criticalRangeForOrdinalAndContinuousObservations: string
  absoluteRangeForOrdinalAndContinuousObservations: string
  deltaCheckCriteria: string[]
  minimumMeaningfulIncrements: number
  
  }
  export const HL7NumericObservationV2 = mongoose.model<HL7NumericObservationV2Document> ("HL7NumericObservationV2", HL7NumericObservationV2Schema);

