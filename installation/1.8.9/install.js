download("https://launcher.mojang.com/v1/objects/3870888a6c3d349d3771a3e9d16c9bf5e076b908/client.jar", files + "/client.jar");
download("https://libraries.minecraft.net/net/sf/jopt-simple/jopt-simple/4.6/jopt-simple-4.6.jar", files + "/jopt-simple-4.6.jar");
download("https://libraries.minecraft.net/com/google/guava/guava/17.0/guava-17.0.jar", files + "/guava-17.0.jar");
if (os == "linux" || os == "windows") {
    download("https://libraries.minecraft.net/org/lwjgl/lwjgl/lwjgl/2.9.4-nightly-20150209/lwjgl-2.9.4-nightly-20150209.jar", files + "/lwjgl-2.9.4-nightly-20150209.jar")
}
download("https://libraries.minecraft.net/com/google/code/gson/gson/2.2.4/gson-2.2.4.jar", files + "/gson-2.2.4.jar");
download("https://libraries.minecraft.net/org/apache/logging/log4j/log4j-core/2.0-beta9/log4j-core-2.0-beta9.jar", files + "/log4j-core-2.0-beta9.jar");
download("https://libraries.minecraft.net/org/apache/logging/log4j/log4j-api/2.0-beta9/log4j-api-2.0-beta9.jar", files + "/log4j-api-2.0-beta9.jar");
download("https://libraries.minecraft.net/org/apache/commons/commons-lang3/3.3.2/commons-lang3-3.3.2.jar", files + "/commons-lang3-3.3.2.jar");
if (os == "linux") {
    download("https://libraries.minecraft.net/org/lwjgl/lwjgl/lwjgl-platform/2.9.4-nightly-20150209/lwjgl-platform-2.9.4-nightly-20150209-natives-linux.jar", files + "/lwjgl-platform-2.9.4-nightly-20150209-natives-linux.jar", true);
    extract(files + "/lwjgl-platform-2.9.4-nightly-20150209-natives-linux.jar", files);
}
download("https://libraries.minecraft.net/com/mojang/authlib/1.5.21/authlib-1.5.21.jar", files + "/authlib-1.5.21.jar");
download("https://libraries.minecraft.net/io/netty/netty-all/4.0.23.Final/netty-all-4.0.23.Final.jar", files + "/netty-all-4.0.23.Final.jar");
download("https://libraries.minecraft.net/commons-io/commons-io/2.4/commons-io-2.4.jar", files + "/commons-io-2.4.jar");
download("https://libraries.minecraft.net/com/paulscode/soundsystem/20120107/soundsystem-20120107.jar", files + "/soundsystem-20120107.jar");
download("https://libraries.minecraft.net/com/paulscode/librarylwjglopenal/20100824/librarylwjglopenal-20100824.jar", files + "/librarylwjglopenal-20100824.jar");
download("https://libraries.minecraft.net/com/paulscode/codecjorbis/20101023/codecjorbis-20101023.jar", files + "/codecjorbis-20101023.jar");
download("https://libraries.minecraft.net/com/ibm/icu/icu4j-core-mojang/51.2/icu4j-core-mojang-51.2.jar", files + "/icu4j-core-mojang-51.2.jar");
if (os == "linux" || os == "windows") {
    download("https://libraries.minecraft.net/org/lwjgl/lwjgl/lwjgl_util/2.9.4-nightly-20150209/lwjgl_util-2.9.4-nightly-20150209.jar", files + "/lwjgl_util-2.9.4-nightly-20150209.jar")
}
download("https://libraries.minecraft.net/com/mojang/realms/1.7.59/realms-1.7.59.jar", files + "/realms-1.7.59.jar");
download("https://libraries.minecraft.net/commons-codec/commons-codec/1.9/commons-codec-1.9.jar", files + "/commons-codec-1.9.jar");

download("https://launchermeta.mojang.com/mc/assets/1.8/e264980ad255aad2174cbe4d674c102474ae5202/1.8.json", files + "/asset/indexes/1.8.json", true);
let json = to_json(read(files + "/asset/indexes/1.8.json"));
let objects = json["objects"];
for (key in objects) {
    let value = objects[key];
    let hash = value["hash"];
    let hash_start = substring(hash, 0, 2);;
    download("http://resources.download.minecraft.net/" + hash_start + "/" + hash, files + "/asset/objects/" + hash_start + "/" + hash);
}
