import { errors } from "@/settings/constants";
const { writeFile, mkdir } = require("fs/promises");
const { existsSync } = require("fs");
const { exec } = require("child_process");
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
    const _currentOS = process.platform;
    console.log("💻 Current OS:", _currentOS);
    const uploadFolder = path.join(process.cwd(), "public");
    const buffer = Buffer.from(blobFile, "base64");
    const filePath = path.join(uploadFolder, fileName);

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
      switch (_currentOS) {
        case "linux":
          await this.setLinuxFolderPermissions(uploadFolder);
          break;
        case "win32":
          await this.setFolderPermissions(uploadFolder);
          break;

        default:
          break;
      }
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

  async setFolderPermissions(folderPath) {
    return new Promise((resolve, reject) => {
      // Use icacls command to set folder permissions and enable inheritance
      exec(
        `icacls "${folderPath}" /grant todos:(OI)(CI)F /inheritance:e`,
        (error, stdout, stderr) => {
          if (error) {
            console.error("Error setting folder permissions:", error);
            reject(error);
          } else {
            console.log("Folder permissions set successfully:", stdout);
            resolve();
          }
        }
      );
    });
  }

  async setLinuxFolderPermissions(folderPath) {
    return new Promise((resolve, reject) => {
      // Use chmod command to recursively set folder and file permissions
      exec(`chmod -R 666 "${folderPath}"`, (error, stdout, stderr) => {
        if (error) {
          console.error("Error setting folder permissions:", error);
          reject(error);
        } else {
          console.log("Folder permissions set successfully:", stdout);
          resolve();
        }
      });
    });
  }
}
