import React from 'react';

const FAQItem = ({ faq, deleteFAQ, setEditingFAQ, showControls }) => {
  return (
    <div className="faq-item">
      <div className="faq-left">
        {faq.image && <img src={faq.image} alt="FAQ" />}
      </div>
      <div className="faq-right">
        <div className="faq-question">
          <h4>{faq.question}</h4>
        </div>
        <p className="faq-answer">{faq.answer}</p>

        {/* Only show controls (Edit/Delete) for non-predefined FAQs */}
        {showControls && (
          <div className="faq-controls">
            <button onClick={() => setEditingFAQ(faq)}>Edit</button>
            <button onClick={() => deleteFAQ(faq.id)}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQItem;
