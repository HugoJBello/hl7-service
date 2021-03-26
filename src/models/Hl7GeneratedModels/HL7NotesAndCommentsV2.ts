
// Generated typescript code of HL7v 2.2 NTE  (Notes And Comments)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7NotesAndCommentsV2Document = mongoose.Document & HL7NotesAndCommentsV2I

const HL7NotesAndCommentsV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdNotesAndComments: String,
  sourceOfComment: String,
  comment: Array(String),
  
  }, { timestamps: true });
  
export interface HL7NotesAndCommentsV2I extends Segment{
  setIdNotesAndComments: string
  sourceOfComment: string
  comment: string[]
  
  }
  export const HL7NotesAndCommentsV2 = mongoose.model<HL7NotesAndCommentsV2Document> ("HL7NotesAndCommentsV2", HL7NotesAndCommentsV2Schema);

