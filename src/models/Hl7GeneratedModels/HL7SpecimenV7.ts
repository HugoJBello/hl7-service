
// Generated typescript code of HL7v 2.7 SPM  (Specimen)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SpecimenV7Document = mongoose.Document & HL7SpecimenV7I

const HL7SpecimenV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdSpm: String,
  specimenId: String,
  specimenParentIds: Array(String),
  specimenType: String,
  specimenTypeModifier: Array(String),
  specimenAdditives: Array(String),
  specimenCollectionMethod: String,
  specimenSourceSite: String,
  specimenSourceSiteModifier: Array(String),
  specimenCollectionSite: String,
  specimenRole: Array(String),
  specimenCollectionAmount: String,
  groupedSpecimenCount: Number,
  specimenDescription: Array(String),
  specimenHandlingCode: Array(String),
  specimenRiskCode: Array(String),
  specimenCollectionDateTime: String,
  specimenReceivedDateTime: String,
  specimenExpirationDateTime: String,
  specimenAvailability: String,
  specimenRejectReason: Array(String),
  specimenQuality: String,
  specimenAppropriateness: String,
  specimenCondition: Array(String),
  specimenCurrentQuantity: String,
  numberOfSpecimenContainers: Number,
  containerType: String,
  containerCondition: String,
  specimenChildRole: String,
  accessionId: Array(String),
  otherSpecimenId: Array(String),
  shipmentId: String,
  
  }, { timestamps: true });
  
export interface HL7SpecimenV7I extends Segment{
  setIdSpm: string
  specimenId: string
  specimenParentIds: string[]
  specimenType: string
  specimenTypeModifier: string[]
  specimenAdditives: string[]
  specimenCollectionMethod: string
  specimenSourceSite: string
  specimenSourceSiteModifier: string[]
  specimenCollectionSite: string
  specimenRole: string[]
  specimenCollectionAmount: string
  groupedSpecimenCount: number
  specimenDescription: string[]
  specimenHandlingCode: string[]
  specimenRiskCode: string[]
  specimenCollectionDateTime: string
  specimenReceivedDateTime: string
  specimenExpirationDateTime: string
  specimenAvailability: string
  specimenRejectReason: string[]
  specimenQuality: string
  specimenAppropriateness: string
  specimenCondition: string[]
  specimenCurrentQuantity: string
  numberOfSpecimenContainers: number
  containerType: string
  containerCondition: string
  specimenChildRole: string
  accessionId: string[]
  otherSpecimenId: string[]
  shipmentId: string
  
  }
  export const HL7SpecimenV7 = mongoose.model<HL7SpecimenV7Document> ("HL7SpecimenV7", HL7SpecimenV7Schema);

