import { loadSetting } from "./deps/setting";
import { cleanGarbage } from "./tasks/mail/clean";
import { setEventColor } from "./tasks/calendar/color";

/* eslint @typescript-eslint/no-unused-vars: 0 */
function main() {
  const {
    mail,
    calendar,
  } = loadSetting();

  console.log("Tasks: Start");
  cleanGarbage(mail.labelGmailGarbage);
  setEventColor(
    calendar.eventBuffer,
    calendar.eventTherapy,
    calendar.eventDoctor,
    calendar.eventHaircut,
  );
  console.log("Tasks: Complete");
}
