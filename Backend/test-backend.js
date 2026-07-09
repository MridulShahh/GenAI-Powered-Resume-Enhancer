require("dotenv").config();
const { generateInterviewReport } = require("./src/services/ai.service");
const connectToDB = require("./src/config/database");

async function testAiService() {
    console.log("=== AI SERVICE TEST START ===");
    try {
        console.log("Connecting to DB...");
        await connectToDB();

        console.log("\nCalling generateInterviewReport...");
        const result = await generateInterviewReport({
            resume: "Mridul Shah. Backend Developer with 3 years of NodeJS experience.",
            selfDescription: "Passionate about backend performance, high throughput, and system architecture.",
            jobDescription: "Backend Software Engineer to build scalable APIs and distributed systems in NodeJS."
        });

        console.log("\n=> SUCCESS! Received report:");
        console.log(JSON.stringify(result, null, 2));
    } catch (err) {
        console.error("\n=> FAILED to call generateInterviewReport:", err);
    }
    console.log("\n=== AI SERVICE TEST END ===");
    process.exit(0);
}

testAiService();
