
// Generated typescript code of HL7v 2.4 ISD  (Interaction Status Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7InteractionStatusDetailV4Document = mongoose.Document & HL7InteractionStatusDetailV4I

const HL7InteractionStatusDetailV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  referenceInteractionNumber: Number,
  interactionTypeIdentifier: String,
  interactionActiveState: String,
  
  }, { timestamps: true });
  
export interface HL7InteractionStatusDetailV4I extends Segment{
  referenceInteractionNumber: number
  interactionTypeIdentifier: string
  interactionActiveState: string
  
  }
  export const HL7InteractionStatusDetailV4 = mongoose.model<HL7InteractionStatusDetailV4Document> ("HL7InteractionStatusDetailV4", HL7InteractionStatusDetailV4Schema);

