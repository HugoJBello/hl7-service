
// Generated typescript code of HL7v 2.7 SHP  (Shipment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ShipmentV7Document = mongoose.Document & HL7ShipmentV7I

const HL7ShipmentV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  shipmentId: String,
  internalShipmentId: Array(String),
  shipmentStatus: String,
  shipmentStatusDateTime: String,
  shipmentStatusReason: String,
  shipmentPriority: String,
  shipmentConfidentiality: Array(String),
  numberOfPackagesInShipment: Number,
  shipmentCondition: Array(String),
  shipmentHandlingCode: Array(String),
  shipmentRiskCode: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ShipmentV7I extends Segment{
  shipmentId: string
  internalShipmentId: string[]
  shipmentStatus: string
  shipmentStatusDateTime: string
  shipmentStatusReason: string
  shipmentPriority: string
  shipmentConfidentiality: string[]
  numberOfPackagesInShipment: number
  shipmentCondition: string[]
  shipmentHandlingCode: string[]
  shipmentRiskCode: string[]
  
  }
  export const HL7ShipmentV7 = mongoose.model<HL7ShipmentV7Document> ("HL7ShipmentV7", HL7ShipmentV7Schema);

