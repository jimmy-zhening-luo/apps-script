function main() {
  console.log("main(): BEGIN");

  const properties = hydrate();

  console.log("main(): Hydrated script properties");
  cleanGarbage(properties.labels.labelGmailGarbage);
  console.log("main(): SUCCESS");
}
