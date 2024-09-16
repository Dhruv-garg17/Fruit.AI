import React, { useState } from 'react';

const FAQForm = ({ addFAQ, updateFAQ, editingFAQ, setEditingFAQ }) => {
  const [question, setQuestion] = useState(editingFAQ ? editingFAQ.question : '');
  const [answer, setAnswer] = useState(editingFAQ ? editingFAQ.answer : '');
  const [image, setImage] = useState(editingFAQ ? editingFAQ.image : null);
  const [imagePreview, setImagePreview] = useState(editingFAQ ? editingFAQ.image : null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(file); // Store the actual file
        setImagePreview(reader.result); // Store the base64 image for preview
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newFAQ = {
      id: editingFAQ ? editingFAQ.id : Date.now(),
      question,
      answer,
      image: imagePreview, // Use the image preview as the display image
    };

    if (editingFAQ) {
      updateFAQ(newFAQ);
    } else {
      addFAQ(newFAQ);
    }

    // Clear the form after submission
    setQuestion('');
    setAnswer('');
    setImage(null);
    setImagePreview(null);
  };

  const handleCancelEdit = () => {
    setEditingFAQ(null);
    setQuestion('');
    setAnswer('');
    setImage(null);
    setImagePreview(null);
  };

  return (
    <form className="faq-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter question"
        required
      />
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Enter answer"
        required
      />
      
      <input type="file" accept="image/*" onChange={handleImageChange} />
      
      {imagePreview && (
        <div className="image-preview">
          <img src={imagePreview} alt="Selected" style={{ width: '100px', height: '100px' }} />
        </div>
      )}

      <button type="submit">{editingFAQ ? 'Update FAQ' : 'Add FAQ'}</button>
      {editingFAQ && <button type="button" onClick={handleCancelEdit}>Cancel Edit</button>}
    </form>
  );
};

export default FAQForm;
