
// Generated typescript code of HL7v 2.7 RXR  (Pharmacy/treatment Route)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacytreatmentRouteV7Document = mongoose.Document & HL7PharmacytreatmentRouteV7I

const HL7PharmacytreatmentRouteV7Schema = new mongoose.Schema({
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
  
export interface HL7PharmacytreatmentRouteV7I extends Segment{
  route: string
  administrationSite: string
  administrationDevice: string
  administrationMethod: string
  routingInstruction: string
  administrationSiteModifier: string
  
  }
  export const HL7PharmacytreatmentRouteV7 = mongoose.model<HL7PharmacytreatmentRouteV7Document> ("HL7PharmacytreatmentRouteV7", HL7PharmacytreatmentRouteV7Schema);

