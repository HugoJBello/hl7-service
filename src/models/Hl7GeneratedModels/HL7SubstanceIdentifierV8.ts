
// Generated typescript code of HL7v 2.8 SID  (Substance Identifier)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SubstanceIdentifierV8Document = mongoose.Document & HL7SubstanceIdentifierV8I

const HL7SubstanceIdentifierV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  applicationMethodIdentifier: String,
  substanceLotNumber: String,
  substanceContainerIdentifier: String,
  substanceManufacturerIdentifier: String,
  
  }, { timestamps: true });
  
export interface HL7SubstanceIdentifierV8I extends Segment{
  applicationMethodIdentifier: string
  substanceLotNumber: string
  substanceContainerIdentifier: string
  substanceManufacturerIdentifier: string
  
  }
  export const HL7SubstanceIdentifierV8 = mongoose.model<HL7SubstanceIdentifierV8Document> ("HL7SubstanceIdentifierV8", HL7SubstanceIdentifierV8Schema);

