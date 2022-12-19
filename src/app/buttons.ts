export interface Button {
    id: string;
    value: string;
    type: string;
    placeholder: string;
}

export const buttons: Button[] = [
    { id: 'b0', value: 'AC', type: 'allClear', placeholder: 'AC' },
    { id: 'b1', value: 'C', type: 'clear', placeholder: 'C' },
    { id: 'b2', value: '/', type: 'operator', placeholder: '÷' },
    { id: 'b3', value: '*', type: 'operator', placeholder: 'x' },
    { id: 'b4', value: '7', type: 'number', placeholder: '7' },
    { id: 'b5', value: '8', type: 'number', placeholder: '8' },
    { id: 'b6', value: '9', type: 'number', placeholder: '9' },
    { id: 'b7', value: '-', type: 'operator', placeholder: '-' },
    { id: 'b8', value: '4', type: 'number', placeholder: '4' },
    { id: 'b9', value: '5', type: 'number', placeholder: '5' },
    { id: 'b10', value: '6', type: 'number', placeholder: '6' },
    { id: 'b11', value: '+', type: 'operator', placeholder: '+' },
    { id: 'b12', value: '1', type: 'number', placeholder: '1' },
    { id: 'b13', value: '2', type: 'number', placeholder: '2' },
    { id: 'b14', value: '3', type: 'number', placeholder: '3' },
    { id: 'b15', value: '=', type: 'equal', placeholder: '=' },
    { id: 'b16', value: '0', type: 'number', placeholder: '0' },
    { id: 'b17', value: '.', type: 'dot', placeholder: '.' },
];