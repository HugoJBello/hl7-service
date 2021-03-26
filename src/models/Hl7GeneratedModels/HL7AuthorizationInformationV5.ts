
// Generated typescript code of HL7v 2.5 AUT  (Authorization Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AuthorizationInformationV5Document = mongoose.Document & HL7AuthorizationInformationV5I

const HL7AuthorizationInformationV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  authorizingPayorPlanID: String,
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
  
export interface HL7AuthorizationInformationV5I extends Segment{
  authorizingPayorPlanID: string
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
  export const HL7AuthorizationInformationV5 = mongoose.model<HL7AuthorizationInformationV5Document> ("HL7AuthorizationInformationV5", HL7AuthorizationInformationV5Schema);

