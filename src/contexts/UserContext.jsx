import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
    // Mock User Data
    const [user, setUser] = useState({
        name: "Lucas Silva",
        email: "lucas@email.com",
        avatar: "https://github.com/shadcn.png"
    });

    // Mock Orders
    const [orders, setOrders] = useState([
        {
            id: "PED-1234",
            date: "2023-10-15",
            status: "Entregue",
            total: 239.80,
            items: ["Whey Protein Isolate", "Creatina Monohidratada"]
        },
        {
            id: "PED-5678",
            date: "2023-11-02",
            status: "Em Trânsito",
            total: 89.90,
            items: ["Pré-Treino Psychotic"]
        }
    ]);

    // Mock Addresses
    const [addresses, setAddresses] = useState([
        {
            id: 1,
            label: "Casa",
            street: "Rua das Flores, 123",
            city: "São Paulo",
            state: "SP",
            zip: "01234-567",
            default: true
        }
    ]);

    // Mock Cards
    const [cards, setCards] = useState([
        {
            id: 1,
            last4: "4242",
            brand: "mastercard",
            expiry: "12/28"
        }
    ]);

    // Actions
    const addAddress = (newAddress) => {
        setAddresses([...addresses, { ...newAddress, id: Date.now(), default: false }]);
    };

    const removeAddress = (id) => {
        setAddresses(addresses.filter(addr => addr.id !== id));
    };

    const addCard = (newCard) => {
        setCards([...cards, { ...newCard, id: Date.now() }]);
    };

    const removeCard = (id) => {
        setCards(cards.filter(card => card.id !== id));
    };

    return (
        <UserContext.Provider value={{
            user, setUser,
            orders,
            addresses, addAddress, removeAddress,
            cards, addCard, removeCard
        }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}
