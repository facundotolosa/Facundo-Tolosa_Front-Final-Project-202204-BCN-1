import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotePage from "./NotePage";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { notesMock } from "../../mocks/notesMocks";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ noteId: "string1" }),
}));

describe("Given a NotePage component", () => {
  describe("When it's rendered with a note id as a param", () => {
    test("Then it should show the note, content and author of that note", () => {
      const expectedAuthorText = `Note created by ${notesMock[0].author}`;

      const notesMockSlice = createSlice({
        name: "notes",
        initialState: { allNotes: notesMock },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { notes: notesMockSlice.reducer },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <NotePage />
          </Provider>
        </BrowserRouter>
      );

      const receivedTitle = screen.getByText(notesMock[0].title);
      const receivedAuthor = screen.getByText(expectedAuthorText);
      const receivedContent = screen.getByText(notesMock[0].content);

      expect(receivedTitle).toBeInTheDocument();
      expect(receivedAuthor).toBeInTheDocument();
      expect(receivedContent).toBeInTheDocument();
    });
  });
});