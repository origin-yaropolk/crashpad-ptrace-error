const linuxConfig = {
	linux: {
		target: ["snap"],
		category: "Other",
		description: "Reproduce crashpad ptrace error",
	},

	snap: {
		artifactName: "crashpad-ptrace-error.${ext}",
		confinement: "strict",
		summary: "crashpad-ptrace-error",
		plugs: ["default"]
	}
}

const builderConfig =
{
	productName: "crashpad-ptrace-error",
	appId: "com.yaropolk.crashpad-ptrace-error.desktop",
	directories: {
		["output"]: "out",
		["app"]: "./src",
	}
}

if (process.platform === 'linux') {
	Object.assign(builderConfig, linuxConfig);
}

module.exports = builderConfig;
