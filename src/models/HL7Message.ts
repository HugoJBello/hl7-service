import mongoose from "mongoose";

export type HL7MessageDocument = mongoose.Document & HL7MessageI

const HL7MessageSchema = new mongoose.Schema({
  payload: String,
  id: String
}, { timestamps: true });

export interface HL7MessageI {
  payload: string
  id: string
}

export const HL7Message = mongoose.model<HL7MessageDocument>("HL7Message", HL7MessageSchema);