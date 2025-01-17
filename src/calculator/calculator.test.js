import { render, screen, fireEvent } from "@testing-library/react";
import CalculatorWithJest from "./calculator";

describe("Calculator Test Cases", () => {
    test("Addition", async () => {
        render(<CalculatorWithJest />);
        
        fireEvent.click(screen.getByText("2"));
        fireEvent.click(screen.getByText("+"));
        fireEvent.click(screen.getByText("5"));
        fireEvent.click(screen.getByText("="));
        
        const result = await screen.findByTestId("Output"); 
        expect(result.textContent).toBe("7");
    });

    test("Subtraction", async () => {
        render(<CalculatorWithJest />);
        
        fireEvent.click(screen.getByText("8"));
        fireEvent.click(screen.getByText("-"));
        fireEvent.click(screen.getByText("5"));
        fireEvent.click(screen.getByText("="));
        
        const result = await screen.findByTestId("Output"); 
        expect(result.textContent).toBe("3");
    });

    test("Multiplication", async () => {
        render(<CalculatorWithJest />);
        
        fireEvent.click(screen.getByText("3"));
        fireEvent.click(screen.getByText("*"));
        fireEvent.click(screen.getByText("1"));
        fireEvent.click(screen.getByText("1"));
        fireEvent.click(screen.getByText("="));
        
        const result = await screen.findByTestId("Output"); 
        expect(result.textContent).toBe("33");
    });

    test("Division", async () => {
        render(<CalculatorWithJest />);
        
        fireEvent.click(screen.getByText("3"));
        fireEvent.click(screen.getByText("2"));
        fireEvent.click(screen.getByText("/"));
        fireEvent.click(screen.getByText("2"));
        fireEvent.click(screen.getByText("="));
        
        const result = await screen.findByTestId("Output"); 
        expect(result.textContent).toBe("16");
    });
 
});
