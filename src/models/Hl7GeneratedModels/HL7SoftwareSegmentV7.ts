
// Generated typescript code of HL7v 2.7 SFT  (Software Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SoftwareSegmentV7Document = mongoose.Document & HL7SoftwareSegmentV7I

const HL7SoftwareSegmentV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  softwareVendorOrganization: String,
  softwareCertifiedVersionOrReleaseNumber: String,
  softwareProductName: String,
  softwareBinaryId: String,
  softwareProductInformation: String,
  softwareInstallDate: String,
  
  }, { timestamps: true });
  
export interface HL7SoftwareSegmentV7I extends Segment{
  softwareVendorOrganization: string
  softwareCertifiedVersionOrReleaseNumber: string
  softwareProductName: string
  softwareBinaryId: string
  softwareProductInformation: string
  softwareInstallDate: string
  
  }
  export const HL7SoftwareSegmentV7 = mongoose.model<HL7SoftwareSegmentV7Document> ("HL7SoftwareSegmentV7", HL7SoftwareSegmentV7Schema);

