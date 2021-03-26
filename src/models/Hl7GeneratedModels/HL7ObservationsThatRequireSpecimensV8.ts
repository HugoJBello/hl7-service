
// Generated typescript code of HL7v 2.8 OM4  (Observations That Require Specimens)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ObservationsThatRequireSpecimensV8Document = mongoose.Document & HL7ObservationsThatRequireSpecimensV8I

const HL7ObservationsThatRequireSpecimensV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sequenceNumberTestObservationMasterFile: Number,
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
  specimenHandlingCode: Array(String),
  specimenPreference: String,
  preferredSpecimenAttribtureSequenceID: Number,
  taxonomicClassificationCode: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ObservationsThatRequireSpecimensV8I extends Segment{
  sequenceNumberTestObservationMasterFile: number
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
  specimenHandlingCode: string[]
  specimenPreference: string
  preferredSpecimenAttribtureSequenceID: number
  taxonomicClassificationCode: string[]
  
  }
  export const HL7ObservationsThatRequireSpecimensV8 = mongoose.model<HL7ObservationsThatRequireSpecimensV8Document> ("HL7ObservationsThatRequireSpecimensV8", HL7ObservationsThatRequireSpecimensV8Schema);

