import * as fs from "fs";
import * as path from "path";

export abstract class FileProcessor {
    protected dirName: string;
    protected fileRegExp: RegExp;
    protected recurse: boolean;

    protected total: number = 0;

    protected constructor(
        dirName: string,
        filePattern: string,
        recurse: boolean = false
    ) {
        this.dirName = dirName;
        this.fileRegExp = new RegExp(filePattern);
        this.recurse = recurse;
    }

    protected async processDirectory(filePath: string) {
        if (!this.isDirectory(filePath)) {
            this.nonDirectory(filePath);
            return;
        }

        if (!this.isReadable(filePath)) {
            this.unreadableDirectory(filePath);
            return;
        }

        const files = fs.readdirSync(filePath);

        for (let file of files) {
            const fullPath = path.join(filePath, file);
            if (this.isFile(fullPath)) {
                if (this.isReadable(fullPath)) {
                    await this.processFile(fullPath);
                } else {
                    this.unreadableFile(fullPath);
                }
            }
        }

        if (this.recurse) {
            for (let file of files) {
                const fullPath = path.join(filePath, file);
                if (this.isDirectory(fullPath)) {
                    await this.processDirectory(fullPath);
                }
            }
        }
    }

    protected nonDirectory(dirName: string): void {
        console.log(`${dirName} is not a directory`);
    }

    protected unreadableDirectory(dirName: string): void {
        console.log(`Directory ${dirName} is unreadable`);
    }

    protected unreadableFile(fileName: string): void {
        console.log(`File ${fileName} is unreadable`);
    }

    protected isDirectory(path: string): boolean {
        try {
            return fs.statSync(path).isDirectory();
        } catch (error) {
            return false;
        }
    }

    protected isFile(path: string): boolean {
        try {
            return fs.statSync(path).isFile();
        } catch (error) {
            return false;
        }
    }

    protected isReadable(path: string): boolean {
        try {
            fs.accessSync(path, fs.constants.R_OK);
            return true;
        } catch (error) {
            return false;
        }
    }

    protected abstract processFile(fullPath: string): void
}