const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "260978119761" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "Yoram";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "260978119761";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,260xxxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "260978119761,260xxxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_49_03_04_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZ0g4eFJNT21qZmk1Z0w0V1QreWYrSE9jZG9ObzJuY0I1MU92eHRGN2sxZz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlIwYkVUSUJHS3lZZE11aEdYN2NhWlVqSTZ2TndJZWpybUJoS0UvUC9ld0E9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQUg4cTU5dEFsR2ZzWmVla21WK2dmZ2lzdVZxYTJpeWJnV0pRUnZYYldsTT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImFCbXJxUEFIT3l5dTZpZzBJYklBZjYxVjlJT2wzcWJvb1FwSmJZS21EVWc9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiT0VvRU1WYmZ0ckhoYUF2VEh2NC9LSW9ra0ZOMHVYNEhHK0IzMHh4aGFYMD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIklZRXY0aFdoU2FvSFNEaURmL29QUFNuQTJLYkx6YjV0Nk9GbzY3UXU0RTQ9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ5SEtIdzhoUkhndS9OeXE1WVpGa1FGQzA2V3V4ZlBoSHZxRkcyY2JiU0ZvPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQURSZDNmUW0wbzMwSXU5dnJsWDZmaWd4WXk2K3lXeUlEb3cwUG5jdE5RWT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ0a3I4dGFtQ1RVT0hFUUVZMGhSSXZ3MCswdlJMelFxdEFadGF5OW5aMEpCUmNWUlpEdE9pNW8zN0dJS1ZSMUZIWmRVWDhmWGdCNm1DL2tCRHdPL1BoQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjIyLFwiYWR2U2VjcmV0S2V5XCI6XCJqOGNxekhIRTFCVURWa1EvL3YzVFl3Z1dnanByMVI5UFhXd1RVNmRaOEJNPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjYwOTc4MTE5NzYxQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjY4RjA3NDRBOUUyODA0MTlDNjdERUM4MzBBNEYyQUZDXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDk1NTI5NzV9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJ2OEpnS3R3cFJtQ3gxcUNiS0hpS0VBXCIsXCJwaG9uZUlkXCI6XCI2ZTNlOTAwZC0xNDZlLTQ4NjItYmEyMi0wZDgzMTQzNGVjM2NcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkV2dHVrU29rN1pzWk9PQnhuTUdocnErMDhWWT1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ5d1I0WktUMkhKdGhjTEZmaDNJUnVvTkgycUk9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiS1I0VFBZUDZcIixcIm1lXCI6e1wiaWRcIjpcIjI2MDk3ODExOTc2MTo2QHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjExMDE4MzM3NjI0NDc5NTo2QGxpZFwiLFwibmFtZVwiOlwiWU9SQU0gRU5HTElTSFwifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDUGVhKy80REVNYnFscThHR0FZZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIjliR3Q0NTRUeHI5SmFvMjkvK2RSbW8rZ2twZ2x5UzJKUXNqa1Y1eWQ5MnM9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJUTjlmNW10K24wTHhPWmtkTzlpUG41MWllZlUyZlFRMjJPMi9pTE1vOGFOTTJzd3JvM0M0WXQwSjRmbi9xcU56NTNRTk9SNkJEQ0Y5VlBkbXlnQ2FDdz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIkM1WU93T0x1YmR2MjUwamtnR1FCWU52ajlNLzViZHRBdGc1WGVTRk9rdU85cWJrY01LQnlRTXpsM3laTk1mdGpmbWZLM0E1N2VhY01LaTdvS2l3T2l3PT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyNjA5NzgxMTk3NjE6NkBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJmV3hyZU9lRThhL1NXcU52Zi9uVVpxUG9KS1lKY2t0aVVMSTVGZWNuZmRyXCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcwOTU1Mjk3MCxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFEQVNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEQVMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwVEJ1S3lUVDZsL2pTSExTVjFsb2tvM1Z6dk16MTJ3L1pINHArSVFLY0RrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNzE1NjYxOTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".2",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.9",
  caption : process.env.CAPTION || "©F.O.C.U.S" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "×͜×᭄ ㄚㄖ尺卂爪 爪几-MD",
  packname: process.env.PACK_NAME || "Yoram",
  botname : process.env.BOT_NAME  || "×͜×᭄ ㄚㄖ尺卂爪 爪几",
  ownername:process.env.OWNER_NAME|| "ㄚㄖ尺卂爪 爪几",


  errorChat : process.env.ERROR_CHAT || "FUCK YOU",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "0ee4a18c-5da7-4045-8af4-1266ec564abc",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "yoram",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
