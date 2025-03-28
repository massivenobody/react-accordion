function AccordionItem({ title, content }: { title: string, content: string }) {

    return (
        <div className="accordion-item">
            <div className="accordion-title">
                <h2>{title}</h2>
            </div>
            <div className="accordion-content">
                <p>{content}</p>
            </div>
        </div>
    )
}

export default AccordionItem;