
// Generated typescript code of HL7v 2.7 PAC  (Shipment Package)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ShipmentPackageV7Document = mongoose.Document & HL7ShipmentPackageV7I

const HL7ShipmentPackageV7Schema = new mongoose.Schema({
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
  
export interface HL7ShipmentPackageV7I extends Segment{
  setIdPac: string
  packageId: string
  parentPackageId: string
  positionInParentPackage: string
  packageType: string
  packageCondition: string[]
  packageHandlingCode: string[]
  packageRiskCode: string[]
  
  }
  export const HL7ShipmentPackageV7 = mongoose.model<HL7ShipmentPackageV7Document> ("HL7ShipmentPackageV7", HL7ShipmentPackageV7Schema);

