download("https://optifine.net/adloadx?f=OptiFine_1.8.9_HD_U_M5.jar", files + "/Optifine-1.8.9_HD_U_M5.html", true);
let html = read(files + "/Optifine-1.8.9_HD_U_M5.html");
let capture = regex_capture(html, "'(.*?)' onclick='onDownload()");
download("https://optifine.net/" + capture, files + "/OptiFine-1.8.9_HD_U_M5.jar", true);
extract(files + "/OptiFine-1.8.9_HD_U_M5.jar", files + "/optifine-extract");

copy_file(files + "/optifine-extract/launchwrapper-of-2.2.jar", files + "/launchwrapper-of-2.2.jar");
