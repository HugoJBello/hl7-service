
// Generated typescript code of HL7v 2.6 SFT  (Software Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SoftwareSegmentV6Document = mongoose.Document & HL7SoftwareSegmentV6I

const HL7SoftwareSegmentV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  softwareVendorOrganization: String,
  softwareCertifiedVersionOrReleaseNumber: String,
  softwareProductName: String,
  softwareBinaryID: String,
  softwareProductInformation: String,
  softwareInstallDate: String,
  
  }, { timestamps: true });
  
export interface HL7SoftwareSegmentV6I extends Segment{
  softwareVendorOrganization: string
  softwareCertifiedVersionOrReleaseNumber: string
  softwareProductName: string
  softwareBinaryID: string
  softwareProductInformation: string
  softwareInstallDate: string
  
  }
  export const HL7SoftwareSegmentV6 = mongoose.model<HL7SoftwareSegmentV6Document> ("HL7SoftwareSegmentV6", HL7SoftwareSegmentV6Schema);

