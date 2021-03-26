
// Generated typescript code of HL7v 2.5 LOC  (Location Identification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LocationIdentificationV5Document = mongoose.Document & HL7LocationIdentificationV5I

const HL7LocationIdentificationV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValueLOC: String,
  locationDescription: String,
  locationTypeLOC: Array(String),
  organizationNameLOC: Array(String),
  locationAddress: Array(String),
  locationPhone: Array(String),
  licenseNumber: Array(String),
  locationEquipment: Array(String),
  locationServiceCode: String,
  
  }, { timestamps: true });
  
export interface HL7LocationIdentificationV5I extends Segment{
  primaryKeyValueLOC: string
  locationDescription: string
  locationTypeLOC: string[]
  organizationNameLOC: string[]
  locationAddress: string[]
  locationPhone: string[]
  licenseNumber: string[]
  locationEquipment: string[]
  locationServiceCode: string
  
  }
  export const HL7LocationIdentificationV5 = mongoose.model<HL7LocationIdentificationV5Document> ("HL7LocationIdentificationV5", HL7LocationIdentificationV5Schema);

