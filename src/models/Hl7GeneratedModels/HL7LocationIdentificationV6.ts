
// Generated typescript code of HL7v 2.6 LOC  (Location Identification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LocationIdentificationV6Document = mongoose.Document & HL7LocationIdentificationV6I

const HL7LocationIdentificationV6Schema = new mongoose.Schema({
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
  
export interface HL7LocationIdentificationV6I extends Segment{
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
  export const HL7LocationIdentificationV6 = mongoose.model<HL7LocationIdentificationV6Document> ("HL7LocationIdentificationV6", HL7LocationIdentificationV6Schema);

