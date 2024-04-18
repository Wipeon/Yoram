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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "Max";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+260772866932";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "+260772866932,260xxxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_49_04_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzLFxuICAgICAgICA2NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDksXG4gICAgICAgIDExMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMyxcbiAgICAgICAgMSxcbiAgICAgICAgMjIxLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDg4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTczLFxuICAgICAgICA1NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU2LFxuICAgICAgICA0MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNixcbiAgICAgICAgMjAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2NSxcbiAgICAgICAgODUsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgODAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxLFxuICAgICAgICA0MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDg4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUzLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjEyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgODYsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAyLFxuICAgICAgICA2NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMwLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxLFxuICAgICAgICA1MCxcbiAgICAgICAgODcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAzNixcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjksXG4gICAgICAgIDM4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDksXG4gICAgICAgIDQyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTA5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU3LFxuICAgICAgICA1LFxuICAgICAgICA4OCxcbiAgICAgICAgODAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjExLFxuICAgICAgICA5MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJobWVCVitBUDNJRkE1cUZUaFN4ZHhMd0laYWMvQ0RueHB3N1k0L2tUeE5JPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MDc3Mjg2NjkzMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E1MTg2MUU1MzM2MzZDNTYyODlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzEzNDE5MzYyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjVrazJYbG9fUzl5ejhZeFZESHZUOVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjVmZTRiODktYTY0YS00OTA3LWExYTUtNzlhMDMxYjFmNWU0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NSxcbiAgICAgIDY3LFxuICAgICAgMTQ3LFxuICAgICAgMjIsXG4gICAgICA1MyxcbiAgICAgIDEwMCxcbiAgICAgIDExLFxuICAgICAgNDMsXG4gICAgICAxNzUsXG4gICAgICA2NCxcbiAgICAgIDIyOCxcbiAgICAgIDk5LFxuICAgICAgNzQsXG4gICAgICAyNCxcbiAgICAgIDIxLFxuICAgICAgNzEsXG4gICAgICAxNzEsXG4gICAgICAyNTEsXG4gICAgICAxODIsXG4gICAgICAyMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMSxcbiAgICAgIDExNyxcbiAgICAgIDgxLFxuICAgICAgMTA2LFxuICAgICAgMTUyLFxuICAgICAgNDEsXG4gICAgICAyMTEsXG4gICAgICA1NixcbiAgICAgIDIwOCxcbiAgICAgIDIzNSxcbiAgICAgIDcxLFxuICAgICAgMTE1LFxuICAgICAgMjE5LFxuICAgICAgNzEsXG4gICAgICA3OCxcbiAgICAgIDI0OSxcbiAgICAgIDE2NyxcbiAgICAgIDE2MyxcbiAgICAgIDEyMixcbiAgICAgIDEyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIS0paUUI0M1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYwNzcyODY2OTMyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNdXNvbmRhXCIsXG4gICAgXCJsaWRcIjogXCIxNjczMjM4NTYwNTY1MTM6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKYXVpWk1JRU5yb2dyRUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkJBRGlicXdIcGpiVmJNbGIzbTJwY3YrOEtxUG5iSzJWZVdjZnFyTkVqZ009XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNG5Yc2daY0VBdFp5NmtyWkxqSkJONURRNUpoL1oxK3RvSFBpSFAxWUJxMEJ5azl6anBSbzdQMWFDdjg4Tkg5eGU1R0VHc3dNVWxpMXA0akFMYy90aVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYjlCeWFoRWFLRnJITHFrL1l1UThHMk90aHJ6MDBLYVIxYmtwVnBWTE1WaFpUdkt0dmJ6YjlCamc2L0krZ0NDY2RaUUxuOHpIcVdZa2I1NW5jVm5mZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYwNzcyODY2OTMyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxMzQxOTM1NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVVeVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRVV5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwib2U4RlZsSHV0WWdTbUUrbzN1U3Y5ZGltU3FDUFQ5NXl3S2tFMmRwU2VpRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTg3NDgyOTAyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTM0MTkzNTk5NzBcIn0iCn0=" ;


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
 
