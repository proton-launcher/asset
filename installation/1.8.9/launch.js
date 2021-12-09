main_class = "net.minecraft.client.main.Main";
classpath.push(files + "/client.jar");
classpath.push(files + "/jopt-simple-4.6.jar");
classpath.push(files + "/guava-17.0.jar");
classpath.push(files + "/lwjgl-2.9.4-nightly-20150209.jar");
classpath.push(files + "/gson-2.2.4.jar");
classpath.push(files + "/log4j-api-2.0-beta9.jar");
classpath.push(files + "/log4j-core-2.0-beta9.jar");
classpath.push(files + "/commons-lang3-3.3.2.jar");
classpath.push(files + "/authlib-1.5.21.jar");
classpath.push(files + "/netty-all-4.0.23.Final.jar");
classpath.push(files + "/commons-io-2.4.jar");
classpath.push(files + "/soundsystem-20120107.jar");
classpath.push(files + "/librarylwjglopenal-20100824.jar");
classpath.push(files + "/codecjorbis-20101023.jar");
classpath.push(files + "/icu4j-core-mojang-51.2.jar");
classpath.push(files + "/lwjgl_util-2.9.4-nightly-20150209.jar");
classpath.push(files + "/realms-1.7.59.jar");
classpath.push(files + "/commons-codec-1.9.jar");

java_arguments.push("-Djava.library.path=" + files);

program_arguments.push("--accessToken");
program_arguments.push("{access_token}");
program_arguments.push("--uuid");
program_arguments.push("{uuid}");
program_arguments.push("--username");
program_arguments.push("{username}");
program_arguments.push("--version");
program_arguments.push("1.8.9");
program_arguments.push("--assetsDir");
program_arguments.push(files + "/asset");
program_arguments.push("--gameDir");
program_arguments.push(root);

policies.push(read(files + "/policy.policy").replace(/{files}/g, files));
