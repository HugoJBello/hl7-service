
// Generated typescript code of HL7v 2.8 UAC  (User Authentication Credential Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7UserAuthenticationCredentialSegmentV8Document = mongoose.Document & HL7UserAuthenticationCredentialSegmentV8I

const HL7UserAuthenticationCredentialSegmentV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  userAuthenticationCredentialTypeCode: String,
  userAuthenticationCredential: String,
  
  }, { timestamps: true });
  
export interface HL7UserAuthenticationCredentialSegmentV8I extends Segment{
  userAuthenticationCredentialTypeCode: string
  userAuthenticationCredential: string
  
  }
  export const HL7UserAuthenticationCredentialSegmentV8 = mongoose.model<HL7UserAuthenticationCredentialSegmentV8Document> ("HL7UserAuthenticationCredentialSegmentV8", HL7UserAuthenticationCredentialSegmentV8Schema);

