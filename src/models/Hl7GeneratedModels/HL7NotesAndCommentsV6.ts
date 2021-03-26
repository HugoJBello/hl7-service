
// Generated typescript code of HL7v 2.6 NTE  (Notes and Comments)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7NotesAndCommentsV6Document = mongoose.Document & HL7NotesAndCommentsV6I

const HL7NotesAndCommentsV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDNTE: String,
  sourceOfComment: String,
  comment: Array(String),
  commentType: String,
  enteredBy: String,
  enteredDateTime: String,
  effectiveStartDate: String,
  expirationDate: String,
  
  }, { timestamps: true });
  
export interface HL7NotesAndCommentsV6I extends Segment{
  setIDNTE: string
  sourceOfComment: string
  comment: string[]
  commentType: string
  enteredBy: string
  enteredDateTime: string
  effectiveStartDate: string
  expirationDate: string
  
  }
  export const HL7NotesAndCommentsV6 = mongoose.model<HL7NotesAndCommentsV6Document> ("HL7NotesAndCommentsV6", HL7NotesAndCommentsV6Schema);

