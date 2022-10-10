const path = require("path");
module.exports = {
	webpack: {
		alias: {
			"@pages": path.resolve(__dirname, "src/pages"),
			"@components": path.resolve(__dirname, "src/components"),
			"@contexts": path.resolve(__dirname, "src/contexts"),
			"@hooks": path.resolve(__dirname, "src/hooks"),
			"@utils": path.resolve(__dirname, "src/utils"),
			"@styles": path.resolve(__dirname, "src/styles"),
			"@assets": path.resolve(__dirname, "src/assets"),
			"@interfaces": path.resolve(__dirname, "src/interfaces"),
			"@lib": path.resolve(__dirname, "src/lib"),
			"@": path.resolve(__dirname, "src"),
		},
	},
};
