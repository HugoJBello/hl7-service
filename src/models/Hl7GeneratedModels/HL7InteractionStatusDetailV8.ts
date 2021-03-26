
// Generated typescript code of HL7v 2.8 ISD  (Interaction Status Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7InteractionStatusDetailV8Document = mongoose.Document & HL7InteractionStatusDetailV8I

const HL7InteractionStatusDetailV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  referenceInteractionNumber: Number,
  interactionTypeIdentifier: String,
  interactionActiveState: String,
  
  }, { timestamps: true });
  
export interface HL7InteractionStatusDetailV8I extends Segment{
  referenceInteractionNumber: number
  interactionTypeIdentifier: string
  interactionActiveState: string
  
  }
  export const HL7InteractionStatusDetailV8 = mongoose.model<HL7InteractionStatusDetailV8Document> ("HL7InteractionStatusDetailV8", HL7InteractionStatusDetailV8Schema);

