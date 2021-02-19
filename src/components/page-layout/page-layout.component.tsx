import React from "react"

import { Header } from "../../shared/ui"

export const PageLayout = ({ children }) => (
  <div>
    <Header title="test" />
    {children}
  </div>
)
