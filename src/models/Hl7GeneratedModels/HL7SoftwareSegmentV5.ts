
// Generated typescript code of HL7v 2.5 SFT  (Software Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SoftwareSegmentV5Document = mongoose.Document & HL7SoftwareSegmentV5I

const HL7SoftwareSegmentV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  softwareVendorOrganization: String,
  softwareCertifiedVersionOrReleaseNumber: String,
  softwareProductName: String,
  softwareBinaryID: String,
  softwareProductInformation: String,
  softwareInstallDate: Date,
  
  }, { timestamps: true });
  
export interface HL7SoftwareSegmentV5I extends Segment{
  softwareVendorOrganization: string
  softwareCertifiedVersionOrReleaseNumber: string
  softwareProductName: string
  softwareBinaryID: string
  softwareProductInformation: string
  softwareInstallDate: Date
  
  }
  export const HL7SoftwareSegmentV5 = mongoose.model<HL7SoftwareSegmentV5Document> ("HL7SoftwareSegmentV5", HL7SoftwareSegmentV5Schema);

