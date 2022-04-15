main_class = "net.minecraft.client.main.Main";
java_version = 17

//classpath.push(files);
classpath.push(files + "/client.jar");
classpath.push(files + "/jopt-simple-5.0.4.jar");
classpath.push(files + "/logging-1.0.0.jar");
classpath.push(files + "/slf4j-api-1.8.0-beta4.jar");
classpath.push(files + "/log4j-slf4j18-impl-2.17.0.jar");
classpath.push(files + "/log4j-api-2.17.0.jar");
classpath.push(files + "/log4j-core-2.17.0.jar");
classpath.push(files + "/brigadier-1.0.18.jar");
classpath.push(files + "/netty-all-4.1.68.Final.jar");
classpath.push(files + "/guava-31.0.1-jre.jar");
classpath.push(files + "/datafixerupper-4.1.27.jar");
classpath.push(files + "/fastutil-8.5.6.jar");
classpath.push(files + "/commons-lang3-3.12.0.jar");
classpath.push(files + "/javabridge-1.2.24.jar");
classpath.push(files + "/gson-2.8.9.jar");
classpath.push(files + "/authlib-3.3.39.jar");
classpath.push(files + "/commons-io-2.11.0.jar");
classpath.push(files + "/jna-5.10.0.jar");
classpath.push(files + "/jna-platform-5.10.0.jar");
classpath.push(files + "/lwjgl-glfw-3.2.2.jar");
classpath.push(files + "/lwjgl-3.2.2.jar");
classpath.push(files + "/lwjgl-opengl-3.2.2.jar");
classpath.push(files + "/lwjgl-openal-3.2.2.jar");
classpath.push(files + "/icu4j-70.1.jar");
classpath.push(files + "/text2speech-1.12.4.jar");
classpath.push(files + "/lwjgl-stb-3.2.2.jar");
classpath.push(files + "/oshi-core-5.8.5.jar");
classpath.push(files + "/blocklist-1.0.10.jar");
classpath.push(files + "/failureaccess-1.0.1.jar");

java_arguments.push("-Djava.library.path=" + files);

program_arguments.push("--accessToken");
program_arguments.push("{access_token}");
program_arguments.push("--uuid");
program_arguments.push("{uuid}");
program_arguments.push("--username");
program_arguments.push("{username}");
program_arguments.push("--version");
program_arguments.push("1.18.2");
program_arguments.push("--assetsDir");
program_arguments.push(files + "/asset");
program_arguments.push("--assetIndex");
program_arguments.push("1.18");
program_arguments.push("--gameDir");
program_arguments.push(root);