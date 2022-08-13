download("https://launcher.mojang.com/v1/objects/90d438c3e432add8848a9f9f368ce5a52f6bc4a7/client.jar", files + "/client.jar");
download("https://libraries.minecraft.net/net/sf/jopt-simple/jopt-simple/5.0.4/jopt-simple-5.0.4.jar", files + "/jopt-simple-5.0.4.jar");
download("https://libraries.minecraft.net/com/mojang/logging/1.0.0/logging-1.0.0.jar", files + "/logging-1.0.0.jar");
download("https://libraries.minecraft.net/org/slf4j/slf4j-api/1.8.0-beta4/slf4j-api-1.8.0-beta4.jar", files + "/slf4j-api-1.8.0-beta4.jar");
download("https://libraries.minecraft.net/org/apache/logging/log4j/log4j-slf4j18-impl/2.17.0/log4j-slf4j18-impl-2.17.0.jar", files + "/log4j-slf4j18-impl-2.17.0.jar");
download("https://libraries.minecraft.net/org/apache/logging/log4j/log4j-api/2.17.0/log4j-api-2.17.0.jar", files + "/log4j-api-2.17.0.jar");
download("https://libraries.minecraft.net/org/apache/logging/log4j/log4j-core/2.17.0/log4j-core-2.17.0.jar", files + "/log4j-core-2.17.0.jar");
download("https://libraries.minecraft.net/com/mojang/brigadier/1.0.18/brigadier-1.0.18.jar", files + "/brigadier-1.0.18.jar");
download("https://libraries.minecraft.net/io/netty/netty-all/4.1.68.Final/netty-all-4.1.68.Final.jar", files + "/netty-all-4.1.68.Final.jar");
download("https://libraries.minecraft.net/com/google/guava/guava/31.0.1-jre/guava-31.0.1-jre.jar", files + "/guava-31.0.1-jre.jar");
download("https://libraries.minecraft.net/com/mojang/datafixerupper/5.0.28/datafixerupper-5.0.28.jar", files + "/datafixerupper-5.0.28.jar");
download("https://libraries.minecraft.net/it/unimi/dsi/fastutil/8.5.6/fastutil-8.5.6.jar", files + "/fastutil-8.5.6.jar");
download("https://libraries.minecraft.net/org/apache/commons/commons-lang3/3.12.0/commons-lang3-3.12.0.jar", files + "/commons-lang3-3.12.0.jar");
download("https://libraries.minecraft.net/com/mojang/javabridge/1.2.24/javabridge-1.2.24.jar", files + "/javabridge-1.2.24.jar");
download("https://libraries.minecraft.net/com/google/code/gson/gson/2.8.9/gson-2.8.9.jar", files + "/gson-2.8.9.jar");
download("https://libraries.minecraft.net/com/mojang/authlib/3.11.50/authlib-3.11.50.jar", files + "/authlib-3.11.50.jar");
download("https://libraries.minecraft.net/commons-io/commons-io/2.11.0/commons-io-2.11.0.jar", files + "/commons-io-2.11.0.jar");
download("https://libraries.minecraft.net/net/java/dev/jna/jna/5.10.0/jna-5.10.0.jar", files + "/jna-5.10.0.jar");
download("https://libraries.minecraft.net/net/java/dev/jna/jna-platform/5.10.0/jna-platform-5.10.0.jar", files + "/jna-platform-5.10.0.jar");
download("https://libraries.minecraft.net/org/lwjgl/lwjgl-glfw/3.3.1/lwjgl-glfw-3.3.1.jar", files + "/lwjgl-glfw-3.3.1.jar");
download("https://libraries.minecraft.net/org/lwjgl/lwjgl/3.3.1/lwjgl-3.3.1.jar", files + "/lwjgl-3.3.1.jar");
if (os == "linux") {
    download("https://libraries.minecraft.net/org/lwjgl/lwjgl/3.3.1/lwjgl-3.3.1-natives-linux.jar", files + "/lwjgl-3.3.1-natives-linux.jar", true);
    extract(files + "/lwjgl-3.3.1-natives-linux.jar", files);

    download("https://libraries.minecraft.net/org/lwjgl/lwjgl-glfw/3.3.1/lwjgl-glfw-3.3.1-natives-linux.jar", files + "/lwjgl-glfw-3.3.1-natives-linux.jar", true);
    extract(files + "/lwjgl-glfw-3.3.1-natives-linux.jar", files);

    download("https://libraries.minecraft.net/org/lwjgl/lwjgl-opengl/3.3.1/lwjgl-opengl-3.3.1-natives-linux.jar", files + "/lwjgl-opengl-3.3.1-natives-linux.jar", true);
    extract(files + "/lwjgl-opengl-3.3.1-natives-linux.jar", files);

    download("https://libraries.minecraft.net/org/lwjgl/lwjgl-stb/3.3.1/lwjgl-stb-3.3.1-natives-linux.jar", files + "/lwjgl-stb-3.3.1-natives-linux.jar", true);
    extract(files + "/lwjgl-stb-3.3.1-natives-linux.jar", files);
}
download("https://libraries.minecraft.net/org/lwjgl/lwjgl-opengl/3.3.1/lwjgl-opengl-3.3.1.jar", files + "/lwjgl-opengl-3.3.1.jar");
download("https://libraries.minecraft.net/org/lwjgl/lwjgl-openal/3.3.1/lwjgl-openal-3.3.1.jar", files + "/lwjgl-openal-3.3.1.jar");
download("https://libraries.minecraft.net/com/ibm/icu/icu4j/70.1/icu4j-70.1.jar", files + "/icu4j-70.1.jar");
download("https://libraries.minecraft.net/com/mojang/text2speech/1.12.4/text2speech-1.12.4.jar", files + "/text2speech-1.12.4.jar");
download("https://libraries.minecraft.net/org/lwjgl/lwjgl-stb/3.3.1/lwjgl-stb-3.3.1.jar", files + "/lwjgl-stb-3.3.1.jar");
download("https://libraries.minecraft.net/com/github/oshi/oshi-core/5.8.5/oshi-core-5.8.5.jar", files + "/oshi-core-5.8.5.jar");
download("https://libraries.minecraft.net/com/mojang/blocklist/1.0.10/blocklist-1.0.10.jar", files + "/blocklist-1.0.10.jar");
download("https://libraries.minecraft.net/com/google/guava/failureaccess/1.0.1/failureaccess-1.0.1.jar", files + "/failureaccess-1.0.1.jar");
download("https://libraries.minecraft.net/org/apache/commons/commons-compress/1.21/commons-compress-1.21.jar", files + "/commons-compress-1.21.jar");
download("https://libraries.minecraft.net/org/lwjgl/lwjgl-tinyfd/3.3.1/lwjgl-tinyfd-3.3.1.jar", files + "/lwjgl-tinyfd-3.3.1.jar");

download("https://launchermeta.mojang.com/v1/packages/b5c7548ddb9e584e84a5f762da5b78211c715a63/1.19.json", files + "/asset/indexes/1.19.json", true);
let json = to_json(read(files + "/asset/indexes/1.19.json"));
let objects = json["objects"];
for (key in objects) {
    let value = objects[key];
    let hash = value["hash"];
    let hash_start = substring(hash, 0, 2);;
    download("http://resources.download.minecraft.net/" + hash_start + "/" + hash, files + "/asset/objects/" + hash_start + "/" + hash);
}
