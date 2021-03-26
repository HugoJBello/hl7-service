
// Generated typescript code of HL7v 2.4 NTE  (Notes and Comments)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7NotesAndCommentsV4Document = mongoose.Document & HL7NotesAndCommentsV4I

const HL7NotesAndCommentsV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDNTE: String,
  sourceOfComment: String,
  comment: Array(String),
  commentType: String,
  
  }, { timestamps: true });
  
export interface HL7NotesAndCommentsV4I extends Segment{
  setIDNTE: string
  sourceOfComment: string
  comment: string[]
  commentType: string
  
  }
  export const HL7NotesAndCommentsV4 = mongoose.model<HL7NotesAndCommentsV4Document> ("HL7NotesAndCommentsV4", HL7NotesAndCommentsV4Schema);

