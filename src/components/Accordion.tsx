import AccordionItem from "./AccordionItem";

const accordionData = {
    title: 'What is React?',
    content: 'React is a JavaScript library for building user interfaces.',
}

function Accordion() {
    
    return (
        <AccordionItem title={accordionData.title} content={accordionData.content} />
    )
}

export default Accordion;