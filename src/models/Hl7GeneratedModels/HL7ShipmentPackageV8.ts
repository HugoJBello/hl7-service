
// Generated typescript code of HL7v 2.8 PAC  (Shipment Package)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ShipmentPackageV8Document = mongoose.Document & HL7ShipmentPackageV8I

const HL7ShipmentPackageV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdPac: String,
  packageId: String,
  parentPackageId: String,
  positionInParentPackage: String,
  packageType: String,
  packageCondition: Array(String),
  packageHandlingCode: Array(String),
  packageRiskCode: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ShipmentPackageV8I extends Segment{
  setIdPac: string
  packageId: string
  parentPackageId: string
  positionInParentPackage: string
  packageType: string
  packageCondition: string[]
  packageHandlingCode: string[]
  packageRiskCode: string[]
  
  }
  export const HL7ShipmentPackageV8 = mongoose.model<HL7ShipmentPackageV8Document> ("HL7ShipmentPackageV8", HL7ShipmentPackageV8Schema);

