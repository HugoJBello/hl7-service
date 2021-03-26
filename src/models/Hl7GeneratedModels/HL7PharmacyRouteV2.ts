
// Generated typescript code of HL7v 2.2 RXR  (Pharmacy Route)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacyRouteV2Document = mongoose.Document & HL7PharmacyRouteV2I

const HL7PharmacyRouteV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  route: String,
  site: String,
  administrationDevice: String,
  administrationMethod: String,
  
  }, { timestamps: true });
  
export interface HL7PharmacyRouteV2I extends Segment{
  route: string
  site: string
  administrationDevice: string
  administrationMethod: string
  
  }
  export const HL7PharmacyRouteV2 = mongoose.model<HL7PharmacyRouteV2Document> ("HL7PharmacyRouteV2", HL7PharmacyRouteV2Schema);

