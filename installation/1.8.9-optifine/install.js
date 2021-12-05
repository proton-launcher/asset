download("https://optifine.net/adloadx?f=OptiFine_1.8.9_HD_U_M5.jar", "Optifine-1.8.9_HD_U_M5.html");
let html = read("Optifine-1.8.9_HD_U_M5.html");
let capture = regex_capture(html, "'(.*?)' onclick='onDownload()");
download("https://optifine.net/" + capture, "OptiFine-1.8.9_HD_U_M5.jar");
extract("OptiFine-1.8.9_HD_U_M5.jar", "optifine-extract");

copy_file("optifine-extract/launchwrapper-of-2.2.jar", "launchwrapper-of-2.2.jar");
