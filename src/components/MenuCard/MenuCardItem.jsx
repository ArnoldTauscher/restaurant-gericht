import { useState } from "react";
import { menuItems } from "../../constants";
import "./MenuCardItem.css";

export const MenuCardItem = () => {
  const [activeTab, setActiveTab] = useState("tab-1");
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="menu-container">
      <div className="tab-container">
        <ul className="tab-list">
          {menuItems.map((category, index) => (
            <li key={index} className="tab-item">
              <button
                className={`tab-button ${
                  activeTab === `tab-${index + 1}` ? "active" : ""
                }`}
                onClick={() => setActiveTab(`tab-${index + 1}`)}
              >
                {category.category}
              </button>
            </li>
          ))}
        </ul>
        <div className="tab-content">
          {menuItems.map((category, index) => (
            <div
              key={index}
              className={`tab-pane ${
                activeTab === `tab-${index + 1}` ? "active" : ""
              }`}
            >
              <div className="menu-grid">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="menu-item" onClick={() => openModal(item.imageSrc)}>
                    <img
                      src={item.imageSrc}
                      alt={item.name}
                      className="menu-item-image"
                    />
                    <div className="menu-item-content">
                      <h3 className="menu-item-name">{item.name}</h3>
                      <p className="menu-item-price">{item.price}</p>
                      <p className="menu-item-description">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Vergrößertes Bild" />
          </div>
        </div>
      )}
    </div>
  );
};

