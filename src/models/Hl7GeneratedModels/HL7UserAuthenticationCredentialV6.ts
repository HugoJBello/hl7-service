
// Generated typescript code of HL7v 2.6 UAC  (User Authentication Credential)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7UserAuthenticationCredentialV6Document = mongoose.Document & HL7UserAuthenticationCredentialV6I

const HL7UserAuthenticationCredentialV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  userAuthenticationCredentialTypeCode: String,
  userAuthenticationCredential: String,
  
  }, { timestamps: true });
  
export interface HL7UserAuthenticationCredentialV6I extends Segment{
  userAuthenticationCredentialTypeCode: string
  userAuthenticationCredential: string
  
  }
  export const HL7UserAuthenticationCredentialV6 = mongoose.model<HL7UserAuthenticationCredentialV6Document> ("HL7UserAuthenticationCredentialV6", HL7UserAuthenticationCredentialV6Schema);

