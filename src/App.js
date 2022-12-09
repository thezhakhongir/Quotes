import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import AllQuotes from "./components/pages/AllQuotes";
import QuoteDetail from "./components/pages/QuoteDetail";
import NewQuote from "./components/pages/NewQuote";
import Comments from "./components/comments/Comments";
import Layout from "./components/Layout/Layout";
import NotFoundPage from "./components/pages/NotFountPage";

function App() {
  return (
    <Layout>
      <HashRouter basename="/">
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Navigate to="/quotes" />} />
          <Route path="/quotes" element={<AllQuotes />} />
          <Route path="/quotes/:quoteId/*" element={<QuoteDetail />}>
            <Route path="comments" element={<Comments />} />
          </Route>
          <Route path="/new-quote" element={<NewQuote />} />
        </Routes>
      </HashRouter>
    </Layout>
  );
}

export default App;
