
// Generated typescript code of HL7v 2.4 LOC  (Location Identification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LocationIdentificationV4Document = mongoose.Document & HL7LocationIdentificationV4I

const HL7LocationIdentificationV4Schema = new mongoose.Schema({
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
  
export interface HL7LocationIdentificationV4I extends Segment{
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
  export const HL7LocationIdentificationV4 = mongoose.model<HL7LocationIdentificationV4Document> ("HL7LocationIdentificationV4", HL7LocationIdentificationV4Schema);

