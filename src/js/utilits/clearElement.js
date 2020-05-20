export default function clearElements(elements) {
    while (elements.firstChild){
        elements.removeChild(elements.firstChild)
    }    
}