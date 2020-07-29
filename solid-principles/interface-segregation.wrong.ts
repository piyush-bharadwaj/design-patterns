interface IPrint {
	fileName: string;

	printFile(): void;
	printToPDF(): void;
	printToOneNote(): void;
	printToFax(): void;
}
/**
  Here IPrint has four methods and all are not required by PrintClass

*/
class PrintFile implements IPrint {

	fileName: string;
	constructor(fileName: string) {
		this.fileName = fileName;
	}
	printFile(): void {
		console.info(`Printing file ${this.fileName}`);
	}
	printToPDF(): void {

	}
	printToOneNote(): void {

	}
	printToFax(): void {

	}
}
const printFile = new PrintFile('index.html');
printFile.printFile();
