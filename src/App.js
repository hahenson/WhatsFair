import React from "react";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import SignIn from "./components/SignIn";
import Fairlist from "./components/Fairlist";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import { Routes, Route } from "react-router-dom";

import AddFair from "./components/AddFair";
import { UserProvider } from "./contexts/UserProvider";
import { FairProvider } from "./contexts/FairProvider";
import FairDetails from "./components/FairDetails";
import { CommentProvider } from "./contexts/CommentProvider";
import UserProfile from "./components/UserProfile";
import CommentList from "./components/CommentList";
import AddComment from "./components/AddComment";
import EditFair from "./components/EditFair";

function App() {
  return (
    <UserProvider>
      <FairProvider>
        <CommentProvider>
          <div>
            {/* <BrowserRouter> */}
            <Routes>
              <Route path="/" element={<Home />}>
                <Route index element={<Welcome />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="profile" element={<UserProfile />} />
                <Route path="fairlist" element={<Fairlist />} />
                <Route path="comments/new" element={<AddComment />} />
                <Route path="comments" element={<CommentList />} />
                <Route path="addfair" element={<AddFair />} />
                <Route path="fairdetails/:fairId" element={<FairDetails />} />
                <Route path="updatefair/:fairId" element={<EditFair />} />
                <Route path="about" element={<AboutUs />} />
                <Route path="*" element={<ErrorPage />} />
              </Route>
            </Routes>
            <Footer />
            {/* </BrowserRouter> */}
          </div>
        </CommentProvider>
      </FairProvider>
    </UserProvider>
  );
}

export default App;
