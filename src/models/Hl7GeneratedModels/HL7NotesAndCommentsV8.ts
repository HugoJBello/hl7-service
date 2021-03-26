
// Generated typescript code of HL7v 2.8 NTE  (Notes And Comments)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7NotesAndCommentsV8Document = mongoose.Document & HL7NotesAndCommentsV8I

const HL7NotesAndCommentsV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdNte: String,
  sourceOfComment: String,
  comment: Array(String),
  commentType: String,
  enteredBy: String,
  enteredDateTime: String,
  effectiveStartDate: String,
  expirationDate: String,
  
  }, { timestamps: true });
  
export interface HL7NotesAndCommentsV8I extends Segment{
  setIdNte: string
  sourceOfComment: string
  comment: string[]
  commentType: string
  enteredBy: string
  enteredDateTime: string
  effectiveStartDate: string
  expirationDate: string
  
  }
  export const HL7NotesAndCommentsV8 = mongoose.model<HL7NotesAndCommentsV8Document> ("HL7NotesAndCommentsV8", HL7NotesAndCommentsV8Schema);

