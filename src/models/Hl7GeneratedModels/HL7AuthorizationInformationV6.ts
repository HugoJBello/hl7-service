
// Generated typescript code of HL7v 2.6 AUT  (Authorization Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AuthorizationInformationV6Document = mongoose.Document & HL7AuthorizationInformationV6I

const HL7AuthorizationInformationV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  authorizingPayorPlanID: String,
  authorizingPayorCompanyID: String,
  authorizingPayorCompanyName: String,
  authorizationEffectiveDate: String,
  authorizationExpirationDate: String,
  authorizationIdentifier: String,
  reimbursementLimit: String,
  requestedNumberOfTreatments: Number,
  authorizedNumberOfTreatments: Number,
  processDate: String,
  
  }, { timestamps: true });
  
export interface HL7AuthorizationInformationV6I extends Segment{
  authorizingPayorPlanID: string
  authorizingPayorCompanyID: string
  authorizingPayorCompanyName: string
  authorizationEffectiveDate: string
  authorizationExpirationDate: string
  authorizationIdentifier: string
  reimbursementLimit: string
  requestedNumberOfTreatments: number
  authorizedNumberOfTreatments: number
  processDate: string
  
  }
  export const HL7AuthorizationInformationV6 = mongoose.model<HL7AuthorizationInformationV6Document> ("HL7AuthorizationInformationV6", HL7AuthorizationInformationV6Schema);

