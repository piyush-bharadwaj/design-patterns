interface IQuestion {
    title: string;
    description: string;
    options: string[];
    questionType: string | "single" | "multichoice" | "boolean";
}

class Questionnaire {
    private questions: IQuestion[];

    constructor(questions: IQuestion[]) {
        this.questions = questions;
    }
    printOptions(options: string[]) {
        for (let option of options) {
            console.info(option);
        }
    }

    printQuestions() {
        this.questions.forEach(question => {
            console.info(question.title);
            switch (question.questionType) {
                case "text":
                    console.info(question.options);
                    break;
                case "boolean":
                    console.info("True");
                    console.info("False");
                    break;
                case "multipleChoice":
                    this.printOptions(question.options);
                    break;
            }
            console.log('');
        });
    }
}

let questions: IQuestion[];
questions = [{ title: "Tell us about Covoid19", description: "", options: ['Answer 1'], questionType: "text" },
{ title: "Are you quarantine?", description: "", options: ['Yes', 'No'], questionType: "boolean" },
{ title: "Your favriote technology during lockdown", description: "", options: ['CSS', 'HTML', 'Angular', 'ReactJS'],questionType: "multipleChoice" }
];

const questionanaire = new Questionnaire(questions);
questionanaire.printQuestions();