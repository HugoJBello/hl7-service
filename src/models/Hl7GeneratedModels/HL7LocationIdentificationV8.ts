
// Generated typescript code of HL7v 2.8 LOC  (Location Identification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LocationIdentificationV8Document = mongoose.Document & HL7LocationIdentificationV8I

const HL7LocationIdentificationV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValueLoc: String,
  locationDescription: String,
  locationTypeLoc: Array(String),
  organizationNameLoc: Array(String),
  locationAddress: Array(String),
  locationPhone: Array(String),
  licenseNumber: Array(String),
  locationEquipment: Array(String),
  locationServiceCode: String,
  
  }, { timestamps: true });
  
export interface HL7LocationIdentificationV8I extends Segment{
  primaryKeyValueLoc: string
  locationDescription: string
  locationTypeLoc: string[]
  organizationNameLoc: string[]
  locationAddress: string[]
  locationPhone: string[]
  licenseNumber: string[]
  locationEquipment: string[]
  locationServiceCode: string
  
  }
  export const HL7LocationIdentificationV8 = mongoose.model<HL7LocationIdentificationV8Document> ("HL7LocationIdentificationV8", HL7LocationIdentificationV8Schema);

