
// Generated typescript code of HL7v 2.8 SFT  (Software Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SoftwareSegmentV8Document = mongoose.Document & HL7SoftwareSegmentV8I

const HL7SoftwareSegmentV8Schema = new mongoose.Schema({
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
  
export interface HL7SoftwareSegmentV8I extends Segment{
  softwareVendorOrganization: string
  softwareCertifiedVersionOrReleaseNumber: string
  softwareProductName: string
  softwareBinaryId: string
  softwareProductInformation: string
  softwareInstallDate: string
  
  }
  export const HL7SoftwareSegmentV8 = mongoose.model<HL7SoftwareSegmentV8Document> ("HL7SoftwareSegmentV8", HL7SoftwareSegmentV8Schema);

