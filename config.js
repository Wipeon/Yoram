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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_20_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODksXG4gICAgICAgIDIxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICA0NSxcbiAgICAgICAgNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDcwLFxuICAgICAgICAyOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDkxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgNjAsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICA4MCxcbiAgICAgICAgODIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTksXG4gICAgICAgIDU2LFxuICAgICAgICAxODgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDQsXG4gICAgICAgIDE0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDM0LFxuICAgICAgICA5MixcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk5LFxuICAgICAgICA4NixcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDksXG4gICAgICAgIDE5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDk1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyLFxuICAgICAgICA2NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDMwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM5LFxuICAgICAgICA5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODksXG4gICAgICAgIDI2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwia3lFRVRscHN2OURZbW9FWkwrWHhPSDErc3BZUEozeGJybXJoNnJ6anREMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRXZUTU4xR3NRTkNocmdMVll6TmZ4Z1wiLFxuICBcInBob25lSWRcIjogXCIwZWNiM2EzNi0xOTc2LTQ0YjgtOThlZC1lYjcyODZjNjBiMDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjgsXG4gICAgICAyMjUsXG4gICAgICA1NyxcbiAgICAgIDY5LFxuICAgICAgMTE4LFxuICAgICAgMTM2LFxuICAgICAgMjQ3LFxuICAgICAgODIsXG4gICAgICAxMTgsXG4gICAgICAxNDUsXG4gICAgICAxNTksXG4gICAgICAyNTAsXG4gICAgICAxNTksXG4gICAgICAxMDcsXG4gICAgICA2OSxcbiAgICAgIDIyMCxcbiAgICAgIDMyLFxuICAgICAgMTYxLFxuICAgICAgMjUzLFxuICAgICAgMjI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOSxcbiAgICAgIDIzMCxcbiAgICAgIDE5OSxcbiAgICAgIDIyNSxcbiAgICAgIDIyOCxcbiAgICAgIDk1LFxuICAgICAgMTYwLFxuICAgICAgOTMsXG4gICAgICAxMDgsXG4gICAgICAxMTMsXG4gICAgICA0MSxcbiAgICAgIDEzNixcbiAgICAgIDI0NCxcbiAgICAgIDEyMSxcbiAgICAgIDIwOSxcbiAgICAgIDI1MixcbiAgICAgIDIwMixcbiAgICAgIDIxOCxcbiAgICAgIDEzOSxcbiAgICAgIDQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjM4UlJHOVE4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjA5NzgxMTk3NjE6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExMDE4MzM3NjI0NDc5NToyMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQbWErLzRERUxuSStiTUdHQTBnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkxsTXZhd2M2SUhDYVQ2VVBReWlzOGtNczRWRFVmT1NoNUJUcnhZM2dMaFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibmJ2ZDR1MDFDRjhoajNXTmJpMk1ZMVFXRWhqRWo3akpXZ0NBL2Y3SzE5NEFza24veTlOTUkxY1J6L01OcVBSOWorZE9MS0g1ZUVSVUowSk5qVDBJRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUm9ZR2RCK0tPQWpJekIzRStZYnRabDRoYmpITVc2UUd4SkxZbFgvRzBzVFlkTElsSFlSZ080cGJSRFBsU1NkbFE5WlVXa2JyWElIdkdqZjU0QXN0anc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYwOTc4MTE5NzYxOjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTU1OTIyOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJJT1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQklPLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWnZJT2JveTU3N21JQ2NkVlhkeExrUjA5WXFIU3NwTlVOMmlxSXNUcE05TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDcxNTY2MjAwLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcxNDM5NTAwOTQ3NFwifSIKfQ==" ;


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
 
