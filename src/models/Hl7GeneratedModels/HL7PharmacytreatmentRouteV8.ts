
// Generated typescript code of HL7v 2.8 RXR  (Pharmacy/treatment Route)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacytreatmentRouteV8Document = mongoose.Document & HL7PharmacytreatmentRouteV8I

const HL7PharmacytreatmentRouteV8Schema = new mongoose.Schema({
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
  
export interface HL7PharmacytreatmentRouteV8I extends Segment{
  route: string
  administrationSite: string
  administrationDevice: string
  administrationMethod: string
  routingInstruction: string
  administrationSiteModifier: string
  
  }
  export const HL7PharmacytreatmentRouteV8 = mongoose.model<HL7PharmacytreatmentRouteV8Document> ("HL7PharmacytreatmentRouteV8", HL7PharmacytreatmentRouteV8Schema);

