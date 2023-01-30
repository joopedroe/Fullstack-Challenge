const medicalRecordsAttendanceSchema = require('../models/articles');
const mongoose = require("../database");



functionAlter();

async function functionAlter() {
   const medicalRecordsAttendance = mongoose.model('medical_records_attendances', medicalRecordsAttendanceSchema);
   try {
      const responseAll = await medicalRecordsAttendance.find({});

         let sectionsList = [];
         responseAll.forEach(item=>{
            if(item.sections.length){
               item.sections.map( (section)=>{
                  sectionsList.push(section)
               })
            }
            
         })
         const listFormat = sectionsList.map(set=>{
            return set.toJSON();
         });
         let cont =1;
         listFormat.forEach(async (itemSection) =>{
            if(itemSection.formId){
               const response = await medicalRecordsAttendance.updateOne({"sections.attendanceSectionId": itemSection.attendanceSectionId},
               {$set:{"sections.$.formsId":itemSection.formId}})
            }
            else {
               const response2 = await medicalRecordsAttendance.updateOne({"sections.attendanceSectionId": itemSection.attendanceSectionId},
               {$set:{"sections.$.formsId": []}})
            }
            console.log(cont);
            cont +=1;
         })


   }
   catch (err) {
      console.log(err)
      console.log('Erro')
   }
}


