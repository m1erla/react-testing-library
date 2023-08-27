import { render, screen, waitFor } from "@testing-library/react";
import  userEvent from "@testing-library/user-event";
import Counter from "./index";
import { act } from "react-dom/test-utils";

describe("Counter Tests", () => {
    let increaseBtn, decreaseBtn, count;

    beforeEach(() => {
        console.log("Before running each test!");
        render(<Counter/>);
        increaseBtn = screen.getByText("Increase");
        decreaseBtn = screen.getByText("Decrease");
        count = screen.getByText("0");
    })

    beforeAll(()  => {
         console.log("Working just once!");
    }) 
   
    afterEach(() => {

    })

    afterAll(() => {

    })

it("increase btn", async () => {
    act(() => {
         userEvent.click(increaseBtn);
    })
     await waitFor(() => {
        expect(count).toHaveTextContent("1");
       })
})

test("decrease btn", async() => {
    act(() => {
        userEvent.click(decreaseBtn);
    })
  

    await waitFor(() => {
        expect(count).toHaveTextContent("-1");
    })
 
})

})