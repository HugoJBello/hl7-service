
// Generated typescript code of HL7v 2.3 RXR  (Pharmacy route segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacyRouteSegmentV3Document = mongoose.Document & HL7PharmacyRouteSegmentV3I

const HL7PharmacyRouteSegmentV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  route: String,
  site: String,
  administrationDevice: String,
  administrationMethod: String,
  
  }, { timestamps: true });
  
export interface HL7PharmacyRouteSegmentV3I extends Segment{
  route: string
  site: string
  administrationDevice: string
  administrationMethod: string
  
  }
  export const HL7PharmacyRouteSegmentV3 = mongoose.model<HL7PharmacyRouteSegmentV3Document> ("HL7PharmacyRouteSegmentV3", HL7PharmacyRouteSegmentV3Schema);

