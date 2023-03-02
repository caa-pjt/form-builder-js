/**
 * Construit un élément HTML à la demande et le retourne 
 * @param {HtmlTagName} tag 
 * @param {object{HtmlAttributeName}} attr 
 * @returns {HTMLElement}
 */
export function tagElement(tag, attr = {}){
    const el = document.createElement(tag)
    for (const [key, value] of Object.entries(attr)) {
        console.log(`${key} : ${value}`)
        el.setAttribute(key, value)
    }
    return el
}


/**
 * Construit un élément HTML à la demande et le retourne
 * @param {HtmlTagName} tag - Nom du tag HTML
 * @param {ObjectConstructor} attr - listes des attributs html. exemple :
 * - { type : 'email', name : 'email', placeholder : "Enter email", options: { required : true, disabled: true } } 
 * @returns {HTMLElement} Retourne l'élément html
 */
export class HtmlClass {

    static element(tag, attr = {}){
        const el = document.createElement(tag)

        attr.label ? delete attr.label : null
        
        for (const [key, value] of Object.entries(attr)) {
            if(key === 'texte'){
                el.innerText = value
            }
            if(key == 'options'){
                //console.log(Object.entries(attr.options))
                for(const [k, v] of Object.entries(attr.options)){
                    el[k] = v
                }
            }else{ 
                key === "texte" ? null : el.setAttribute(key, value)                
            }
        }
        return el
    }
}