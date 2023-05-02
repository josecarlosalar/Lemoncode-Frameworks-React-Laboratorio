import React from "react";
import { TicketBuyContext } from "./ticketBuy.context";
import { ImageTicket } from "./ticketBuy.vm";

interface Props {
    children: React.ReactNode;
  }

export const TicketBuyProvider: React.FC<Props> = ({ children }) => {
  const [ticketBuy, setTicketBuy] = React.useState<ImageTicket[]>([]);

  return (
    <TicketBuyContext.Provider
      value={{
        ticketBuy,
        setTicketBuy
      }}
    >
      {children}
    </TicketBuyContext.Provider>
  );
};