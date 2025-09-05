import { loadSetting } from "./deps/setting";
import { cleanGarbage } from "./jobs/mail/clean";
import { setEventColor } from "./jobs/calendar/color";

function main() {
  const {
    mail,
    calendar,
  } = loadSetting();

  console.log("main: Start Jobs");
  cleanGarbage(mail.labelGmailGarbage);
  setEventColor(
    calendar.eventBuffer,
    calendar.eventTherapy,
    calendar.eventDoctor,
    calendar.eventHaircut,
  );
  console.log("main: Jobs Complete");
}

main();
