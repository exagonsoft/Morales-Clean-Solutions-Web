import { errors } from "@/settings/constants";
import { existsSync, mkdirSync, writeFile, chmodSync } from "fs";
import path from 'path';

export class UploadService {
  constructor() {}

  async Upload(fileName, blobFile) {
    const uploadFolder = path.join(process.cwd(), 'public');
    try {
      const buffer = Buffer.from(blobFile, "base64");
      if (!existsSync(uploadFolder)) {
        mkdirSync(uploadFolder);
      }
      const filePath = path.join(uploadFolder, fileName);
      console.log(filePath);

      // Write the buffer data to the file
      writeFile(filePath, buffer, { flag: "w" }, (error) => {
        if (error) {
          throw new Error(errors.systemWriteError, error);
        }
        // Set file permissions (read and write for everyone)
        chmodSync(filePath, "666");
      });
      return true;
    } catch (error) {
      console.log("Error: ", error);
      throw new Error(errors.internalServerError, error);
    }
  }
}
