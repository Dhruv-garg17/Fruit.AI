import React, { useState } from 'react';
import './FAQPage.css';
import FAQItem from './FAQItem';
import FAQForm from './FAQForm';
import sampleImage1 from '/images/Image1.jpeg'; // Example images
import sampleImage2 from '/images/Image2.jpeg';
import sampleImage3 from '/images/Image3.jpg';
import sampleImage4 from '/images/Image4.jpeg';

const FAQPage = () => {
  // Pre-added FAQs with questions, answers, and images
  const initialFaqs = [
    {
      id: 1,
      question: 'Are there any fruits that are particularly high in vitamin C?',
      answer: 'Yes, fruits like oranges, strawberries, kiwi, and guavas are particularly high in vitamin C. Eating these fruits can help boost your immune system and improve overall health.',
      image: sampleImage1,
      isPredefined: true, // Marking predefined FAQs
    },
    {
      id: 2,
      question: 'Can eating fruits help with hydration?',
      answer: ' Absolutely! Many fruits, such as watermelon, cucumbers, and oranges, have high water content and can help keep you hydrated. They are a great addition to your diet, especially during hot weather.',
      image: sampleImage2,
      isPredefined: true, // Marking predefined FAQs
    },
    {
      id: 3,
      question: 'Are there any fruits that are particularly good for digestion?',
      answer: 'Yes, fruits like apples, pears, and papayas are excellent for digestion. They contain dietary fiber and enzymes (like papain in papayas) that aid in breaking down food and promoting healthy bowel movements.',
      image: sampleImage3,
      isPredefined: true, // Marking predefined FAQs
    },
    {
      id: 4,
      question: 'Can eating too much fruit be bad for you?',
      answer: 'While fruits are healthy and packed with nutrients, eating them in excessive amounts can lead to high sugar intake and may contribute to weight gain. It’s best to enjoy a variety of fruits in moderation as part of a balanced diet.',
      image: sampleImage4,
      isPredefined: true, // Marking predefined FAQs
    }
  ];

  const [faqs, setFaqs] = useState(initialFaqs);
  const [editingFAQ, setEditingFAQ] = useState(null);

  // Function to add new FAQ
  const addFAQ = (newFAQ) => {
    setFaqs([...faqs, newFAQ]);
  };

  // Function to update FAQ
  const updateFAQ = (updatedFAQ) => {
    setFaqs(faqs.map((faq) => (faq.id === updatedFAQ.id ? updatedFAQ : faq)));
    setEditingFAQ(null);
  };

  // Function to delete a FAQ
  const deleteFAQ = (id) => {
    setFaqs(faqs.filter((faq) => faq.id !== id));
  };

  return (
    <div className="faq-page-container">
      <h2>FAQ Section</h2>
      <div className="faq-list">
        {faqs.map((faq) => (
          <FAQItem
            key={faq.id}
            faq={faq}
            setEditingFAQ={setEditingFAQ}
            deleteFAQ={deleteFAQ}
            showControls={!faq.isPredefined} // Edit/Delete only for non-predefined FAQs
          />
        ))}
      </div>

      {/* FAQ Form for adding/updating FAQs */}
      <FAQForm
        addFAQ={addFAQ}
        updateFAQ={updateFAQ}
        editingFAQ={editingFAQ}
        setEditingFAQ={setEditingFAQ}
      />
    </div>
  );
};

export default FAQPage;
