const express = require('express')
const cors = require('cors')
const multer = require('multer')

const app = express()
app.use(cors({
  origin:["https://vercel.com/rana-adeels-projects/simple-multer-fw18"],
  methods:["POST","GET","DELETE"],
  credentials:true
}))
const PORT = 'https://multer-backend-pink.vercel.app'
// app.use(cors())
app.use(express.json())

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    return cb(null, "./public/Images")
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`)
  }
})

const upload = multer({storage})

app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.body)
  console.log(req.file)
  res.status(200).json({message:'completed at last'})
})

// app.listen(3001, () => {
app.listen("https://multer-backend-pink.vercel.app", () => {
  console.log("Server is running")
})