main_class = "net.minecraft.launchwrapper.Launch";

classpath.push(files + "/forge-1.8.9-11.15.1.2318-1.8.9-universal.jar");
classpath.push(files + "/launchwrapper-1.12.jar");
classpath.push(files + "/asm-all-5.0.3.jar");
classpath.push(files + "/lzma-0.0.1.jar");
classpath.push(files + "/trove4j-3.0.3.jar");
classpath.push(files + "/vecmath-1.5.2.jar");

program_arguments.push("--tweakClass");
program_arguments.push("net.minecraftforge.fml.common.launcher.FMLTweaker");
