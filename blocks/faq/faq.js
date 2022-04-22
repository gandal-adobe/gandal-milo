function loadJsonLd (el) {

    const faqEntries = el.querySelectorAll(':scope > div');
    let faqItems = [];
    faqEntries.forEach((faqEntry) => {
        const faqQuestion = faqEntry.querySelectorAll('div')[0];
        const faqAnswer = faqEntry.querySelectorAll('div')[1];
        faqItems.push({
            '@type': 'Question',
            'name': faqQuestion.innerHTML,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': faqAnswer.innerHTML
              }
        });
    });

    const jsonld = {
        "@context": "http://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems
    };

    var jsonLdString = JSON.stringify(jsonld);
    var jsonLdScript = document.createElement('script');
    jsonLdScript.type = 'application/ld+json';
    jsonLdScript.text = jsonLdString;
    document.getElementsByTagName('head')[0].appendChild(jsonLdScript);
}
                    
export default function init(el) {
    loadJsonLd(el);
}