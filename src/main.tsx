import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import {router} from "@/app/providers/router.tsx";

import '@/app/styles/normalize.css';
import '@/app/styles/main.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
