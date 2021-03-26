
// Generated typescript code of HL7v 2.3 OM4  (Observations that require specimens)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ObservationsThatRequireSpecimensV3Document = mongoose.Document & HL7ObservationsThatRequireSpecimensV3I

const HL7ObservationsThatRequireSpecimensV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sequenceNumber: Number,
  derivedSpecimen: String,
  containerDescription: String,
  containerVolume: Number,
  containerUnits: String,
  specimen: String,
  additive: String,
  preparation: String,
  specialHandlingRequirements: String,
  normalCollectionVolume: String,
  minimumCollectionVolume: String,
  specimenRequirements: String,
  specimenPriorities: Array(String),
  specimenRetentionTime: String,
  
  }, { timestamps: true });
  
export interface HL7ObservationsThatRequireSpecimensV3I extends Segment{
  sequenceNumber: number
  derivedSpecimen: string
  containerDescription: string
  containerVolume: number
  containerUnits: string
  specimen: string
  additive: string
  preparation: string
  specialHandlingRequirements: string
  normalCollectionVolume: string
  minimumCollectionVolume: string
  specimenRequirements: string
  specimenPriorities: string[]
  specimenRetentionTime: string
  
  }
  export const HL7ObservationsThatRequireSpecimensV3 = mongoose.model<HL7ObservationsThatRequireSpecimensV3Document> ("HL7ObservationsThatRequireSpecimensV3", HL7ObservationsThatRequireSpecimensV3Schema);

