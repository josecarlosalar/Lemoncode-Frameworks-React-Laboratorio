import React from "react";
import { ImageTicket } from "./ticketBuy.vm";

interface Context {
  ticketBuy: ImageTicket[],
  setTicketBuy: (imageList: ImageTicket[]) => void;
}

export const TicketBuyContext = React.createContext<Context>({
  ticketBuy: [],
  setTicketBuy: () =>
    console.warn(
      "** If you area reading this, likely you have forgotten to add the provider on top of your app"
    ),
});
