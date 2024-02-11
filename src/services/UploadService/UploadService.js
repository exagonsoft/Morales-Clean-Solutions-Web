import { errors } from "@/settings/constants";
const { writeFile, mkdir } = require("fs/promises");
const { existsSync } = require("fs");
import path from "path";

export class UploadService {
  constructor() {}

  // async Upload(fileName, blobFile) {
  //   console.log("💻Current OS: ",process.platform);
  //   const uploadFolder = path.join(process.cwd(), 'public');
  //   try {
  //     const buffer = Buffer.from(blobFile, "base64");
  //     if (!existsSync(uploadFolder)) {
  //       mkdirSync(uploadFolder);
  //     }
  //     console.log("📁Folder Created");
  //     const filePath = path.join(uploadFolder, fileName);

  //     // Write the buffer data to the file
  //     writeFile(filePath, buffer, { flag: "w" }, (error) => {
  //       if (error) {
  //         throw new Error(errors.systemWriteError, error);
  //       }
  //       // Set file permissions (read and write for everyone)
  //       chmodSync(filePath, "666");
  //     });
  //     return true;
  //   } catch (error) {
  //     console.log(errors.systemWriteError, error);
  //     throw new Error(errors.internalServerError, error);
  //   }
  // };

  async UploadAsync(fileName, blobFile) {
    console.log("💻 Current OS:", process.platform);
    const uploadFolder = path.join(process.cwd(), "public");
    const buffer = Buffer.from(blobFile, "base64");

    // Check if the upload folder exists, create it if not
    if (!existsSync(uploadFolder)) {
      try {
        await mkdir(uploadFolder, { recursive: true }); // Create folder recursively
        console.log("📁 Folder Created");
      } catch (error) {
        console.error(
          `${errors.systemWriteError} trying to create the upload folder`,
          error
        );
        throw new Error(
          `${errors.systemWriteError} trying to create the upload folder`,
          error
        );
      }
    }

    try {
      // Set file permissions (read and write for everyone)
      await chmod(filePath, "666");
    } catch (error) {
      console.error(
        `${errors.systemWriteError} trying to set upload folder permissions`,
        error
      );
      throw new Error(
        `${errors.systemWriteError} trying to set upload folder permissions`,
        error
      );
    }

    try {
      const filePath = path.join(uploadFolder, fileName);

      // Write the buffer data to the file asynchronously
      await writeFile(filePath, buffer, { flag: "w" });
      return true;
    } catch (error) {
      console.error(
        `${errors.systemWriteError} trying to save the file`,
        error
      );
      throw new Error(
        `${errors.systemWriteError} trying to save the file`,
        error
      );
    }
  }
}
