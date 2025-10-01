import { loadSetting } from "./deps/setting";
import { cleanGarbage } from "./scripts/mail/clean";
import { setEventColor } from "./scripts/calendar/color";

function script() {
  const {
    mail,
    calendar,
  } = loadSetting();

  console.log("Script: Start");
  cleanGarbage(mail.labelGmailGarbage);
  setEventColor(
    calendar.eventBuffer,
    calendar.eventTherapy,
    calendar.eventDoctor,
    calendar.eventHaircut,
  );
  console.log("Script: Complete");
}
