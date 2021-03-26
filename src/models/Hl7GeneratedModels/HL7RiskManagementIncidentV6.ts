
// Generated typescript code of HL7v 2.6 RMI  (Risk Management Incident)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7RiskManagementIncidentV6Document = mongoose.Document & HL7RiskManagementIncidentV6I

const HL7RiskManagementIncidentV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  riskManagementIncidentCode: String,
  dateTimeIncident: String,
  incidentTypeCode: String,
  
  }, { timestamps: true });
  
export interface HL7RiskManagementIncidentV6I extends Segment{
  riskManagementIncidentCode: string
  dateTimeIncident: string
  incidentTypeCode: string
  
  }
  export const HL7RiskManagementIncidentV6 = mongoose.model<HL7RiskManagementIncidentV6Document> ("HL7RiskManagementIncidentV6", HL7RiskManagementIncidentV6Schema);

