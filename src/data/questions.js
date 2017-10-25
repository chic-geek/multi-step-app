const questions = [
    {
        id: 1,
        question: 'What\'s your favourite flavour?',
        answer: {
            type: 'dropdown',
            label: 'Favourite Fruit',
            options: [
                { id: 1, value: 'Grapefruit' },
                { id: 2, value: 'Lemon' },
                { id: 3, value: 'Raspberry' },
                { id: 4, value: 'Coconut' },
                { id: 5, value: 'Stawberry' }
            ]
        }
    },
    {
        id: 2,
        question: 'What\'s your favourite colour?',
        answer: {
            type: 'radio',
            options: [
                { id: 1, value: 'Red' },
                { id: 2, value: 'Green' },
                { id: 3, value: 'Blue' }
            ]
        }
    },
    {
        id: 3,
        question: 'What\'s your pets name?',
        answer: {
            type: 'textInput',
            options: []
        }
    },
    {
        id: 4,
        question: 'How old are you?',
        answer: {
            type: 'numberInput',
            options: []
        }
    }
];

export default questions;
