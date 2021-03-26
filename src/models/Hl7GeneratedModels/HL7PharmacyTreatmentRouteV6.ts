
// Generated typescript code of HL7v 2.6 RXR  (Pharmacy/Treatment Route)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacyTreatmentRouteV6Document = mongoose.Document & HL7PharmacyTreatmentRouteV6I

const HL7PharmacyTreatmentRouteV6Schema = new mongoose.Schema({
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
  
export interface HL7PharmacyTreatmentRouteV6I extends Segment{
  route: string
  administrationSite: string
  administrationDevice: string
  administrationMethod: string
  routingInstruction: string
  administrationSiteModifier: string
  
  }
  export const HL7PharmacyTreatmentRouteV6 = mongoose.model<HL7PharmacyTreatmentRouteV6Document> ("HL7PharmacyTreatmentRouteV6", HL7PharmacyTreatmentRouteV6Schema);

