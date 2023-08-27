import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import  userEvent from "@testing-library/user-event";
import Todo from ".";


describe("Todo tests", () => {
  let button, input;

  beforeEach(() => {
    render(<Todo/>);

    button = screen.getByText("Add");
    input = screen.getByLabelText("Text")
  })

  test("Defaultly 3 object the given must be render!", () => {
    const items = screen.getAllByText(/Item/i);

    expect(items.length).toEqual(3);
  })

test("The button and input must be include in the document", () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
})


test("Enter string to the input and push to the button must be added to the list!", async() => {
   
    await waitFor(() => {
        const name = "Furkan";
        userEvent.type(input, name);

        fireEvent.click(button);
 // assertion
   
      expect(screen.getByText(name)).toBeInTheDocument();
    })

   
})


})