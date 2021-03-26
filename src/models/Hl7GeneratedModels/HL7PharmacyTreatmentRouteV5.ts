
// Generated typescript code of HL7v 2.5 RXR  (Pharmacy/Treatment Route)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacyTreatmentRouteV5Document = mongoose.Document & HL7PharmacyTreatmentRouteV5I

const HL7PharmacyTreatmentRouteV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  route: String,
  administrationSite: String,
  administrationDevice: String,
  administrationMethod: String,
  routingInstruction: String,
  administrationSiteModifier: String,
  
  }, { timestamps: true });
  
export interface HL7PharmacyTreatmentRouteV5I extends Segment{
  route: string
  administrationSite: string
  administrationDevice: string
  administrationMethod: string
  routingInstruction: string
  administrationSiteModifier: string
  
  }
  export const HL7PharmacyTreatmentRouteV5 = mongoose.model<HL7PharmacyTreatmentRouteV5Document> ("HL7PharmacyTreatmentRouteV5", HL7PharmacyTreatmentRouteV5Schema);

