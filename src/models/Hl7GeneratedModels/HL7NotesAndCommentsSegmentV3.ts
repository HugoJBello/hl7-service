
// Generated typescript code of HL7v 2.3 NTE  (Notes and comments segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7NotesAndCommentsSegmentV3Document = mongoose.Document & HL7NotesAndCommentsSegmentV3I

const HL7NotesAndCommentsSegmentV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDNotesAndComments: String,
  sourceOfComment: String,
  comment: Array(String),
  
  }, { timestamps: true });
  
export interface HL7NotesAndCommentsSegmentV3I extends Segment{
  setIDNotesAndComments: string
  sourceOfComment: string
  comment: string[]
  
  }
  export const HL7NotesAndCommentsSegmentV3 = mongoose.model<HL7NotesAndCommentsSegmentV3Document> ("HL7NotesAndCommentsSegmentV3", HL7NotesAndCommentsSegmentV3Schema);

