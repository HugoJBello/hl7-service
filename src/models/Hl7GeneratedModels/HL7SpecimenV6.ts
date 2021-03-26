
// Generated typescript code of HL7v 2.6 SPM  (Specimen)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SpecimenV6Document = mongoose.Document & HL7SpecimenV6I

const HL7SpecimenV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDSPM: String,
  specimenID: String,
  specimenParentIDs: Array(String),
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
  
  }, { timestamps: true });
  
export interface HL7SpecimenV6I extends Segment{
  setIDSPM: string
  specimenID: string
  specimenParentIDs: string[]
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
  
  }
  export const HL7SpecimenV6 = mongoose.model<HL7SpecimenV6Document> ("HL7SpecimenV6", HL7SpecimenV6Schema);

