import { HtmlClass as Html } from "./modules/html.js"
import { FormBuilder } from "./modules/formBuilder.js";


const h1 = Html.element('h1', {
    class : 'h1',
    id : "h1"
})
h1.innerText = 'JS - FormBuilder' 
document.querySelector('#app').appendChild(h1)

const h2 = Html.element('h2', {
    class : 'h1',
    id : "h1"
})
h2.innerText = 'Create costume forms with multiple fields.' 
document.querySelector('#app').appendChild(h2)



const body = document.querySelector('body')

const form = new FormBuilder({
        form : {
            class : 'form', 
            id : 'form-id', 
            method : "POST", 
            action :""
        },
        options : {
            // output : "#app",
            surround : {
                class : "row g-3"
            }
        }
    
    })

     form.addFields([
        {
            field_type : "input",
            required : false,
            label : "Your email",
            type : 'email', 
            name : 'email', 
            placeholder : "john@doe.com",
            value : "",
            options: {} 
        },
        {
            field_type : "textarea",
            required : true,
            name : 'textarea', 
            placeholder : 'Ask your question', 
            rows : 10, 
            label : "Your message",
            text : "Hello everyone !"
        },
        {
            field_type : "select", 
            name: "animal",
            id: "select-id",
            label: "Choose an option",
            options: {
                values: {
                    "option-1": "Option 1",
                    "option-2": "Option 2",
                    "option-3": "Option 3",
                },
                default: "--- Options ---"
            }
        },
        {
            label : "Choose a weekend",
            field_type : "input",
            "required": true,
            type :"week", 
            name : "week", 
            id : "camp-week",
            min : "2023-W18", 
            max : "2023-W26", 
        },
        {
            field_type : "button",
            type : 'submit', 
            class : 'btn btn-primary', 
            text : 'Submit'
        }
    ])


form.appendIn('#app')

    