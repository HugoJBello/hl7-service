
// Generated typescript code of HL7v 2.7 UAC  (User Authentication Credential Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7UserAuthenticationCredentialSegmentV7Document = mongoose.Document & HL7UserAuthenticationCredentialSegmentV7I

const HL7UserAuthenticationCredentialSegmentV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  userAuthenticationCredentialTypeCode: String,
  userAuthenticationCredential: String,
  
  }, { timestamps: true });
  
export interface HL7UserAuthenticationCredentialSegmentV7I extends Segment{
  userAuthenticationCredentialTypeCode: string
  userAuthenticationCredential: string
  
  }
  export const HL7UserAuthenticationCredentialSegmentV7 = mongoose.model<HL7UserAuthenticationCredentialSegmentV7Document> ("HL7UserAuthenticationCredentialSegmentV7", HL7UserAuthenticationCredentialSegmentV7Schema);

