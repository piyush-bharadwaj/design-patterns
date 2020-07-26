
interface IQuestion {
    title: string;
    options: string[];
    printQuestion(): void;
}
function printOptions(options: string[]) {
    for (let option of options) {
        console.info(option);
    }
}
class ManageQuestionnaire {
    private questions: IQuestion[];

    constructor(questions: IQuestion[]) {
        this.questions = questions;
    }

    printQuestions() {
        this.questions.forEach(question => {
            question.printQuestion();
        });
    }
}
class TextQuestion implements IQuestion {
    title: string;
    options: string[] = [];
    constructor(qTitle: string) {
        this.title = qTitle;
    }
    printQuestion() {
        console.info('________________________');
    }
}
class MultiChoiceQuestion implements IQuestion {
    title: string;
    options: string[];
    constructor(qTitle: string, options: string[]) {
        this.title = qTitle;
        this.options = options;

    }
    printQuestion() {
        printOptions(this.options);
    }

}

let allQuestions: IQuestion[];
allQuestions = [new TextQuestion('question1'),
new MultiChoiceQuestion('Have you ever had any one of the following:', ['Diabetes', 'Hypertension',
    'Lung disease',
    'Heart disease',
    'None of the above'])];

const manageQuestionanaire = new ManageQuestionnaire(allQuestions);
manageQuestionanaire.printQuestions()
