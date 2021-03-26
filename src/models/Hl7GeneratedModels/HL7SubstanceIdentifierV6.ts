
// Generated typescript code of HL7v 2.6 SID  (Substance Identifier)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SubstanceIdentifierV6Document = mongoose.Document & HL7SubstanceIdentifierV6I

const HL7SubstanceIdentifierV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  applicationMethodIdentifier: String,
  substanceLotNumber: String,
  substanceContainerIdentifier: String,
  substanceManufacturerIdentifier: String,
  
  }, { timestamps: true });
  
export interface HL7SubstanceIdentifierV6I extends Segment{
  applicationMethodIdentifier: string
  substanceLotNumber: string
  substanceContainerIdentifier: string
  substanceManufacturerIdentifier: string
  
  }
  export const HL7SubstanceIdentifierV6 = mongoose.model<HL7SubstanceIdentifierV6Document> ("HL7SubstanceIdentifierV6", HL7SubstanceIdentifierV6Schema);

