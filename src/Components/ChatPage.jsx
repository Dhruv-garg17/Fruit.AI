import React, { useState, useEffect } from 'react';
import './ChatPage.css'; // Ensure this CSS file exists

const fruits = [
  { id: 1, name: 'Apple', price: 2, description: 'A sweet red fruit.' },
  { id: 2, name: 'Banana', price: 1, description: 'A long yellow fruit.' },
  { id: 3, name: 'Orange', price: 1.5, description: 'A tangy citrus fruit.' },
];

function ChatPage() {
  const [currentView, setCurrentView] = useState('chatbox');
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [orderMessage, setOrderMessage] = useState('');
  const [chatMessages, setChatMessages] = useState(['Hi there! How can I assist you?']);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setCurrentView('menu');
        setLoading(false);
      }, 2000); // Simulates a 2-5 seconds loading time
      return () => clearTimeout(timer);
    }
  }, [loading]);

  const handleGetMenu = () => {
    setChatMessages((prevMessages) => [...prevMessages, 'Loading menu...']);
    setLoading(true);
  };

  const handleAdd = (id) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const fruit = updatedCart.find((item) => item.id === id);
      if (fruit) {
        fruit.quantity += 1;
      } else {
        updatedCart.push({
          id,
          name: fruits.find((f) => f.id === id).name,
          quantity: 1,
          price: fruits.find((f) => f.id === id).price,
        });
      }
      return updatedCart;
    });
  };

  const handleRemove = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) => {
          if (item.id === id) {
            if (item.quantity > 1) {
              item.quantity -= 1;
            } else {
              return null; // Remove item if quantity is 1
            }
          }
          return item;
        })
        .filter(Boolean); // Remove null items
      return updatedCart;
    });
  };

  const handleDone = () => {
    setCurrentView('total');
  };

  const handlePlaceOrder = () => {
    setLoading(true);
    setChatMessages((prevMessages) => [...prevMessages, 'Placing your order...']);
    setTimeout(() => {
      const totalFruits = cart.reduce((sum, item) => sum + item.quantity, 0);
      const totalAmount = calculateTotal();
      setOrderMessage(`Your order has been successfully placed for ${totalFruits} fruits and $${totalAmount}.`);
      setLoading(false);
      setCart([]);
      setChatMessages((prevMessages) => [...prevMessages, `Order placed: ${totalFruits} fruits, $${totalAmount}`]);
      setCurrentView('chatbox');
    }, 2000); // Simulates order processing time
  };

  const handleCancelOrder = () => {
    setCart([]);
    setOrderMessage('Order has been canceled.');
    setChatMessages((prevMessages) => [...prevMessages, 'Order has been canceled.']);
    setCurrentView('chatbox');
  };

  const handleHelp = () => {
    setShowHelp(true);
    setCurrentView('chatbox'); // Go back to chatbox view
    setChatMessages((prevMessages) => [...prevMessages, 'Here is the help you requested:']);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
  };

  return (
    <div className="chatbot-page">
      {currentView === 'chatbox' && !showHelp && (
        <div className="chatbox">
          <img src="/images/chat.jpeg" alt="Chatbot" className="chatbot-image" />
          <div className="chat-messages">
            {chatMessages.map((msg, index) => (
              <p key={index}>{msg}</p>
            ))}
          </div>
          <button onClick={handleGetMenu}>Get Menu List</button>
          <button onClick={handleHelp}>Help</button>
        </div>
      )}

      {loading && currentView === 'chatbox' && <p className="loading-message">Loading...</p>}

      {currentView === 'menu' && (
        <div className="menu">
          <h3>Menu</h3>
          <ul>
            {fruits.map((fruit) => (
              <li key={fruit.id} className="menu-item">
                <span>{fruit.name} - ${fruit.price.toFixed(2)}</span>
                <button onClick={() => handleRemove(fruit.id)}>-</button>
                <span className="quantity">{cart.find((item) => item.id === fruit.id)?.quantity || 0}</span>
                <button onClick={() => handleAdd(fruit.id)}>+</button>
              </li>
            ))}
          </ul>
          <button onClick={handleDone}>Done</button>
        </div>
      )}

      {currentView === 'total' && (
        <div className="total">
          <h3>Total Amount</h3>
          <p>${calculateTotal()}</p>
          <button onClick={handleCancelOrder}>Cancel Order</button>
          <button onClick={handlePlaceOrder}>Place Order</button>
        </div>
      )}

      {orderMessage && (
        <div className="order-message">
          <p>{orderMessage}</p>
        </div>
      )}

      {showHelp && (
        <div className="help">
          <h3>Help</h3>
          <div className="chatbox">
            <img src="path/to/chatbot.png" alt="Chatbot" className="chatbot-image" />
            <div className="chat-messages">
              <p>Personal Chatbot: I can help with various tasks!</p>
            </div>
            <div className="fruit-cards">
              {fruits.map((fruit) => (
                <div key={fruit.id} className="fruit-card">
                  <h4>{fruit.name}</h4>
                  <p>Price: ${fruit.price.toFixed(2)}</p>
                  <p>{fruit.description}</p>
                </div>
              ))}
            </div>
            <button onClick={() => setShowHelp(false)}>Close Help</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatPage;
