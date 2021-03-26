
// Generated typescript code of HL7v 2.3 LOC  (Location Identification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LocationIdentificationV3Document = mongoose.Document & HL7LocationIdentificationV3I

const HL7LocationIdentificationV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValue: String,
  locationDescription: String,
  locationType: Array(String),
  organizationName: String,
  locationAddress: String,
  locationPhone: Array(String),
  licenseNumber: Array(String),
  locationEquipment: Array(String),
  
  }, { timestamps: true });
  
export interface HL7LocationIdentificationV3I extends Segment{
  primaryKeyValue: string
  locationDescription: string
  locationType: string[]
  organizationName: string
  locationAddress: string
  locationPhone: string[]
  licenseNumber: string[]
  locationEquipment: string[]
  
  }
  export const HL7LocationIdentificationV3 = mongoose.model<HL7LocationIdentificationV3Document> ("HL7LocationIdentificationV3", HL7LocationIdentificationV3Schema);

