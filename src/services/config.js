const apiServer = import.meta.env.PUBLIC_SERVER_URL;
const config = {
	apiServer,
	// appUrl: apiServer.includes("localhost")
	// 	? `http://localhost:8081`
	// 	: apiServer.includes("dev")
	// 	? "https://dev.envkit.co"
	// 	: "https://envkit.co",
};

export default config;

