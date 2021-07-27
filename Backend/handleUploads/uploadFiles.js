const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: './public/uploads/documents',
//     filename: function(req,file,cb){
//         cb(null, "DOC-"+Date.now()+path.extname(file.originalname))
//     }
// });

// const uploadDoc = multer({
//     storage: storage,
//     limits:{
//         fileSize: 10**7 // 10 MB size's limit
//     },
//     fileFilter(req,file,cb){
//         const filetypes = /xlsx|xlsm|xls|xltm/;
//         const mimetype = filetypes.test(file.mimetype);
//         const extname = filetypes.test(path.extname(file.originalname));
//         if(mimetype && extname){
//             return cb(null, true);
//         }
//         cb(new Error('Archivo no soportado'));
//     }
// }).single('file');

const uploadDoc = multer({dest:'public/uploads/documents'}).single("doc_solicitud");

module.exports = {uploadDoc}