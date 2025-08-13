function main() {
  const setting = loadSetting();

  console.log("main: Start Jobs");
  cleanGarbage(setting.mail.labelGmailGarbage);
  setEventColor(
    setting.calendar.eventBuffer,
    setting.calendar.eventTherapy,
    setting.calendar.eventDoctor,
    setting.calendar.eventHaircut,
  );
  console.log("main: Jobs Complete");
}
