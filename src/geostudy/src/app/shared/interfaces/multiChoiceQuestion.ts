export interface MultiChoiceQuestion {
    text: string;
    options: MultiChoiceOption[];
}

export interface MultiChoiceOption {
    text: string, 
    correct: boolean
}