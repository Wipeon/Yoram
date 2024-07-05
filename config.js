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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "Y O R A M";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+260978119761";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_37_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDYsXG4gICAgICAgIDYzLFxuICAgICAgICA5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA0NCxcbiAgICAgICAgODQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTksXG4gICAgICAgIDQ5LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzIsXG4gICAgICAgIDgzLFxuICAgICAgICA1MixcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDMzLFxuICAgICAgICA4NixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDM2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NixcbiAgICAgICAgMjAzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMSxcbiAgICAgICAgODYsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDg0LFxuICAgICAgICAzMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICA4NixcbiAgICAgICAgMTgyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNCxcbiAgICAgICAgNTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg1LFxuICAgICAgICA5NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA0NixcbiAgICAgICAgMjUsXG4gICAgICAgIDg0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDksXG4gICAgICAgIDY5LFxuICAgICAgICA3NSxcbiAgICAgICAgODksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIsXG4gICAgICAgIDE4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDc5LFxuICAgICAgICA1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1LFxuICAgICAgICA5MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk0LFxuICAgICAgICA3MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDUzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDgxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJBa1FzcDM0TW1BWlBpN0VjSzdhOFJtZlFZTkdRVnNXbzZSY0V6NjlBVFhnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJUbmNpdzRCYlNZU2hpU0RneWUyUDRnXCIsXG4gIFwicGhvbmVJZFwiOiBcImEwZWNhM2VkLWE4YzEtNDhlZC05YmI2LTVhM2NmODY0NGFkMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOSxcbiAgICAgIDI1MixcbiAgICAgIDQ5LFxuICAgICAgMTk0LFxuICAgICAgMTAsXG4gICAgICAxMDAsXG4gICAgICAyMDUsXG4gICAgICAyMSxcbiAgICAgIDE2OCxcbiAgICAgIDM0LFxuICAgICAgMTc5LFxuICAgICAgODAsXG4gICAgICA5OSxcbiAgICAgIDI1MixcbiAgICAgIDE1NCxcbiAgICAgIDEwMSxcbiAgICAgIDIyOCxcbiAgICAgIDQ4LFxuICAgICAgMTAzLFxuICAgICAgMjQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOCxcbiAgICAgIDE2LFxuICAgICAgMjQ0LFxuICAgICAgMjE5LFxuICAgICAgMTYxLFxuICAgICAgMjI3LFxuICAgICAgMTQ5LFxuICAgICAgODEsXG4gICAgICAxMjksXG4gICAgICAyMTcsXG4gICAgICAxODEsXG4gICAgICA0NixcbiAgICAgIDI0NixcbiAgICAgIDI0MCxcbiAgICAgIDI1MSxcbiAgICAgIDI0MixcbiAgICAgIDYxLFxuICAgICAgMzksXG4gICAgICAyNDIsXG4gICAgICAzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzQkpQU0xKMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYwOTc4MTE5NzYxOjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTAxODMzNzYyNDQ3OTU6MjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUG1hKy80REVLdW1vTFFHR0E4Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJMbE12YXdjNklIQ2FUNlVQUXlpczhrTXM0VkRVZk9TaDVCVHJ4WTNnTGhRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImF0TG5wVGxvY29PVFU0RFdVVUc5UmlmamF4V3IyRjhCY1lEcXNzbGtsRkpRMHk1aklWWVRNc1BPbXllcEJGMnZ0bWxETGprOTBNWDZWaERhTVBTdEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk5QTFR2TGU3WWpYTXJ3TFBLdWxmQVZrR1VNMXowQWdtQ0JycmhLVFZFS2J3NlpsaU02dVVFVXQ0U3FNeWxvK290MHJBc0RiWEY1S243U1piV1BoYUJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MDk3ODExOTc2MToyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAxOTM4MzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCSU9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJJTy5qc29uIjogIntcImtleURhdGFcIjpcIlp2SU9ib3k1NzdtSUNjZFZYZHhMa1IwOVlxSFNzcE5VTjJpcUlzVHBNOU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA3MTU2NjIwMCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTQzOTUwMDk0NzRcIn0iCn0=" ;


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
 
