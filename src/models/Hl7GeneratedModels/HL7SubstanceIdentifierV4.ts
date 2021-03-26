
// Generated typescript code of HL7v 2.4 SID  (Substance Identifier)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SubstanceIdentifierV4Document = mongoose.Document & HL7SubstanceIdentifierV4I

const HL7SubstanceIdentifierV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  applicationMethodIdentifier: String,
  substanceLotNumber: String,
  substanceContainerIdentifier: String,
  substanceManufacturerIdentifier: String,
  
  }, { timestamps: true });
  
export interface HL7SubstanceIdentifierV4I extends Segment{
  applicationMethodIdentifier: string
  substanceLotNumber: string
  substanceContainerIdentifier: string
  substanceManufacturerIdentifier: string
  
  }
  export const HL7SubstanceIdentifierV4 = mongoose.model<HL7SubstanceIdentifierV4Document> ("HL7SubstanceIdentifierV4", HL7SubstanceIdentifierV4Schema);

