
// Generated typescript code of HL7v 2.8 SCH  (Scheduling Activity Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SchedulingActivityInformationV8Document = mongoose.Document & HL7SchedulingActivityInformationV8I

const HL7SchedulingActivityInformationV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  placerAppointmentId: String,
  fillerAppointmentId: String,
  occurrenceNumber: Number,
  placerGroupNumber: String,
  scheduleId: String,
  eventReason: String,
  appointmentReason: String,
  appointmentType: String,
  appointmentDuration: Number,
  appointmentDurationUnits: String,
  appointmentTimingQuantity: String,
  placerContactPerson: Array(String),
  placerContactPhoneNumber: String,
  placerContactAddress: Array(String),
  placerContactLocation: String,
  fillerContactPerson: Array(String),
  fillerContactPhoneNumber: String,
  fillerContactAddress: Array(String),
  fillerContactLocation: String,
  enteredByPerson: Array(String),
  enteredByPhoneNumber: Array(String),
  enteredByLocation: String,
  parentPlacerAppointmentId: String,
  parentFillerAppointmentId: String,
  fillerStatusCode: String,
  placerOrderNumber: Array(String),
  fillerOrderNumber: Array(String),
  
  }, { timestamps: true });
  
export interface HL7SchedulingActivityInformationV8I extends Segment{
  placerAppointmentId: string
  fillerAppointmentId: string
  occurrenceNumber: number
  placerGroupNumber: string
  scheduleId: string
  eventReason: string
  appointmentReason: string
  appointmentType: string
  appointmentDuration: number
  appointmentDurationUnits: string
  appointmentTimingQuantity: string
  placerContactPerson: string[]
  placerContactPhoneNumber: string
  placerContactAddress: string[]
  placerContactLocation: string
  fillerContactPerson: string[]
  fillerContactPhoneNumber: string
  fillerContactAddress: string[]
  fillerContactLocation: string
  enteredByPerson: string[]
  enteredByPhoneNumber: string[]
  enteredByLocation: string
  parentPlacerAppointmentId: string
  parentFillerAppointmentId: string
  fillerStatusCode: string
  placerOrderNumber: string[]
  fillerOrderNumber: string[]
  
  }
  export const HL7SchedulingActivityInformationV8 = mongoose.model<HL7SchedulingActivityInformationV8Document> ("HL7SchedulingActivityInformationV8", HL7SchedulingActivityInformationV8Schema);

