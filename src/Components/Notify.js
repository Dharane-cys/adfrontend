import React from 'react';
import { useCart } from './CartContext';
import './Notify.css'; // Create this CSS file for styling

const NotificationBadge = () => {
    const { getTotalItems } = useCart();

    return (
        <div className="notification-badge">
            {getTotalItems() > 0 && <span className="badge">{getTotalItems()}</span>}
        </div>
    );
};

export default NotificationBadge;
