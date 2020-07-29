interface IPrintFile {
	fileName: string;
	printToFile(): void;
}
interface IPrintPDF {
	fileName: string;
	printToPDF(): void;
}
interface IPrintOneNote {
	fileName: string;
	printToOneNote(): void;
}
interface IPrintFax {
	fileName: string;
	printToFax(): void;
}

/**
  Here IPrint has four methods and all are not required by PrintClass

*/
class PrintFile implements IPrintFile {

	fileName: string;
	constructor(fileName: string) {
		this.fileName = fileName;
	}
	printToFile(): void {
		console.info(`Printing file ${this.fileName}`);
	}	
}
const printFile = new PrintFile('index.html');
printFile.printToFile();
