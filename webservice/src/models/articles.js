const mongoose = require("../database");

const medicalRecordsModelAttendanceStructure = {
    medicalRecordsAttendanceId: { type: Number, required: true },
    remoteAttendanceId: Number,
    legacyMedicalRecordsAttendanceId: Number,
    accountId: { type: Number, required: true },
    workspaceId: Number,
    patientId: { type: Number, required: true },
    medicalRecordsAccessGroupId: Number,
    imported: Boolean,
    isPublic: { type: Boolean, required: true, default: false },
    sectionsModels: [{
      medicalRecordsModelSectionId: Number,
      name: { type: String, required: true },
      formModelsOptions: [Number],
      order: Number
    }],
    sections:[{
      attendanceSectionId: { type: Number, required: true },
      formsId: [Number],
      name: { type: String, required: true },
      rawContent: String
    }],
    prescription: [{
      attendancePrescriptionId: Number,
      content: String
    }],
    certificate: [{
      attendanceCertificateId: Number,
      content: String
    }],
    referral: [{
      attendanceReferralId: Number,
      content: String
    }],
    report: [{
      attendanceReportId: Number,
      content: String
    }],
    request: [{
      attendanceRequestId: Number,
      content: String
    }],
    media: [{
      attendanceMediaId: Number,
      fileId: Number,
      name: String,
      mimetype: String,
      size: Number,
      observation: String,
      title: String,
      trueCreatedAt: { type: Date, default: Date.now }
    }],
    attachment:  [{
      attendanceAttachmentId: Number,
      fileId: Number,
      name: String,
      mimetype: String,
      size: Number,
      observation: String
    }],
    exams: [Number],
    startedAt: { type: Date, default: Date.now },
    releasedAt: Date,
    remoteProfessionalName: String,
    userIdCreated: Number,
    userIdModified: Number,
    createdAt: { type: Date, default: Date.now },
    modifiedAt: Date,
    deletedAt: Date,
  }

const medicalRecordsModelAttendanceSchema = new mongoose.Schema(medicalRecordsModelAttendanceStructure);

module.exports = medicalRecordsModelAttendanceSchema;

