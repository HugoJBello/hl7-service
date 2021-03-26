
// Generated typescript code of HL7v 2.7 LOC  (Location Identification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LocationIdentificationV7Document = mongoose.Document & HL7LocationIdentificationV7I

const HL7LocationIdentificationV7Schema = new mongoose.Schema({
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
  
export interface HL7LocationIdentificationV7I extends Segment{
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
  export const HL7LocationIdentificationV7 = mongoose.model<HL7LocationIdentificationV7Document> ("HL7LocationIdentificationV7", HL7LocationIdentificationV7Schema);

