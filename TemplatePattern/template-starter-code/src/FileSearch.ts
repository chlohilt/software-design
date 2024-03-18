import * as path from "path";
import {FileProcessor} from "./FileProcessor";
import * as fs from "fs";

export class FileSearch extends FileProcessor {
  private searchRegExp: RegExp;

  private totalMatches: number = 0;

  public static main(): void {
    let fileSearch: FileSearch;

    if (process.argv.length === 5) {
      fileSearch = new FileSearch(
        process.argv[2],
        process.argv[3],
        process.argv[4]
      );
    } else if (process.argv.length === 6 && process.argv[2].match("-r")) {
      fileSearch = new FileSearch(
        process.argv[3],
        process.argv[4],
        process.argv[5],
        true
      );
    } else {
      this.usage();
      return;
    }

    fileSearch.run();
  }

  private static usage(): void {
    console.log(
      "USAGE: npx ts-node dao/FileSearch.ts {-r} <dir> <file-pattern> <search-pattern>"
    );
  }

  private constructor(
    dirName: string,
    filePattern: string,
    searchPattern: string,
    recurse: boolean = false
  ) {
    super(dirName, filePattern, recurse)
    this.searchRegExp = new RegExp(searchPattern);
  }

  private async run() {
    await this.processDirectory(this.dirName);
    console.log();
    console.log(`TOTAL MATCHES: ${this.totalMatches}`);
  }


  protected async processFile(filePath: string): Promise<void> {
    let currentMatchCount = 0;

    if (this.fileRegExp.test(filePath)) {
      try {
        const fileContent: string = await fs.promises.readFile(
            filePath,
            "utf-8"
        );
        const lines: string[] = fileContent.split(/\r?\n/);

        lines.forEach((line) => {
          if (this.searchRegExp.test(line)) {
            if (++currentMatchCount == 1) {
              console.log();
              console.log(`FILE: ${filePath}`);
            }

            console.log(line);
            this.totalMatches++;
          }
        });
      } catch (error) {
        this.unreadableFile(filePath);
      } finally {
        if (currentMatchCount > 0) {
          console.log(`MATCHES: ${currentMatchCount}`);
        }
      }
    }
  }

}

FileSearch.main();
