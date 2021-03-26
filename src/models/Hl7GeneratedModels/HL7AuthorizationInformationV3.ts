
// Generated typescript code of HL7v 2.3 AUT  (Authorization Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AuthorizationInformationV3Document = mongoose.Document & HL7AuthorizationInformationV3I

const HL7AuthorizationInformationV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  authorizingPayorPlanCode: String,
  authorizingPayorCompanyID: String,
  authorizingPayorCompanyName: String,
  authorizationEffectiveDate: Date,
  authorizationExpirationDate: Date,
  authorizationIdentifier: String,
  reimbursementLimit: String,
  requestedNumberOfTreatments: Number,
  authorizedNumberOfTreatments: Number,
  processDate: Date,
  
  }, { timestamps: true });
  
export interface HL7AuthorizationInformationV3I extends Segment{
  authorizingPayorPlanCode: string
  authorizingPayorCompanyID: string
  authorizingPayorCompanyName: string
  authorizationEffectiveDate: Date
  authorizationExpirationDate: Date
  authorizationIdentifier: string
  reimbursementLimit: string
  requestedNumberOfTreatments: number
  authorizedNumberOfTreatments: number
  processDate: Date
  
  }
  export const HL7AuthorizationInformationV3 = mongoose.model<HL7AuthorizationInformationV3Document> ("HL7AuthorizationInformationV3", HL7AuthorizationInformationV3Schema);

