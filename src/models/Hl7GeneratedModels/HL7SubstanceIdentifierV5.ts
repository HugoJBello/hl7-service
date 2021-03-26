
// Generated typescript code of HL7v 2.5 SID  (Substance Identifier)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SubstanceIdentifierV5Document = mongoose.Document & HL7SubstanceIdentifierV5I

const HL7SubstanceIdentifierV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  applicationMethodIdentifier: String,
  substanceLotNumber: String,
  substanceContainerIdentifier: String,
  substanceManufacturerIdentifier: String,
  
  }, { timestamps: true });
  
export interface HL7SubstanceIdentifierV5I extends Segment{
  applicationMethodIdentifier: string
  substanceLotNumber: string
  substanceContainerIdentifier: string
  substanceManufacturerIdentifier: string
  
  }
  export const HL7SubstanceIdentifierV5 = mongoose.model<HL7SubstanceIdentifierV5Document> ("HL7SubstanceIdentifierV5", HL7SubstanceIdentifierV5Schema);

