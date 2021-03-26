
// Generated typescript code of HL7v 2.5 NTE  (Notes and Comments)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7NotesAndCommentsV5Document = mongoose.Document & HL7NotesAndCommentsV5I

const HL7NotesAndCommentsV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDNTE: String,
  sourceOfComment: String,
  comment: Array(String),
  commentType: String,
  
  }, { timestamps: true });
  
export interface HL7NotesAndCommentsV5I extends Segment{
  setIDNTE: string
  sourceOfComment: string
  comment: string[]
  commentType: string
  
  }
  export const HL7NotesAndCommentsV5 = mongoose.model<HL7NotesAndCommentsV5Document> ("HL7NotesAndCommentsV5", HL7NotesAndCommentsV5Schema);

