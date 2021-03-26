
// Generated typescript code of HL7v 2.4 RXR  (Pharmacy/Treatment Route)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacyTreatmentRouteV4Document = mongoose.Document & HL7PharmacyTreatmentRouteV4I

const HL7PharmacyTreatmentRouteV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  route: String,
  administrationSite: String,
  administrationDevice: String,
  administrationMethod: String,
  routingInstruction: String,
  
  }, { timestamps: true });
  
export interface HL7PharmacyTreatmentRouteV4I extends Segment{
  route: string
  administrationSite: string
  administrationDevice: string
  administrationMethod: string
  routingInstruction: string
  
  }
  export const HL7PharmacyTreatmentRouteV4 = mongoose.model<HL7PharmacyTreatmentRouteV4Document> ("HL7PharmacyTreatmentRouteV4", HL7PharmacyTreatmentRouteV4Schema);

