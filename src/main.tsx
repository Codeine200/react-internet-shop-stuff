import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import {router} from "@/app/providers/RouterProvider/router";

import '@/app/styles/normalize.css';
import '@/app/styles/main.css';
import {store} from "@/app/providers/StoreProvider/config/store.ts";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <StrictMode>
          <RouterProvider router={router} />
      </StrictMode>
    </Provider>
)
