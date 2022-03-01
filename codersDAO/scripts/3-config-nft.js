import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x67855a775ce8a03afD078C08435B7435903fa942",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Coding Wizard badge",
        description: "This NFT will give you access to CodersDAO!",
        image: readFileSync("scripts/assets/wizard.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()